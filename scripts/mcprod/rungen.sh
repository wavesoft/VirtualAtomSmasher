#!/bin/bash

# setup paths and environment to run AGILE
set_environment () {
  echo "Setting environment..."

  local mode=$1
  local hepmcversion=$2

  local EXTERNAL=/afs/cern.ch/sw/lcg/external
  if [[ "$mode" == "boinc" ]] ; then
    EXTERNAL=/cvmfs/sft.cern.ch/lcg/external
  fi

  # set SLC5 platform name:
#  LCG_PLATFORM=x86_64-slc5-gcc43-opt
  LCG_PLATFORM=x86_64-slc6-gcc46-opt
  LCG_PLATFORM_GCC=x86_64-slc6
  if [[ "$(uname -m)" != "x86_64" ]] ; then
    LCG_PLATFORM=i686-slc5-gcc43-opt
  fi

#  source $EXTERNAL/gcc/4.3.2/$LCG_PLATFORM/setup.sh $EXTERNAL
  source $EXTERNAL/gcc/4.6.3/$LCG_PLATFORM_GCC/setup.sh $EXTERNAL
  if [[ "$?" != "0" ]] ; then
    echo "ERROR: fail to set environment (gcc)"
    exit 1
  fi
  
  MCGENERATORS=$EXTERNAL/MCGenerators_hepmc$hepmcversion
  HEPMC=$EXTERNAL/HepMC/$hepmcversion/$LCG_PLATFORM
  local AGILE=$MCGENERATORS/agile/1.4.0/$LCG_PLATFORM
  local PYTHON=$EXTERNAL/Python/2.6.5p2/$LCG_PLATFORM
  
  export PYTHONPATH=$AGILE/lib/python2.6/site-packages:$PYTHONPATH
  export LD_LIBRARY_PATH=$HEPMC/lib:$AGILE/lib:$PYTHON/lib:$LD_LIBRARY_PATH
  export PATH=$PYTHON/bin:$AGILE/bin:$PATH
  export AGILE_GEN_PATH=$MCGENERATORS
  export AGILE_PARAM_PATH=$(pwd)/configuration
  
  # explicitly specify path to latest LHAPDF to be able to do
  # LHAPDF-dependent runs of Pythia 6 and Sherpa on BOINC
  # (if the variable do not exported the LHAPDF package
  #  picks up the path specified inside libLHAPDF, which
  #  points to /afs location and lead to fail in BOINC environment)
  LHAPDF=$MCGENERATORS/lhapdf/5.8.8
  export LHAPATH=$LHAPDF/share/PDFsets
  export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$LHAPDF/$LCG_PLATFORM/lib
  
  echo "LCG_PLATFORM=$LCG_PLATFORM"
  echo "gcc version = $(gcc -dumpversion)"
  echo "AGILE=$AGILE"
  echo "HEPMC=$HEPMC"
  echo "AGILE_GEN_PATH=$AGILE_GEN_PATH"
  echo "AGILE_PARAM_PATH=$AGILE_PARAM_PATH"
  echo "LHAPDF=$LHAPDF"
  echo "PYTHON=$PYTHON"
  echo ""
  
  # check paths to essential parts of machinery:
  for path in MCGENERATORS AGILE HEPMC PYTHON ; do
    if [[ ! -e "${!path}" ]] ; then
      echo "ERROR: fail to set environment ($path)"
      exit 1
    fi
  done
  
  for f in $AGILE/bin/agile-runmc ; do
    if ! cp $f /dev/null ; then
      echo "ERROR: fail to access $f"
      exit 1
    fi
  done
}

# this function strip comments, empty lines and double spaces from input stream
weed () {
  sed 's,^#.*,,' | sed '/^$/ d' | sed 's,  *, ,g'
}

# print file contents
print_file () {
  fname="$1"

  echo "=> $fname :"
  cat $fname
  echo "--------------------------------------"
  echo ""
}

