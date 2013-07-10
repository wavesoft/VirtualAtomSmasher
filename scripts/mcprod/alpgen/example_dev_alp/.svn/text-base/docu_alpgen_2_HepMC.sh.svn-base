#!/bin/bash

# import Alpgen parsing utils
. ../utils_alp/section.sh

#_____________________________________________________________________________
#
# script for quick Alpgen testing
# $1 Agile or standal. HepMC dump
#
#-----------------------------------------------------------------------------
# env. setup; temp copy from runRivet.sh

source temp_env.sh
set_environment

# x is provided in alpgen .ini file
source temp_runRivet_args.sh
run local x wjet x x AlpGenPythia6 424:2.1.3d x x x
  
#-----------------------------------------------------------------------------
# pyuser++:
if [[ "$1" == "pyuser++" ]] ; then
# use Alpgen HepEvt->HepMC add-on:
    
# LMTODO: get from the string:
    export generatorME=alpgen 
    export versionME=2.1.3e
    export generatorPS=pythia6
    export versionPS=424
    
#prepare the config.mk file for Alpgen: 
    source write_config_pyuser.sh

# make alpgen executable for event generation:
    make gen prc=$process

# Alpgen steering utils and params
    ln -s ../../configuration/alpgen-W1jets.params.ini alpgen.params.docutemp.ini

# weighted events
    section alpgen.params.docutemp.ini genwgt | ./${process}gen.exe
    
# unweighted events
    section alpgen.params.docutemp.ini genuwgt | ./${process}gen.exe
    
# PS
    make pyuser++
    section alpgen.params.docutemp.ini addPS | ./pyuser++.exe
else
#-----------------------------------------------------------------------------
# Agile:
    
#prepare the config.mk file for Alpgen: 
    export generatorME=alpgen 
    export versionME=2.1.3e

    source write_config.sh
    
# make alpgen executable for event generation:
    make gen prc=$process

# Alpgen steering utils and params
    ln -s ../../configuration/alpgen-W1jets.params.ini alpgen.params.docutemp.ini
    
# weighted events
    section alpgen.params.docutemp.ini genwgt | ./${process}gen.exe
    
# unweighted events
    section alpgen.params.docutemp.ini genuwgt | ./${process}gen.exe

# PS
    tmp_hepmc="Agile.hepmc"

    rm -f tmp_params Agile.hepmc
    section alpgen.params.docutemp.ini steerPS > tmp_params
    section alpgen.params.docutemp.ini addPS | agile-runmc $generator:$version --paramfile=tmp_params --out=$tmp_hepmc
    rm -f tmp_params
    
#-----------------------------------------------------------------------------
fi

rm alpgen.params.docutemp.ini

#_____________________________________________________________________________