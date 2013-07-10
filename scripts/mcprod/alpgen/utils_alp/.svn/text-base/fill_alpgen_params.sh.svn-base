#!/bin/bash

# fill Alpgen process card
# params: 
# $1   : params_file to be filled
# $2-7 : alpgen parameters: $beamAlp $beamEn $seed $tune $specific $nevts
# $8-9 : phase space parameters
#-------------------------------------------------------------------------------

# this function strip comments, empty lines and double spaces from input stream
weed () {
  sed 's,^#.*,,' | sed '/^$/ d' | sed 's,  *, ,g'
}


# param file
tmp_params=$1

# alpgen parameters
tmp_beam=$2
tmp_beamEn=$3
tmp_seed=$4
tmp_tune=$5
tmp_specific=$6
nevts=$7

# phase space parameters
pTmin=$8
pTmax=$9


if [[ ! -e $tmp_params ]]; then
  echo "ERROR: (fill_alpgen_params.sh) can't find $tmp_params"
  exit 1
fi

# parse tune string of the form tunePS:tuneME to tune code
tunePS=${tmp_tune%:*}
if [[ ! "${tmp_tune/${tmp_tune%:*}/}" == "" ]]; then
    tuneME=${tmp_tune#*:}
fi

# parse arg setting tune parameters on the ME side
tME_vect=( ${tuneME//,/ } )

# 1th piece is 'pdf'; Alpgen pdf 'ndns' sting
Ndns=${tME_vect[0]}
if [[ "$Ndns" == "" || "$Ndns" == "-" ]] ; then
    Ndns="9" # use CTEQ6L1 by default
fi

# 2nd piece is 'xlclu'; Alpgen-specific match shower alpha val.
Xlclu=${tME_vect[1]}
if [[ "$Xlclu" == "" || "$Xlclu" == "-" ]] ; then
    Xlclu="-1.0" # Alpgen default (use PDF value)
fi

# 3rd piece is 'lpclu'; Alpgen-specific match shower alpha order
Lpclu=${tME_vect[2]}
if [[ "$Lpclu" == "" || "$Lpclu" == "-" ]] ; then
    Lpclu="-1" # Alpgen default (use PDF value)
fi

# Alpgen-specific arg of the form NJets,IsExc
NJets=${tmp_specific%,*}; ! [ $NJets -eq $NJets ] && exit 1
test "${tmp_specific/${tmp_specific%,*}/}" != "" && IsExc=${tmp_specific#*,}
! [ $IsExc -eq $IsExc ] && exit 1 


# fill cards with info needed for each generator
sed -e "s,%beam%,$tmp_beam,"                 \
    -e "s,%beamEn%,$tmp_beamEn,"             \
    -e "s,%seed%,$tmp_seed,"                 \
    -e "s,%tuneCode%,${tunePS},"             \
    -e "s,%nevts%,${nevts},"                 \
    -e "s,%pTmin%,${pTmin},"                 \
    -e "s,%pTmax%,${pTmax},"                 \
    -e "s,%NJets%,${NJets},"                 \
    -e "s,%Ndns%,${Ndns},"                   \
    -e "s,%IsExc%,${IsExc},"                 \
    -e "s,%Xlclu%,${Xlclu},"                 \
    -e "s,%Lpclu%,${Lpclu},"                 \
    -i $tmp_params


# estimate number of warm-up events/iterations and number of alpgen events to be generated
tmp_dict=alpgen/utils_alp/alpgen_params_dict.txt

source alpgen/utils_alp/section.sh
tmp_proc=$(section $tmp_params process)

tmp_pentry=$(cat ${tmp_dict} | weed | grep "NJets=${NJets} Process=${tmp_proc}")

if [[ "$(echo $tmp_pentry | wc -l)" != "1" ]] ; then
  echo "ERROR: no entry or multiply entries for NJets $NJets, process $tmp_proc found in $tmp_dict file"
  exit 1
fi

tmp_NeWarm=$(echo $tmp_pentry | tr ' ' '\n' | grep NeWarm | cut -d '=' -f 2)
tmp_NcWarm=$(echo $tmp_pentry | tr ' ' '\n' | grep NcWarm | cut -d '=' -f 2)
tmp_Tot_eff=$(echo $tmp_pentry | tr ' ' '\n' | grep Tot_eff | cut -d '=' -f 2)
tmp_kmore=$(echo $tmp_pentry | tr ' ' '\n' | grep Kmore | cut -d '=' -f 2)

# add safety factor
tmp_NeWgt=$(echo "${tmp_kmore} * ($nevts / ${tmp_Tot_eff} )" | bc -l | cut -d '.' -f 1)

# set values
sed -e "s,%NeWarm%,$tmp_NeWarm," \
    -e "s,%NcWarm%,$tmp_NcWarm," \
    -e "s,%NeWgt%,$tmp_NeWgt," \
    -i $tmp_params

# set clustering params: %ETclu% %Rclu% %ETAclu%
tmp_ETclu=$(section $tmp_params genwgt | grep ptjmin | weed | cut -d ' ' -f 2)
tmp_Rclu=$(section $tmp_params genwgt | grep drjmin | weed | cut -d ' ' -f 2)
tmp_ETAclu=$(section $tmp_params genwgt | grep etajmax | weed | cut -d ' ' -f 2)

# using Alpgen default recipe:
tmp_ETclu=$(echo "${tmp_ETclu} + 5.0" | bc -l) 

sed -e "s,%ETclu%,${tmp_ETclu}," \
    -e "s,%Rclu%,${tmp_Rclu}," \
    -e "s,%ETAclu%,${tmp_ETAclu}," \
    -i $tmp_params