# return beam energy = ECM / 2
calc_beam_energy () {
  local ecm=$1
  # calc "ECM / 2" and strip trailing zeros
  echo "$ecm / 2" | bc -l | sed 's,0*$,,'
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
  local outfile=${13}

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
  echo "outfile=$outfile"
  echo ""

  # check mode:
  if [[ "$mode" != "local" && "$mode" != "dryrun" && "$mode" != "lxbatch" && "$mode" != "boinc" ]] ; then
    echo "ERROR: unknown mode: $mode"
    exit 1
  fi

  # paths to temporary directories and files
  echo "Prepare temporary directories and files ..."
  local workd=$(pwd)
  local tmpd=$(dirname $outfile)
  local tmp_params="$tmpd/generator.params"
  
  echo "workd=$workd"
  echo "tmpd=$tmpd"
  echo "tmp_params=$tmp_params"
  echo ""
  
  # decode params:
  echo "Decoding parameters of generator..."
  local vect=( ${params//,/ } )   # replace ',' by spaces and prepare array

  # 1st parameter is 'pTmin'
  local pTmin=${vect[0]}
  if [[ "$pTmin" == "" || "$pTmin" == "-" ]] ; then
    # set default value if parameter omitted
    pTmin="0"
  fi

  # 2nd parameter is 'pTmax'
  local pTmax=${vect[1]}
  if [[ "$pTmax" == "" || "$pTmax" == "-" ]] ; then
    # set default value if parameter omitted
    pTmax="$energy"
  fi

  # 3rd parameter is 'mHatMin'
  local mHatMin=${vect[2]}
  if [[ "$mHatMin" == "" || "$mHatMin" == "-" ]] ; then
    mHatMin="0"
  fi

  # 4th parameter is 'mHatMax'
  local mHatMax=${vect[3]}
  if [[ "$mHatMax" == "" || "$mHatMax" == "-" ]] ; then
    mHatMax="$energy"
  fi

  echo "  pTmin  = $pTmin"
  echo "  pTmax  = $pTmax"
  echo "  mHatMin = $mHatMin"
  echo "  mHatMax = $mHatMax"
  echo ""

  # here is a trick to run soft QCD process instead of hard QCD
  # if required pTmin == 0 to avoid infrared divergency
  processCode="$process"
  if [[ "$pTmin" == "0" ]] ; then
    if [[ "$process" == "jets" || "$process" == "uemb-hard" ]] ; then
      processCode="uemb-soft"
    fi
  fi
  echo "processCode=$processCode"
  echo ""


  echo "Prepare $generator $version parameters ..."
  local generatorExecString=""

  case "$generator" in
    "pythia6" )

      if [[ "${version:0:2}" != "6." ]] ; then
        echo "ERROR: incorrect Pythia6 version: $version"
        echo "       should be in form 6.xxx"
        exit 1
      fi

      # version -> versionCode
      local versionCode=${version/6./}  # remove "6." from version string
      echo "versionCode=$versionCode"

      # tune -> tuneCode
      # convert tune string to tune code
      local tuneCode="$(cat configuration/pythia6-tunes.map | weed | grep "^${version} ${tune} " | cut -d ' ' -f 3)"

      if [[ "$tuneCode" == "" ]] ; then
        echo "ERROR: can not find tune code for tune name [${tune}] in map file:"
        echo "         configuration/pythia6-tunes.map"
        exit 1
      fi

      echo "tuneCode=$tuneCode"

      local beam1
      local beam2
      case "$beam" in
        "ppbar" )  beam1="PROTON";   beam2="ANTIPROTON"; ;;
        "pp"    )  beam1="PROTON";   beam2="PROTON";     ;;
        "ee"    )  beam1="ELECTRON"; beam2="POSITRON";   ;;
        * )
          echo "ERROR: pythia6 unknown beam definition: $beam"
          echo "       only 'ppbar', 'pp' and 'ee' are now supported"
          exit 1
          ;;
      esac

      local beamEn="$(calc_beam_energy $energy)"

      # prepare parameters file from template
      cp configuration/pythia6-$processCode.params $tmp_params

      if [[ "$?" != "0" ]] ; then
        echo "ERROR: fail to copy config file:"
        echo "         configuration/pythia6-$processCode.params"
        exit 1
      fi

      sed -e "s,%beam1%,$beam1,"        \
          -e "s,%beam2%,$beam2,"        \
          -e "s,%beamEn%,$beamEn,"      \
          -e "s,%seed%,$seed,"          \
          -e "s,%nevts%,$nevts,"        \
          -e "s,%tuneCode%,$tuneCode,"  \
          -e "s,%pTmin%,$pTmin,"        \
          -e "s,%pTmax%,$pTmax,"        \
          -e "s,%mHatMin%,$mHatMin,"    \
          -e "s,%mHatMax%,$mHatMax,"    \
          -i $tmp_params
      
      # cut tune definition line from param file in case of "default" tune
      if [[ "$tune" == "default" ]] ; then
        sed -e "s,^MSTP(5).*,," -i $tmp_params
      fi
      
      # print contents of parameters file
      print_file "$tmp_params"

      # form generator execution command
      generatorExecString="agile-runmc Pythia6:$versionCode --paramfile=$tmp_params --out=$outfile"
      ;;

    "pythia8" )
      # documentation:
      #   http://home.thep.lu.se/~torbjorn/php8145/Welcome.php

      if [[ "${version:0:2}" != "8." ]] ; then
        echo "ERROR: incorrect Pythia8 version: $version"
        echo "       should be in form 8.xxx"
        exit 1
      fi

      # version -> versionCode
      local versionCode=${version/8./}  # remove "8." from version string
      echo "versionCode=$versionCode"

      cp configuration/pythia8-$processCode.params $tmp_params

      if [[ "$?" != "0" ]] ; then
        echo "ERROR: fail to copy config file:"
        echo "         configuration/pythia8-$processCode.params"
        exit 1
      fi

      local beam1
      local beam2
      case "$beam" in
        "ppbar" )  beam1="2212"; beam2="-2212"; ;;
        "pp"    )  beam1="2212"; beam2="2212";  ;;
        "ee"    )  beam1="11";   beam2="-11";   ;;
        * )
          echo "ERROR: pythia8 unknown beam definition: $beam"
          echo "       only 'ppbar', 'pp' and 'ee' are now supported"
          exit 1
          ;;
      esac

      # tune -> tuneCode
      # convert tune string to tune code
      local tuneCode="$(cat configuration/pythia8-tunes.map | weed | grep "^${version} ${beam} ${tune} " | cut -d ' ' -f 4)"

      if [[ "$tuneCode" == "" ]] ; then
        echo "ERROR: can not find tune code for version=$version beam=$beam tune=$tune in map file:"
        echo "         configuration/pythia8-tunes.map"
        exit 1
      fi

      echo "tuneCode=$tuneCode"

      sed -e "s,%nevts%,$nevts," \
          -e "s,%seed%,$seed," \
          -e "s,%beam1%,$beam1," \
          -e "s,%beam2%,$beam2," \
          -e "s,%energy%,$energy," \
          -e "s,%tuneCode%,$tuneCode," \
          -e "s,%pTmin%,$pTmin,"        \
          -e "s,%pTmax%,$pTmax,"        \
          -e "s,%mHatMin%,$mHatMin,"    \
          -e "s,%mHatMax%,$mHatMax,"    \
          -i $tmp_params

      # cut tune definition line from param file in case of "default*" tune
      if [[ "${tune:0:7}" == "default" ]] ; then
        sed -e "s,^Tune:.*,," -i $tmp_params
      fi
      
      # complete tune by possible additional parameters
      if test -e "configuration/$generator-$tune.tune" ; then
        cat "configuration/$generator-$tune.tune" >> $tmp_params
      fi
      
      # print contents of parameters file
      print_file "$tmp_params"

      # compile generator wrapper
      local PYTHIA8=$MCGENERATORS/pythia8/$versionCode/$LCG_PLATFORM

      if [ ! -d $PYTHIA8 ] ; then
        echo "ERROR: can not find $generator $versionCode at"
        echo "       PYTHIA8 = $PYTHIA8"
        exit 1
      fi

      echo "PYTHIA8=$PYTHIA8"

      make -B -C pythia8 HEPMC=$HEPMC PYTHIA8=$PYTHIA8 LHAPDF=$LHAPDF/$LCG_PLATFORM

      if [[ "$?" != "0" ]] ; then
        echo "ERROR: fail to compile pythia8 wrapper code"
        exit 1
      fi

      export PYTHIA8DATA=$PYTHIA8/xmldoc

      # prepare command to execute pythia8
      generatorExecString="$workd/pythia8/pythia8.exe $tmp_params $outfile"
      ;;

    "vincia" )
      # documentation:
      #   http://skands.web.cern.ch/skands/vincia/current/htmldoc/

      # Vincia version is combination of two versions:
      #   [vincia]_[pythia8]
      # Decode versions:
      local versionVincia=${version%_8.*}   # get Vincia version (remove '_8.*' from the back of string)
      local versionPythia8=${version#*_8.}  # get Pythia 8 version
      
      echo "versionVincia=$versionVincia"
      echo "versionPythia8=$versionPythia8"

      cp configuration/vincia-$processCode.params $tmp_params

      if [[ "$?" != "0" ]] ; then
        echo "ERROR: fail to copy config file:"
        echo "         configuration/vincia-$processCode.params"
        exit 1
      fi

      local beam1
      local beam2
      case "$beam" in
        "ee"    )  beam1="11";   beam2="-11";   ;;
        * )
          echo "ERROR: vincia unknown beam definition: $beam"
          echo "       only 'ee' supported"
          exit 1
          ;;
      esac

      local VINCIA=$MCGENERATORS/vincia/$versionVincia/$LCG_PLATFORM

      if [ ! -d $VINCIA ] ; then
        echo "ERROR: can not find $generator $versionVincia at"
        echo "       VINCIA = $VINCIA"
        exit 1
      fi

      echo "VINCIA=$VINCIA"
      
      if [[ "$tune" != "pythiadef" ]] ; then
        # tune -> tuneFile
        local tuneFile=$VINCIA/../share/tunes/$tune.cmnd
        
        if [[ ! -s $tuneFile ]] ; then
          echo "ERROR: can not find tune file:"
          echo "         $tuneFile"
          exit 1
        fi
      else
        local tuneFile="none"
      fi
      
      echo "tuneFile=$tuneFile"
      
      sed -e "s,%nevts%,$nevts," \
          -e "s,%seed%,$seed," \
          -e "s,%beam1%,$beam1," \
          -e "s,%beam2%,$beam2," \
          -e "s,%energy%,$energy," \
          -e "s,%tuneFile%,$tuneFile," \
          -e "s,%pTmin%,$pTmin,"        \
          -e "s,%pTmax%,$pTmax,"        \
          -e "s,%mHatMin%,$mHatMin,"    \
          -e "s,%mHatMax%,$mHatMax,"    \
          -i $tmp_params

      # print contents of parameters file
      print_file "$tmp_params"

      # compile generator wrapper
      local PYTHIA8=$MCGENERATORS/pythia8/$versionPythia8/$LCG_PLATFORM

      if [ ! -d $PYTHIA8 ] ; then
        echo "ERROR: can not find pythia8 $versionPythia8 at"
        echo "       PYTHIA8 = $PYTHIA8"
        exit 1
      fi

      echo "PYTHIA8=$PYTHIA8"

      make -B -C vincia HEPMC=$HEPMC PYTHIA8=$PYTHIA8 VINCIA=$VINCIA

      if [[ "$?" != "0" ]] ; then
        echo "ERROR: fail to compile vincia wrapper code"
        exit 1
      fi

      export PYTHIA8DATA=$PYTHIA8/xmldoc

      # prepare command to execute pythia8
      local VINCIADATA=$VINCIA/../share/xmldoc
      generatorExecString="$workd/vincia/vincia.exe $tmp_params $outfile $VINCIADATA"
      ;;

    "herwig++" | "herwig++powheg" )
      # manual:
      #   http://arxiv.org/abs/0803.0883

      cp configuration/$generator-$processCode.params $tmp_params

      if [[ "$?" != "0" ]] ; then
        echo "ERROR: fail to copy config file:"
        echo "         configuration/$generator-$processCode.params"
        exit 1
      fi

      # check beam
      local beamA
      local beamB
      case "$beam" in
        "ppbar" )  beamA="p+";   beamB="pbar-"; ;;
        "pp"    )  beamA="p+";   beamB="p+";    ;;
        "ee"    )  beamA="e-";   beamB="e+";    ;;
        * )
          echo "ERROR: herwig++ unknown beam definition: $beam"
          echo "       only 'ppbar', 'pp' and 'ee' are now supported"
          exit 1
          ;;
      esac

      # check tune
      local tuneString="$(cat configuration/${generator}-tunes.map | weed | grep "^${version} ${tune}" )"
      # "

      if [[ "$tuneString" == "" ]] ; then
        echo "ERROR: tune $tune not available in version $version of $generator"
        echo "       see list of available tunes in file:"
        echo "         configuration/${generator}-tunes.map"
        exit 1
      fi

      sed -e "s,%nevts%,$nevts," \
          -e "s,%seed%,$seed," \
          -e "s,%energy%,$energy," \
          -e "s,%beamA%,$beamA," \
          -e "s,%beamB%,$beamB," \
          -e "s,%outfile%,$outfile," \
          -e "s,%pTmin%,$pTmin,"        \
          -e "s,%pTmax%,$pTmax,"        \
          -e "s,%mHatMin%,$mHatMin,"    \
          -e "s,%mHatMax%,$mHatMax,"    \
          -e "s,%tune%,$tune,"    \
          -i $tmp_params

      # include tune file:
      sed -e "/#%tuneFile%/ r configuration/herwig++-${tune}.tune" -i $tmp_params

      # apply xsec fix (possible starting from version >= 2.6.0):
      if [[ ! "$version" < "2.6.0" ]] ; then
        sed -e "/#%xsecfix%/ r configuration/herwig++-xsec.fix" -i $tmp_params
      fi
      
      # print contents of steering file
      print_file "$tmp_params"

      local HERWIGPP=$MCGENERATORS/herwig++/$version/$LCG_PLATFORM

      if [ ! -d $HERWIGPP ] ; then
        echo "ERROR: can not find $generator $version at"
        echo "       HERWIGPP = $HERWIGPP"
        exit 1
      fi
      
      echo "HERWIGPP=$HERWIGPP"
      
      # prepare command to execute herwig++
      local repo_opt="--repo"
      if [[ "$version" < "2.6.1" ]] ; then
        repo_opt="-r"
      fi
      
      generatorExecString="$HERWIGPP/bin/Herwig++ read $repo_opt $HERWIGPP/share/Herwig++/HerwigDefaults.rpo $tmp_params"
      ;;

