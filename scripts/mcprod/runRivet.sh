#!/bin/bash

C_DIR=$(pwd)

# setup paths and environment to run Rivet
set_environment () {
  echo "Setting environment..."
  
  local mode=$1

  if [[ "$mode" == "lxbatch" || "$mode" == "boinc" ]] ; then
    # in lxbatch or boinc mode the script has access only to the current directory,
    # repoint the temp directory root to $PWD/tmp
    export TMPDIR="$(pwd)/tmp"
    mkdir -p $TMPDIR || exit 1
  fi

  # path to software packages:
  local EXTERNAL=/afs/cern.ch/sw/lcg/external
  if [[ "$mode" == "boinc" ]] ; then
    EXTERNAL=/cvmfs/sft.cern.ch/lcg/external
  fi

  # set SLC5 platform name:
#  local LCG_PLATFORM=x86_64-slc5-gcc43-opt
  local LCG_PLATFORM=x86_64-slc6-gcc46-opt
  local LCG_PLATFORM_GCC=x86_64-slc6
  if [[ "$(uname -m)" != "x86_64" ]] ; then
    LCG_PLATFORM=i686-slc5-gcc43-opt
  fi

#  source $EXTERNAL/gcc/4.3.2/$LCG_PLATFORM/setup.sh $EXTERNAL
  source $EXTERNAL/gcc/4.6.3/$LCG_PLATFORM_GCC/setup.sh $EXTERNAL

  if [[ "$?" != "0" ]] ; then
    echo "ERROR: fail to set environment (gcc)"
    exit 1
  fi

  HEPMCVERSION=2.06.05
  local MCGENERATORS=$EXTERNAL/MCGenerators_hepmc$HEPMCVERSION
#  RIVET=$MCGENERATORS/rivet/1.8.2/$LCG_PLATFORM
  RIVET=$MCGENERATORS/rivet/1.8.3b1/$LCG_PLATFORM
  HEPMC=$EXTERNAL/HepMC/$HEPMCVERSION/$LCG_PLATFORM
#  local PYTHON=$EXTERNAL/Python/2.6.5/$LCG_PLATFORM
  local PYTHON=$EXTERNAL/Python/2.6.5p2/$LCG_PLATFORM
  local FASTJET=$EXTERNAL/fastjet/2.4.4/$LCG_PLATFORM
  local GSL=$EXTERNAL/GSL/1.10/$LCG_PLATFORM
  
  export PYTHONPATH=$RIVET/lib/python2.6/site-packages:$PYTHONPATH
  export LD_LIBRARY_PATH=$HEPMC/lib:$RIVET/lib:$PYTHON/lib:$FASTJET/lib:$GSL/lib:$LD_LIBRARY_PATH
  export PATH=$PYTHON/bin:$RIVET/bin:$PATH
  export RIVET_REF_PATH=$(rivet-config --datadir)
  # add user analyses to Rivet: 
  export RIVET_ANALYSIS_PATH=$(pwd)/analyses
  
  local ROOTPRE
  if [[ "$mode" == "boinc" ]] ; then
    ROOTPRE=$EXTERNAL
  else
    ROOTPRE=/afs/cern.ch/sw/lcg/app/releases
  fi
#  export ROOTSYS=$ROOTPRE/ROOT/5.32.00/$LCG_PLATFORM/root
  export ROOTSYS=$ROOTPRE/ROOT/5.34.00/$LCG_PLATFORM/root
  
  echo "MCGENERATORS=$MCGENERATORS"
  echo "RIVET=$RIVET"
  echo "RIVET_REF_PATH=$RIVET_REF_PATH"
  echo "RIVET_ANALYSIS_PATH=$RIVET_ANALYSIS_PATH"
  echo "ROOTSYS=$ROOTSYS"
  echo ""
  
  # check paths to essential parts of machinery:
  for path in MCGENERATORS RIVET HEPMC PYTHON ROOTSYS ; do
    if [[ ! -e "${!path}" ]] ; then
      echo "ERROR: fail to set environment ($path)"
      exit 1
    fi
  done
  
  check_files $RIVET/bin/{rivet-config,aida2flat,rivet-buildplugin} $HEPMC/lib/libHepMC.so $ROOTSYS/bin/root-config
}

