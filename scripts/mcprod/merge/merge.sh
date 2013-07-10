#!/bin/bash

if [[ "$#" < "2" ]] ; then
  echo "Usage:"
  echo "  ./merge.sh [source] [destination]"
  exit 1
fi

src="$1"
dst="$2"

echo "Source directory: $src"
echo "Destination directory: $dst"

if [[ ! -e "$src" ]] ; then
  echo "ERROR: source do not exists"
  exit 1
fi

echo "Building merging utility..."
make

if [[ "$?" != "0" ]] ; then
  echo "ERROR: fail to compile merging utility"
  exit 1
fi

merge=$(pwd)/merge.exe

# make sure destination directory exists:
mkdir -p $dst
# and get full path:
dst=$(cd $dst; pwd)

echo "Merging source to destination (1st pass)..."

# ===== 1st pass:
# - summ histograms for statistics improvement
# - skip combined (Np0 + ... + Npn) alpgen files if any

# file with list of alpgen samples (Np0 + ... + Npn) to be combined in the 2nd pass
alpgenList=$(mktemp)

# walk through source directory:
cd $src

for i in $(find) ; do
  # path to destination file/directory:
  dstf="$dst/$i"
  
  if [[ -d "$i" ]] ; then
    # this is a directory, make sure there is the same directory in the destination
    #echo "mkdir $dstf"
    mkdir -p $dstf
  else
    # this is a file
    # extract extension
    ext=${i##*.} # remove everything till extension
    
    if [[ "$ext" == "params" ]] ; then
      # this is steering file, make a simple copy
      #echo "steer $i $dstf"
      cp -f $i $dstf
    elif [[ "$ext" == "dat" ]] ; then
      # this is histogram file
      if ! grep -q "METADATA" "$i" ; then
        # this is DATA histogram, copy
        #echo "data $i $dstf"
        cp -f $i $dstf
      else
        # this is MC histogram
        
        # Alpgen-specific
        if grep -q "^generator=alpgen" "$i" ; then
          if grep -q "^blend=1" "$i" ; then
            # the histogram is a results of the previous combination, skip
            continue
          else
            # the histogram is one of npX samples, add to the list for postprocessing
            
            # following invocation substitute basedir of file $i by '*',
            # for example:
            #   dat/xxx/yyy/zzz/alpgen/2.1.4/0,1/tune.dat ->
            #   dat/xxx/yyy/zzz/alpgen/2.1.4/*/tune.dat
            echo "${i%/*/*}/*/${i##*/}" >> $alpgenList
          fi
        fi
        
        if [[ ! -e $dstf ]] ; then
          # new histogram, copy
          #echo "newhist $i $dstf"
          cp -f $i $dstf
        else
          # destination histogram exists, merge
          # (run merge in background)
          echo "bg-merge 0 $i $dstf"
          $merge 0 $i $dstf $dstf &
          # the destination histogram will not be overwritten
          # if two input histograms are not compatible
          # (for example share the same seed)
          # this is ok, and no more action is needed
        fi
      fi
    else
      # unknown file extension, do nothing
      echo "unknown $i"
    fi
  fi
  
  # wait from time to time (with probability ~ 5%) for jobs
  # to prevent system flood by background merge processes
  if (( "$RANDOM" < 1600 )) ; then
    wait
  fi
done

# wait again to be sure all jobs are finished
wait


echo "Merging source to destination (2nd pass)..."

# ===== 2nd pass:
# produce summed (Np0 + ... + Npn) Alpgen files according to merge mode:
#  1: histograms normalized to xsection
#  2: histograms with const. area or bin content

# list of process/observable normalized to xsection (merge mode = 1)
xsect_obs="winclusive/njets winclusive/pt jets/pt jets/dijet_chi jets/dijet_m12"

cd $dst

sort -u $alpgenList | while read dmask ; do
  # select merge mode
  mode="2"
  for obs in $xsect_obs ; do
    if [[ "${dmask}" =~ "$obs" ]]; then
      mode="1"
    fi
  done
  
  # combine .dat files
  dst_dat=${dmask/\*\//}
  echo "merge $mode $dmask $dst_dat"
  $merge $mode $dmask $dst_dat
  
  # combine .params files
  pmask=${dmask/%\.dat/\.params}
  dst_params=${pmask/\*\//}
  
  for f in $pmask ; do
    echo "# => $f:"
    cat $f
    echo ""
    echo ""
  done > $dst_params
done

# clean-up
rm -f $alpgenList