#######################################################
    "phojet" )
      # PHOJET reference:
      # https://svnweb.cern.ch/trac/GENSER/export/8248/GENSER2/phojet/tags/phojet-1-10/doc/phoman5c.ps

      cp configuration/phojet-$processCode.params $tmp_params

      if [[ "$?" != "0" ]] ; then
        echo "ERROR: fail to copy config file:"
        echo "         configuration/phojet-$processCode.params"
        exit 1
      fi

      local beam1
      local beam2
      case "$beam" in
        "ppbar" )  beam1="2212"; beam2="-2212"; ;;
        "pp"    )  beam1="2212"; beam2="2212";  ;;
        * )
          echo "ERROR: phojet unknown beam definition: $beam"
          echo "       only 'pp' and 'ppbar' are supported"
          exit 1
          ;;
      esac

      # check tune
      if [[ "$tune" != "default" ]] ; then
        echo "ERROR: Phojet unknown tune specification: $tune"
        echo "       only 'default' is now supported"
        exit 1
      fi

      # compile generator wrapper
      local PHOJET=$MCGENERATORS/phojet/$version/$LCG_PLATFORM

      if [ ! -d $PHOJET ] ; then
        echo "ERROR: can not find $generator $versionCode at"
        echo "       PHOJET = $PHOJET"
        exit 1
      fi

      echo "PHOJET=$PHOJET"

      local PYTHIA6=$MCGENERATORS/pythia6/115a/$LCG_PLATFORM

      make -B -C phojet PYTHIA6=$PYTHIA6 HEPMC=$HEPMC PHOJET=$PHOJET

      if [[ "$?" != "0" ]] ; then
        echo "ERROR: fail to compile phojet wrapper code"
        exit 1
      fi

      # prepare seeds
      local ISD1=$((1 + $seed % 178))
      local ISD2=$((1 + $seed / 178 % 178))
      local ISD3=$((1 + $seed / 178 / 178 % 178))
      local ISD4=$((1 + $seed / 178 / 178 / 178 % 168))

      echo "seed numbers [1,2,3,4] =[$ISD1, $ISD2, $ISD3, $ISD4]"

      sed -e "s,%nevts%,$nevts," \
          -e "s,%ISD1%,$ISD1," \
          -e "s,%ISD2%,$ISD2," \
          -e "s,%ISD3%,$ISD3," \
          -e "s,%ISD4%,$ISD4," \
          -e "s,%beam1%,$beam1," \
          -e "s,%beam2%,$beam2," \
          -e "s,%energy%,$energy," \
          -i $tmp_params

      # print contents of parameters file
      print_file "$tmp_params"

      # prepare command to execute phojet
      generatorExecString="$workd/phojet/phojet.exe $outfile < $tmp_params"
      ;;