#
check_files () {
  local files=$@
  
  for f in $files ; do
    if ! cp $f /dev/null ; then
      echo "ERROR: fail to access $f"
      exit 1
    fi
  done
}


# check collisions between histograms
# (different histograms belong to the same combination of 'beam process energy observable cuts')
check_overlap () {
  cat configuration/rivet-histograms.map | weed | cut -d ' ' -f 1-3,6,7 | sort | uniq -d | grep -v "\- -$"
}

# list of analyses which we use:
list_analyses() {
  cat configuration/rivet-histograms.map | weed | cut -d ' ' -f 5 | sed 's,_[^_]*$,,' | sort -u
}

print_list () {
  while read analysis ; do
    local experiment=${analysis%%_*}
    
    if [[ "$experiment" != "$experiment0" ]] ; then
      if [[ "$experiment0" != "" ]] ; then
        echo ""
      fi
      
      echo -n "$experiment: $analysis "
      experiment0="$experiment"
    else
      echo -n "$analysis "
    fi
  done
  
  echo ""
}

# check consistency of configuration/rivet-histograms.map file
check_analyses () {
  # first check all analyses which we use are available in Rivet
  # (analyses can be removed or renamed in new version of Rivet)
  
  # list of analyses implemented by us (in analyses/*)
  local ourA=$(find analyses/*.cc | xargs -I @ basename @ .cc)
  
  # list of analyses available in Rivet:
  local rivetA=$(rivet --list-analyses -q)
  
  # list of analyses covered in mcplots (mapped in configuration/rivet-histograms.map)
  local coveredA=$(list_analyses)
  
  echo "List of our analyses (analyses/*):"
  echo "$ourA"
  echo ""
  
  echo "List of analyses mapped in configuration/rivet-histograms.map but not available in Rivet or in analyses/*:"
  {
    echo "$ourA"
    echo "$ourA"
    echo "$rivetA"
    echo "$rivetA"
    echo "$coveredA"
  } | sort | uniq -u
  echo ""
  
  echo "List of overlapping analyses (available both in Rivet and in analyses/*):"
  {
    echo "$ourA"
    echo "$rivetA"
  } | sort | uniq -d
  echo ""
  
  echo "List of uncovered analyses:"
  {
    echo "$rivetA"
    echo "$coveredA"
    echo "$coveredA"
  } | sort | uniq -u | print_list
}

# add 'xfocus' column to histogram bins
extend_hist () {
  while read -r line ; do
    if [[ "${line:0:1}" == "#" || "$line" == "" || "${line/=/}" != "$line" ]] ; then
      if [[ "${line:0:1}" == "#" && "${line/#*xlow*xhigh*yval*yerr*yerr*/}" == "" ]] ; then
        # header line before histogram bins
        echo "## xlow    xfocus     xhigh           yval      yerrminus      yerrplus"
      else
        # comment, empty or parameter line
        echo "$line"
      fi
    else
      # histogram bin
      local vals=( $line )
      
      local xlow=${vals[0]}
      local xhigh=${vals[1]}
      local xfocus=$(echo "( $xlow + $xhigh ) / 2" | sed -e 's,e+,*10^,g' -e 's,e-,*10^-,g' | bc -l | sed 's,0*$,,')
      
      # in case of "$xlow + $xhigh == 0" xfocus will be evaluated as
      # empty string (due to stripping of tailing zeros), correct this:
      if [[ "$xfocus" == "" ]] ; then xfocus="0." ; fi
      
      echo "$xlow $xfocus $xhigh ${vals[2]} ${vals[3]} ${vals[4]}"
    fi
  done
}

# this function strip comments, empty lines and double spaces from input stream
weed () {
  sed 's,^#.*,,' | sed '/^$/ d' | sed 's,  *, ,g'
}

