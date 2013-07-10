#!/bin/bash

set_environment () {
  echo "Setting environment..."
  
  local mode=$1
  local EXTERNAL=/afs/cern.ch/sw/lcg/external
  if [[ "$mode" == "boinc" ]] ; then
    EXTERNAL=/opt/sft/lcg/external
  fi
  
  # set SLC5 platform name:
  LCG_PLATFORM=x86_64-slc5-gcc43-opt
  if [[ "$(uname -m)" != "x86_64" ]] ; then
    LCG_PLATFORM=i686-slc5-gcc43-opt
  fi
  
  source $EXTERNAL/gcc/4.3/$LCG_PLATFORM/setup.sh $EXTERNAL
 
  MCGENERATORS=$EXTERNAL/MCGenerators
  MCGENERATORS_HEPMC206=$EXTERNAL/MCGenerators_hepmc20603
  local AGILE=$MCGENERATORS_HEPMC206/agile/1.2.2a0/$LCG_PLATFORM
  local RIVET=$MCGENERATORS_HEPMC206/rivet/1.5.0/$LCG_PLATFORM
  HEPMC=$EXTERNAL/HepMC/2.06.03/$LCG_PLATFORM
  local PYTHON=$EXTERNAL/Python/2.6.5/$LCG_PLATFORM
  
  export PYTHONPATH=$AGILE/lib/python2.5/site-packages:$RIVET/lib/python2.5/site-packages:$PYTHONPATH
  export LD_LIBRARY_PATH=$HEPMC/lib:$AGILE/lib:$RIVET/lib:$PYTHON/lib:$LD_LIBRARY_PATH
  export PATH=$PYTHON/bin:$RIVET/bin:$AGILE/bin:$PATH
  export AGILE_GEN_PATH=$MCGENERATORS
  export AGILE_PARAM_PATH=$(pwd)/configuration
  export RIVET_REF_PATH=$(rivet-config --datadir)
  
  echo "LCG_PLATFORM=$LCG_PLATFORM"
  echo "gcc version = $(gcc -dumpversion)"
  echo "AGILE=$AGILE"
  echo "RIVET=$RIVET"
  echo "HEPMC=$HEPMC"
  echo "AGILE_GEN_PATH=$AGILE_GEN_PATH"
  echo "AGILE_PARAM_PATH=$AGILE_PARAM_PATH"
  echo "RIVET_REF_PATH=$RIVET_REF_PATH"
  echo ""
}