#######################################################

    "epos" )
      # EPOS reference:
      #   http://arxiv.org/pdf/1006.2967v1.pdf

      cp configuration/epos-$processCode.params $tmp_params

      if [[ "$?" != "0" ]] ; then
        echo "ERROR: fail to copy config file:"
        echo "         configuration/epos-$processCode.params"
        exit 1
      fi

      local beam1
      local beam2
      case "$beam" in
        "pp"    )  beam1="1";   beam2="1";  ;;
        * )
          echo "ERROR: epos unknown beam definition: $beam"
          echo "       only 'pp' is now supported"
          exit 1
          ;;
      esac

      local beamEn="$(calc_beam_energy $energy)"

      # check tune
      case "$tune" in
        "default" ) tuneCode="1";  ;;
        "lhc" ) tuneCode="0";  ;;
        * )
          echo "ERROR: Epos unknown tune specification: $tune"
          echo "       only 'default' and 'lhc' are supported"
          exit 1
          ;;
      esac

      local EPOS=$MCGENERATORS/epos/$version/$LCG_PLATFORM

      if [ ! -d $EPOS ] ; then
        echo "ERROR: can not find $generator $version at"
        echo "       EPOS = $EPOS"
	echo " "
	echo "Available versions are : " 	
	ls -m1 $MCGENERATORS/epos/
        exit 1
      fi

      echo "EPOS=$EPOS"

      # prepare seed (minimum value is 1)
      local seedA=$((1 + $seed))

      sed -e "s,%nevts%,$nevts," \
          -e "s,%seedA%,$seedA," \
          -e "s,%beam1%,$beam1," \
          -e "s,%beam2%,$beam2," \
          -e "s,%beamEn%,$beamEn," \
          -e "s,%EPOS%,$EPOS," \
          -i $tmp_params

      # print contents of steering file
      print_file "$tmp_params"

      # prepare command to execute generator
      generatorExecString="$EPOS/bin/crmc -c $tmp_params -s $seedA -m $tuneCode -n $nevts -p $beamEn -P -$beamEn -b $beam1 -t $beam2 -f $outfile"
      #crmc -s [random seed]
      #     -m [0=EPOS LHC, 1=EPOS 1.99]
      #     -p [beam's momentum/(GeV/c)]
      #     -P [target's momentum/(GeV/c)
      #     -b [beam's id:   1=p, 12=C, 120=pi+, 207=Pb]
      #     -t [target's id: 1=p, 12=C, 120=pi+, 207=Pb]
      #     -c [path/filename of parameter/setup file]
      #     -f [path/filename of output file]
      #     -n [Number of events to simulate]
      #     -N [Number of first event]
      ;;

    "sherpa" )
      # Sherpa reference:
      #   http://projects.hepforge.org/sherpa/doc/SHERPA-MC-1.2.2.html

      cp configuration/sherpa-$processCode.params $tmp_params

      if [[ "$?" != "0" ]] ; then
        echo "ERROR: fail to copy config file:"
        echo "         configuration/sherpa-$processCode.params"
        exit 1
      fi

      local beam1
      local beam2
      case "$beam" in
        "ppbar" )  beam1="2212"; beam2="-2212"; ;;
        "pp"    )  beam1="2212"; beam2="2212";  ;;
        "ee"    )  beam1="11";   beam2="-11";   ;;
        * )
          echo "ERROR: sherpa unknown beam definition: $beam"
          echo "       only 'ppbar', 'pp' and 'ee' are now supported"
          exit 1
          ;;
      esac

      local beamEn="$(calc_beam_energy $energy)"

      # check tune
      if [[ "$tune" != "default" ]] ; then
        echo "ERROR: sherpa unknown tune specification: $tune"
        echo "       only 'default' is now supported"
        exit 1
      fi

      # TODO: check 0 < $seed < 900 000 000

      # prepare seeds
      local seedA=$(($seed % 30000))
      local seedB=$(($seed / 30000))

      sed -e "s,%nevts%,$nevts," \
          -e "s,%seedA%,$seedA," \
          -e "s,%seedB%,$seedB," \
          -e "s,%beam1%,$beam1," \
          -e "s,%beam2%,$beam2," \
          -e "s,%beamEn%,$beamEn," \
          -e "s,%pTmin%,$pTmin,"        \
          -e "s,%pTmax%,$pTmax,"        \
          -e "s,%mHatMin%,$mHatMin,"    \
          -e "s,%mHatMax%,$mHatMax,"    \
          -i $tmp_params

      # print contents of steering file
      print_file "$tmp_params"

      local SHERPA=$MCGENERATORS/sherpa/$version/$LCG_PLATFORM

      if [ ! -d $SHERPA ] ; then
        echo "ERROR: can not find $generator $version at"
        echo "       SHERPA = $SHERPA"
        exit 1
      fi

      echo "SHERPA=$SHERPA"

      # make symlink to connect sherpa output HepMC file with pipe
      # this neccessary as there is no possibility to explicitly
      # specify full output file name in Sherpa
      ln -s $outfile $tmpd/sherpa.hepmc2g

      # prepare command to execute generator
      generatorExecString="$SHERPA/bin/Sherpa -f $tmp_params"

      # do initialization run if Sherpa is run using AMEGIC++ matrix element generator
      if [[ "$(cat $tmp_params | weed | grep 'ME_SIGNAL_GENERATOR.*Amegic')" != "" ]] ; then
        echo "AMEGIC++ detected, do Sherpa initialization run ..."
        cd $tmpd

        if [[ "$mode" != "dryrun" ]] ; then
          $generatorExecString
          ./makelibs
        fi

        if [[ "$?" != "0" ]] ; then
          echo "ERROR: fail to do Sherpa initialization run"
          exit 1
        fi

        cd $workd
      fi
      ;;

    "alpgenpythia6" | "alpgenherwig" | "alpgenherwigjimmy" ) 
      # documentation:
      # http://mlm.home.cern.ch/mlm/alpgen/

      # which PS generator:
      local isPythia6=$(echo "$generator" | grep pythia | wc -l)
      local isHerwig=$(echo "$generator" | grep herwig | wc -l)
      local isJimmy=$(echo "$generator" | grep jimmy | wc -l)

      # version is combination of:
      #   [alpgen]_[PSgenerator]
      local versionAlpgenCode=$(echo $version | cut -d '_' -f 1)
      local fullversionPSCode=$(echo $version | cut -d '_' -f 2)
      
      # strip leading 6. from Pythia version
      local versionPSCode=$fullversionPSCode
      if [[ "$isPythia6" == "1" ]]; then
        versionPSCode=${versionPSCode/6./};
      fi
      
      # running behind Agile => check if version comb. is supported
      # Agile specs are e.g.: 
      #   AlpGenPythia6:422:2.1.3d
      #   AlpGenHerwig:6.510:2.1.3d
      #   AlpGenHerwigJimmy:6.510:2.1.3d

      # check Alpgen version: [when using agile genser libs, update otherwise...]
      # Alpgen:
      local tmp_alp_mever=$( agile-runmc --list-gens | grep AlpGen | cut -s -d ':' -f 3 | sort -u)
      if [[ $(echo $tmp_alp_mever | grep -wc $versionAlpgenCode) != "1" ]]; then
        echo "WARNING: Parton Shower cannot be added with the Alp. version $versionAlpgenCode"
        echo $(agile-runmc --list-gens | grep AlpGen ) 
        echo "The Alpgen version ${versionAlpgenCode} is not supported; please use: ${tmp_alp_mever}."
        exit 1
      fi
      
      local tmp_alp_psver=$( agile-runmc --list-gens | grep AlpGen | cut -s -d ':' -f 2 | sort -u)
      if [[ $(echo $tmp_alp_psver | grep -wc $versionPSCode) != "1" ]]; then
        echo "The PS generator version ${versionPSCode} is not supported; please use: ${tmp_alp_psver}."
        exit 1
      fi

      local AgilePSString="Pythia6"
      if [[ "$isHerwig" == "1" ]] ; then
        AgilePSString="Herwig"
      fi
      if [[ "$isJimmy" == "1" ]] ; then
        AgilePSString="HerwigJimmy"
      fi
      
      # check supplied tune string
      local tunePS=$(cat configuration/alpgen-tunes.map | weed | grep "^${generator} ${tune} " | cut -d ' ' -f 3)
      local tuneME=$(cat configuration/alpgen-tunes.map | weed | grep "^${generator} ${tune} " | cut -d ' ' -f 4)
      
      if [[ "$tunePS" == "" || "$tuneME" == "" ]] ; then
        echo "ERROR: can not find tune definition for tune name $tune in map file:"
        echo "         configuration/alpgen-tunes.map"
        exit 1
      fi
      
      # check if tunePS supported
      if [[ "$isPythia6" == "1" ]]; then
        # try to resolve digital code for pythia6 tune name
        local tuneCode="$(cat configuration/pythia6-tunes.map | weed | grep "^${fullversionPSCode} ${tunePS} " | cut -d ' ' -f 3)"
        
        if [[ "$tuneCode" == "" ]] ; then
          echo "ERROR: can not find tune code for tune name [${tunePS}] in map file:"
          echo "         configuration/pythia6-tunes.map"
          exit 1
        fi
        
        # rebuild tune string:
        tune="${tuneCode}:${tuneME}"
      else
        # only 'default' tune is supported for alpgenherwig* generators
        if [[ "$tunePS" != "default" ]] ; then
          echo "ERROR: only 'default' tune is supported for $generator"
          exit 1
        fi
        
        # rebuild tune string:
        tune="${tunePS}:${tuneME}"
      fi
      
      local beamAlp
      case "$beam" in
        "ppbar" )  beamAlp="-1" ;;
        "pp"    )  beamAlp="1"  ;;
        * )
          echo "ERROR: Alpgen unknown beam definition: $beam"
          echo "       only 'ppbar', 'pp' and are supported"
          exit 1
          ;;
      esac

      local beamEn="$(calc_beam_energy $energy)"

      cp $workd/configuration/$generator-$processCode.params $tmp_params
      
      if [[ "$?" != "0" ]] ; then
        echo "ERROR: fail to copy config file:"
        echo "         configuration/$generator-$processCode.params"
        exit 1
      fi
      
      local work_alpgen_dir=$workd/alpgen
      
      # fill the process card:
      $work_alpgen_dir/utils_alp/fill_alpgen_params.sh \
          $tmp_params \
          $beamAlp $beamEn $seed $tune $specific $nevts \
          $pTmin $pTmax || exit 1
      
      # print contents of parameters file
      print_file "$tmp_params"
      
      # generate Alpgen unweighted events
      cd $tmpd
      $work_alpgen_dir/mcrun_alp/unweighted_driver.sh \
        $MCGENERATORS/alpgen/$versionAlpgenCode/$LCG_PLATFORM \
        $tmp_params \
        $work_alpgen_dir || exit 1
      
      # alpgen parameter parsing for the PS step
      source $work_alpgen_dir/utils_alp/section.sh
      local tmp_params_ps="$tmpd/alpgen_ps.params"
      section $tmp_params steerPS > $tmp_params_ps
      
      # running Agile+Rivet with the generated unweighted events:
      # form generator execution command: 1) Alpgen param. reading | 2) agile -> FIFO
      
      # TODO: fix problem with events vetoing with Alpgen version > 2.1.3d
      
      echo "WARNING: parton showering will run with Alpgen 2.1.3d"
      generatorExecString="section $tmp_params addPS | agile-runmc AlpGen$AgilePSString:$versionPSCode:2.1.3d --paramfile=$tmp_params_ps --out=$outfile"

      ;;

    * )
      echo "ERROR: unsupported generator: $generator"
      exit 1
      ;;
  esac


  # run generator
  # .param -> .hepmc
  echo "Run $generator $version ..."
  echo "generatorExecString = $generatorExecString"

  cd $tmpd

  if [[ "$mode" != "dryrun" ]] ; then
    eval $generatorExecString
    
    if [[ "$?" != "0" ]] ; then
      echo "ERROR: failed to run $generator $version"
      exit 1
    fi
  fi
  
  echo ""
  echo "Generator run finished successfully"
}