do_display () {
  echo "Updating display..."
  
  local datdir="$1"   # directory with input .dat files
  local dispdir="$2"  # output directory
  local vars=( $3 )   # job metadata
  
  # temporary directory for all intermediate files:
  local tmpdir=$(mktemp -d)
  
  # preserve path to plotter utility:
  local plotter="$(pwd)/plotter/plotter.exe"
  
  cp resources.json $(find $datdir/ -name '*.dat') $tmpdir/
  cd $tmpdir/
  
  # TODO: add display of reference histograms as well.
  #       Not possible to do right now as MC and DATA
  #       histograms have different normalisation.
  
  #echo "Preparing steering files..."
  for fname in $(find . -type f -name '*.dat') ; do
    #echo "---> $fname"
    
    # prepare plotter steering file:
    ( echo "# BEGIN PLOT"
      echo "LogY=1"
      echo "LogX=0"
      echo "Title=%observable% (%cuts%)"
      echo "upperLeftLabel=%energy% GeV %beam%"
      echo "upperRightLabel=%process%"
      echo "textField1=%generator% %version%"
      echo "textField2="
      echo "outputFileName=$fname"
      echo "drawRatioPlot=0"
      echo "# END PLOT"
      echo ""
      echo "# BEGIN HISTOGRAM"
      echo "filename=$fname"
      echo "markerStyle=33"
      echo "markerSize=1.4"
      echo "lineStyle=2"
      echo "lineWidth=1.5"
      echo "color=1.0 0.0 0.0"
      echo "legend=%tune%"
      echo "reference=0"
      echo "# END HISTOGRAM"
    ) > $fname.script
  done
  
  # extract number of processed events from one of histograms
  local nevts=$(find -name '*.dat' | xargs cat | grep "^nevts=" | head -n 1 | cut -d = -f 2)
  if [[ "$nevts" == "" ]] ; then
    nevts="0"
  fi
  
  # complete *.scrips and resources.json by metadata:
  # $vars is array: "$beam $process $energy $params $generator $version $tune"
  sed -e "s,%beam%,${vars[0]},"      \
      -e "s,%process%,${vars[1]},"   \
      -e "s,%energy%,${vars[2]},"    \
      -e "s/%cuts%/${vars[3]}/"      \
      -e "s,%generator%,${vars[4]}," \
      -e "s,%version%,${vars[5]},"   \
      -e "s,%tune%,${vars[6]},"      \
      -e "s,%observable%,,"          \
      -e "s,%nevts%,$nevts,"         \
      -i $(find -name '*.script') resources.json
  
  #echo "Preparing plots..."
  # run plotter
  $plotter *.script >& /dev/null
  
  # complete resources.json by the list of generated .png files:
  find . -type f -name '*.png' | sed -e 's,^.,",' -e 's/$/",/' > histograms.txt
  sed -n '1h;1!H;${;g;s/,$//;p;}' -i histograms.txt  # remove last ',' from histograms.txt
  sed -e "/%histograms%/ r histograms.txt" -e "/%histograms%/ d" -i resources.json
  
  # calc number of histograms:
  local nhist=$(find -name '*.png' | wc -l)
  
  # update output directory:
  mv -f * $dispdir/
  
  # remove temp dir
  rm -rf $tmpdir
  
  echo "Display update finished ($nhist histograms, $nevts events)."
}

# function runs online display update machinery
# two conditions are neccessary to run:
# 1. T4T_DISPLAY environment variable is set and points to pictures output directory
# 2. plotter/ should be available in current directory
display_service () {
  local datdir="$1"
  local vars="$2"
  
  if [[ ! -d plotter/ || "$T4T_DISPLAY" == "" || ! -d "$T4T_DISPLAY" ]] ; then
    echo "INFO: display service switched off"
    return 0
  fi
  
  # save current directory:
  local wd=$(pwd)
  
  # compile plotter:
  make -B -C plotter ROOTSYS=$ROOTSYS
  
  if [[ "$?" != "0" ]] ; then
    # failed to compile plotter - this is only possible if
    # some dependencies is not accessible due to network
    # connection problems, exit with error
    return 1
  fi
  
  while true ; do
    cd $wd
    do_display $datdir $T4T_DISPLAY "$beam $process $energy $params $generator $version $tune"
    sleep 60
  done
}