# === main ===

# print usage info
if [[ "$#" != "13" ]] ; then
  echo "rungen.sh: tool for MC production"
  echo "Usage:"
  echo "  rungen.sh [mode] [beam] [process] [energy] [params] [specific] [generator] [version] [tune] [nevts] [seed] [hepmc] [outfile]"
  echo "        [mode] - local dryrun lxbatch boinc"
  echo "        [beam] - $(cat configuration/rivet-histograms.map | weed | cut -d ' ' -f 1 | sort -u | xargs)"
  echo "     [process] - $(cat configuration/rivet-histograms.map | weed | cut -d ' ' -f 2 | sort -u | xargs)"
  echo "      [energy] - $(cat configuration/rivet-histograms.map | weed | cut -d ' ' -f 3 | sort -unr | xargs)"
  echo "      [params] - generator settings (generator-level cuts)"
  echo "    [specific] - generator-specific settings (for example, jet bins for alpgen)"
  echo "   [generator] - $(ls -1 configuration/*.params | cut -d / -f 2 | cut -d - -f 1 | sort -u | xargs)"
  echo "     [version]"
  echo "        [tune]"
  echo "       [nevts] - number of events in run"
  echo "        [seed] - initial seed of random number generator"
  echo "       [hepmc] - version of HepMC: 2.03.11 or 2.06.05"
  echo "     [outfile] - output file of data generation in hepmc format"

  echo ""
  echo "Examples:"
  echo "  ./rungen.sh local ee    zhad         91.2 - - pythia6  6.424  p0      100 1234 2.06.05 /tmp/out.hepmc"
  echo "  ./rungen.sh local pp    uemb-soft    7000 - - pythia6  6.424  ambt1   100 2345 2.06.05 /tmp/out.hepmc"
  echo "  ./rungen.sh local ee    zhad         91.2 - - pythia8  8.145  hoeth   100 8956 2.06.05 /tmp/out.hepmc"
  echo "  ./rungen.sh local ppbar uemb-soft    1800 - - pythia8  8.145  tune-4c 100 3456 2.06.05 /tmp/out.hepmc"
  echo "  ./rungen.sh local ppbar uemb-soft    630  - - herwig++ 2.4.2  default 100 4567 2.06.05 /tmp/out.hepmc"
  echo "  ./rungen.sh local ppbar uemb-soft    1800 - - sherpa   1.2.3  default 100 4567 2.06.05 /tmp/out.hepmc"
  echo "  ./rungen.sh local ee    zhad         91.2 - - vincia   1.0.24_8.142 jeppsson2 100 1234 2.06.05 /tmp/out.hepmc"
  echo "  ./rungen.sh local ee    zhad         91.2 - - vincia   1.0.25_8.150 jeppsson3 100 1234 2.06.05 /tmp/out.hepmc"
  echo "  ./rungen.sh local pp    winclusive   7000 10 2,5,1 alpgenpythia6      2.1.4_6.425  351-CTEQ5L 100 123 2.06.05 /tmp/out.hepmc"
  echo "  ./rungen.sh local pp    winclusive   7000 10 2,5,1 alpgenpythia6      2.1.3e_6.425 z2-CTEQ6L1 100 123 2.06.05 /tmp/out.hepmc"
  echo "  ./rungen.sh local pp    jets         7000 10 2,9,1 alpgenherwigjimmy  2.1.3e_6.520  default-CTEQ6L1 100 123 2.06.05 /tmp/out.hepmc"
  echo "  ./rungen.sh local pp    uemb-hard    7000 - - epos     1.99.crmc.v3400    default     100 123 2.06.05 /tmp/out.hepmc"
  exit 1
fi

echo "===> [rungen] $(date) [$@]"
echo ""

# pass mode and HepMC version
set_environment $1 ${12}

run "$@"