# run all machinery and produce histograms
run () {
  # input parameters
  local mode=$1
  local beam=$2
  local process=$3
  local energy=$4
  local params=$5
  local specific=$6
  local generator=$7
  local version=$8
  local tune=$9
  local nevts=${10}
  local seed=${11}
  
  echo "Input parameters:"
  echo "mode=$mode"
  echo "beam=$beam"
  echo "process=$process"
  echo "energy=$energy"
  echo "params=$params"
  echo "specific=$specific"
  echo "generator=$generator"
  echo "version=$version"
  echo "tune=$tune"
  echo "nevts=$nevts"
  echo "seed=$seed"
  echo ""
  
  # check mode:
  if [[ "$mode" != "local" && "$mode" != "dryrun" && "$mode" != "lxbatch" && "$mode" != "boinc" ]] ; then
    echo "ERROR: unknown mode: $mode"
    exit 1
  fi
  
  # paths to temporary directories and files
  echo "Prepare temporary directories and files ..."
  local workd=$(pwd)
  
  local tmpd
  tmpd="$(mktemp -d)"
  
  if [[ "$?" != "0" ]] ; then
    echo "ERROR: fail to create temp directory"
    exit 1
  fi
  
  # clean temp directory
  rm -rf $tmpd/*
  
  local tmp_params="$tmpd/generator.params"
  local tmp_hepmc="$tmpd/generator.hepmc"
  mkfifo "$tmp_hepmc" || exit 1
  local tmp_aida="$tmpd/generator.aida"
  local tmp_jobs="$tmpd/jobs.log"
  local tmpd_flat="$tmpd/flat"
  mkdir $tmpd_flat
  local tmpd_dump="$tmpd/dump"
  mkdir $tmpd_dump
  local tmpd_html="$tmpd/html"
  
  echo "workd=$workd"
  echo "tmpd=$tmpd"
  echo "tmp_params=$tmp_params"
  echo "tmp_hepmc=$tmp_hepmc"
  echo "tmp_aida=$tmp_aida"
  echo "tmp_jobs=$tmp_jobs"
  echo "tmpd_flat=$tmpd_flat"
  echo "tmpd_dump=$tmpd_dump"
  echo "tmpd_html=$tmpd_html"
  echo ""
  
  #
  echo "Prepare Rivet parameters ..."
  # beam process energy params -> histogramNames
  # prepare list of histograms
  local histogramsNames=$(cat configuration/rivet-histograms.map | weed | grep "^$beam $process $energy $params " | grep -v " - -$" | cut -d ' ' -f 5 | sort -u)
  # prepare list of analyses to run
  local analysesNames=$(echo "$histogramsNames" | sed 's,_[^_]*$,,' | sort -u)
  
  if [[ "$analysesNames" == "" ]] ; then
    echo "ERROR: can not find any analysis for required parameters:"
    echo "         beam       = $beam"
    echo "         process    = $process"
    echo "         energy     = $energy"
    echo "         params     = $params"
    echo ""
    echo "       in map file:"
    echo "         configuration/rivet-histograms.map"
    exit 1
  fi
  
  echo "analysesNames="$analysesNames
  echo ""
  
  # check presence of Rivet data files:
  local analysesFiles=$(find $RIVET_REF_PATH $RIVET_ANALYSIS_PATH -maxdepth 1 -type f)
  
  for i in $analysesNames ; do
    # list of all files belonging to analysis $i
    local analysisFiles=$(echo "$analysesFiles" | grep $i)
    
    if [[ "$analysisFiles" == "" ]] ; then
      echo "ERROR: no files for $i analysis"
      exit 1
    fi
    
    check_files $analysisFiles
  done
  
  # flatten DATA histograms
  # (split .aida files to separate histograms - .dat files)
  echo "Unpack data histograms..."
  
  local dataFiles=$(for i in $analysesNames ; do echo "$analysesFiles" | grep "$i.aida" ; done)
  if [[ "$dataFiles" != "" ]] ; then
    echo "dataFiles ="
    echo "$dataFiles"
    echo "output = $tmpd_flat"
    
    cd $tmpd_flat
    aida2flat -s $dataFiles
    
    if [[ "$?" != "0" || "$(find . -maxdepth 1 -name '*.dat' | wc -l)" == "0" ]] ; then
      echo "ERROR: failed to unpack data histograms"
      exit 1
    fi
  fi
  
  echo ""
  
  cd $workd
  
  # build rivetvm
  echo "Building rivetvm ..."
  make -B -C rivetvm HEPMC=$HEPMC RIVET=$RIVET
  if [[ "$?" != "0" ]] ; then
    echo "ERROR: fail to compile rivetvm"
    exit 1
  fi
  echo ""
  
  # build user analyses
  local allUserAnalyses=$(cd analyses ; find *.cc | cut -d . -f 1)
  local runUserAnalyses=$(echo -e "${allUserAnalyses}\n${analysesNames}" | sort | uniq -d)
  
  # skip compilation if user analyses are not used in current run
  if [[ "$runUserAnalyses" != "" ]] ; then
    echo "Building user analyses ..."
    ( cd analyses && rivet-buildplugin *.cc )
    if [[ "$?" != "0" ]] ; then
      echo "ERROR: fail to compile user analyses"
      exit 1
    fi
    echo ""
  fi
  
  local analysesString="$(echo "$analysesNames" | sed 's,^,-a ,' | xargs)"
  local rivetExecString="$workd/rivetvm/rivetvm.exe $analysesString -i $tmp_hepmc -o $tmpd_flat -H $tmp_aida -d $tmpd_dump"
  
  local generatorExecString="./rungen.sh $mode $beam $process $energy $params $specific $generator $version $tune $nevts $seed $HEPMCVERSION $tmp_hepmc"
  
  # run generator and rivet
  # .param -> .hepmc -> .aida
  echo "Run $generator $version and Rivet ..."
  echo "generatorExecString = $generatorExecString"
  echo "rivetExecString = $rivetExecString"
  
  if [[ "$mode" != "dryrun" ]] ; then
    cd $workd
    $generatorExecString &
    
    cd $tmpd
    $rivetExecString &
    
    cd $workd
    display_service $tmpd_dump "$beam $process $energy $params $generator $version $tune" &
  fi
  
  
  # wait until all jobs will be finished
  while true ; do
    jobs -l > $tmp_jobs
    #echo "=> jobList :"
    #cat $tmp_jobs
    
    # at least one job finished with error exit code:
    if [[ "$(cat $tmp_jobs | grep "Exit" | wc -l)" != "0" ]] ; then
      echo "ERROR: fail to run $generator $version or Rivet"
      # kill all jobs
      local pids="$(cat $tmp_jobs | weed | cut -d ' ' -f 2 | xargs)"
      #echo "pids = $pids"
      kill -s SIGKILL $pids >& /dev/null
      # and stop script
      exit 1
    fi
    
    # exit if only display_service job still running
    if [[ "$(cat $tmp_jobs | wc -l)" == "1" && "$(grep display_service $tmp_jobs)" != "" ]] ; then
      local pids="$(cat $tmp_jobs | weed | cut -d ' ' -f 2 | xargs)"
      kill -s SIGKILL $pids >& /dev/null
      wait
      break
    fi
    
    # both jobs finished successfully
    if [[ "$(cat $tmp_jobs | wc -l)" == "0" ]] ; then
      #echo "INFO: generator and Rivet jobs finished successfully"
      # exit from the loop
      break
    fi
    
    sleep 3
  done
  
  echo ""
  
  
  # at this stage event generation is finished
  # proccess output histograms:
  #   1. re-arrange according to directory structure
  #   2. extend DATA histograms with 'xfocus' column
  #   3. add metadata fields
  
  echo "Processing histograms..."
  echo "input  = $tmpd_flat"
  echo "output = $workd"
  
  cd $tmpd_flat
  
  # counter of skipped histograms
  local nSkip="0"
  
  # list of produced histograms
  local producedHistograms=""
  
  # arrange histograms according to our convension on file/directory structure:
  for fname in *.dat ; do
    # form histogram name in Rivet notation:
    # strip "REF_" from the front of file name
    local hname="${fname#REF_}"
    # and strip ".dat" from the back of file name
    hname="${hname%.dat}"
    
    # check does it MC or data histogram:
    # (file names of data histograms have "REF_" prefix)
    local type="mc"
    if [[ "$fname" == "REF_$hname.dat" ]] ; then
      type="data"
    fi
    
    # skip data histogram if there is no corresponding MC histogram:
    # (this is neccessary as part of data histograms can correspond to
    # different beam energy or unsupported observables)
    if [[ "$type" == "data" && ! -e "$hname.dat" ]] ; then
      continue
    fi
    
    # find histogram description from map file:
    local line=$(cat $workd/configuration/rivet-histograms.map | weed | grep " $hname ")
    
    if [[ "$line" == "" ]] ; then
      echo "WARNING: skipping file $fname (as no entry for $hname in map file configuration/rivet-histograms.map)"
      let nSkip++
      continue
    fi
    
    # skip histogram if it do not corresponds to run parameters
    if [[ "$(echo "$histogramsNames" | grep "^$hname$")" == "" ]] ; then
      #echo "INFO: skip incompatible histogram"
      continue
    fi
    
    # split description string into components
    local descr=( $line )
    local hist_observable=${descr[5]}
    local hist_cuts=${descr[6]}
    
    # skip histogram if it is marked as non-interesting
    if [[ "$hist_observable" == "-" || "$hist_cuts" == "-" ]] ; then
      continue
    fi
    
    # histogram pass all checks, add it to the list
    if [[ "$type" == "mc" ]] ; then
      producedHistograms="$producedHistograms $hname"
    fi
    
    # path for MC histogram:
    local dstd="$workd/dat/$beam/$process/$hist_observable/$hist_cuts/$energy/$generator/$version"
    
    # append destination path by $specific if it defined
    # this is neccessary to handle different alpgen parton multiplicity bins
    if [[ "$specific" != "-" ]] ; then
      dstd="$dstd/$specific"
    fi
    
    local dstf="$dstd/$tune.dat"
    
    # path for data histogram:
    if [[ "$type" == "data" ]] ; then
      dstd="$workd/dat/$beam/$process/$hist_observable/$hist_cuts/$energy"
      local reference="${hname%_*}"  # delete last '_' and everything after
      dstf="$dstd/$reference.dat"
    fi
    
    mkdir -p $dstd
    if [[ "$type" == "data" ]] ; then
      # add bin mid point to data histograms
      cat $fname | extend_hist > $dstf
    else
      # mc histograms
      cp $fname $dstf
      # complete mc histograms with PLOT section
      $workd/rivetvm/complete.sh  $dstf

      # and METADATA section
      sed -e "s,%beam%,$beam,"         \
          -e "s,%process%,$process,"   \
          -e "s,%energy%,$energy,"     \
          -e "s/%params%/$params/"     \
          -e "s/%specific%/$specific/" \
          -e "s,%generator%,$generator," \
          -e "s,%version%,$version,"     \
          -e "s/%tune%/$tune/"         \
          -e "s,%seed%,$seed,"         \
          -e "s,%observable%,$hist_observable," \
          -e "s,%cuts%,$hist_cuts,"             \
          -i $dstf
    fi
    
    if [[ "$type" == "mc" ]] ; then
      # copy .param file to dir structure to have a reference of MC generator card:
      local dstfp="$dstd/$tune.params"
      cp $tmp_params $dstfp
    fi
    
    echo "$type:  $fname -> $dstf"
  done
  
  if [[ "$nSkip" != "0" ]] ; then
    echo "ERROR: $nSkip histograms were skipped from unpacking"
    echo "       find skipped histograms here:"
    echo "         $tmpd_flat"
    echo ""
    echo "       to cure the error add skipped histograms to:"
    echo "         configuration/rivet-histograms.map"
    echo ""
    
    # prepare html page with all produced plots
    # (this is helps to prepare the map for missing histograms)
    rivet-mkhtml -s $tmp_aida -o $tmpd_html
    echo "       see html page with all plots in:"
    echo "         $tmpd_html"
    
    exit 1
  fi
  
  # check for missing histograms:
  local allHistograms=$(echo $producedHistograms | tr ' ' '\n' ; echo "$histogramsNames")
  local missingHistograms=$(echo "$allHistograms" | sort | uniq -u)
  if [[ "$missingHistograms" != "" ]] ; then
    echo "ERROR: following histograms should be produced according to run parameters,"
    echo "       but missing from Rivet output:"
    echo "$missingHistograms" | sed 's,^,         ,'
    echo ""
    echo "       check mapping of above histograms in configuration file:"
    echo "         configuration/rivet-histograms.map"
    exit 1
  fi
  
  echo ""
  
  # print disk usage for lxbatch or boinc mode:
  if [[ "$mode" == "lxbatch" || "$mode" == "boinc" ]] ; then
    local disk=$(du -sk $workd | cut -f 1)
    echo $disk > $workd/diskusage
    echo "Disk usage: $disk Kb"
    echo ""
  fi
  
  # print CPU usage
  times > $tmpd/cputimes
  local cpu=$(cat $tmpd/cputimes | xargs | sed -e 's,m,*60+,g' -e 's,s ,+,g' -e 's,s$,+0.5,' | bc | cut -d . -f 1)
  echo $cpu > $workd/cpuusage
  echo "CPU usage: $cpu s"
  echo ""
  
  echo "Clean tmp ..."
  cd $workd
  mv $tmp_hepmc $C_DIR/generator.hepmc
  rm -rf $tmpd
  echo ""
  
  echo "Run finished successfully"
}


# === main ===

echo "===> [runRivet] $(date) [$@]"
echo ""

# run self-test
if [[ "$1" == "check" ]] ; then
  set_environment local
  
  # remove lib with user analyses
  rm -f analyses/*.so
  
  echo "Number of analyses available in Rivet: $(rivet --list-analyses -q | wc -l)"
  echo "Number of analyses which we use: $(list_analyses | wc -l)"
  echo ""
  
  check_analyses
  echo ""
  
  echo "List of overlapping histograms:"
  check_overlap
  
  exit 0
fi

# print usage info
if [[ "$#" != "11" ]] ; then
  echo "runRivet.sh: tool for MC production"
  echo "Usage:"
  echo "  ./runRivet.sh [mode] [beam] [process] [energy] [params] [specific] [generator] [version] [tune] [nevts] [seed]"
  echo "        [mode] - local dryrun lxbatch boinc check"
  echo "        [beam] - $(cat configuration/rivet-histograms.map | weed | cut -d ' ' -f 1 | sort -u | xargs)"
  echo "     [process] - $(cat configuration/rivet-histograms.map | weed | cut -d ' ' -f 2 | sort -u | xargs)"
  echo "      [energy] - $(cat configuration/rivet-histograms.map | weed | cut -d ' ' -f 3 | sort -unr | xargs)"
  echo "      [params] - generator settings (generator-level cuts)"
  echo "    [specific] - generator-specific settings (for example, jet bins for alpgen)"
  echo "   [generator] - $(ls -1 configuration/*.params | cut -d / -f 2 | cut -d - -f 1 | sort -u | xargs)"
  echo "     [version] - generator version"
  echo "        [tune] - generator tune"
  echo "       [nevts] - number of events in run"
  echo "        [seed] - initial seed of random number generator"
  echo ""
  echo "Examples:"
  echo "  ./runRivet.sh local ee    zhad         91.2 -  -     pythia6           6.424        p0            100 123"
  echo "  ./runRivet.sh local pp    uemb-soft    7000 -  -     pythia6           6.424        ambt1         100 234"
  echo "  ./runRivet.sh local ee    zhad         91.2 -  -     pythia8           8.145        hoeth         100 895"
  echo "  ./runRivet.sh local ppbar uemb-soft    1800 -  -     pythia8           8.145        tune-4c       100 345"
  echo "  ./runRivet.sh local ppbar uemb-soft    630  -  -     herwig++          2.4.2        default       100 456"
  echo "  ./runRivet.sh local ppbar uemb-soft    1800 -  -     sherpa            1.2.3        default       100 456"
  echo "  ./runRivet.sh local ee    zhad         91.2 -  -     vincia            1.0.24_8.142 jeppsson2     100 123"
  echo "  ./runRivet.sh local ee    zhad         91.2 -  -     vincia            1.0.25_8.150 jeppsson3     100 123"
  echo "  ./runRivet.sh local pp    winclusive   7000 10 0,1   alpgenpythia6     2.1.4_6.425  350-CTEQ5L  100 123"
  echo "  ./runRivet.sh local pp    jets         7000 10 2,0   alpgenherwigjimmy 2.1.3e_6.520 default-CTEQ6L1   100 123"
  echo "  ./runRivet.sh local pp    uemb-hard    7000 -  -     epos              1.99.crmc.v3400 default    100 123"
  exit 1
fi

set_environment $1
run "$@"
