#!/bin/bash

# this function strip comments, empty lines and double spaces from input stream
weed () {
  sed 's,^#.*,,' | sed '/^$/ d' | sed 's,  *, ,g'
}

# generate a list of strings by inserting $args to $template
mul () {
  local template="$1"
  local args="$2"
  echo -n $args | xargs -d ' ' -I @ echo $template
}

# generate list of all supported combinations of <$beam $process $energy $params>
list_conf () {
  cat configuration/rivet-histograms.map | weed | grep -v ' - -$' | cut -d ' ' -f 1-4 | sort | uniq
}

# generate list of all runs
list_runs () {
  local mode="$1"
  local nevt="$2"
  local seed="$3"
  local filter="$4"
  
  # TODO: get generator/version/tune combinations from configuration/*-tunes.map files
  
  list_conf | while read conf ; do
    local beam="$(echo $conf | cut -d ' ' -f 1)"
    local process="$(echo $conf | cut -d ' ' -f 2)"
    local energy="$(echo $conf | cut -d ' ' -f 3 | cut -d . -f 1)" # get integer part of beam energy
    
    # Pythia6:
    mul "$mode $conf - pythia6 6.423 @ $nevt $seed" "default a dw dwt pro-q2o p0 phard psoft p3 pnocr px p6 p2010 d6t atlas-csc"
    mul "$mode $conf - pythia6 6.424 @ $nevt $seed" "default a dw dwt pro-q2o p0 phard psoft p3 pnocr px p6 p2010 d6t atlas-csc ambt1 z1"
    mul "$mode $conf - pythia6 6.425 @ $nevt $seed" "default a dw dwt pro-q2o p0 phard psoft p3 pnocr px p6 p2010 d6t atlas-csc ambt1 z1 z1-lep z2 z2-lep 350 351 352 353 354 355 356 357 358 359 360 361 362 363 364 365"
    mul "$mode $conf - pythia6 6.426 @ $nevt $seed" "default a dw dwt pro-q2o p0 phard psoft p3 pnocr px p6 p2010 d6t atlas-csc ambt1 z1 z1-lep z2 z2-lep 350 351 352 353 354 355 356 357 358 359 360 361 362 363 364 365"
    mul "$mode $conf - pythia6 6.427 @ $nevt $seed" "default a dw dwt pro-q2o p0 phard psoft p3 pnocr px p6 p2010 d6t atlas-csc ambt1 z1 z1-lep z2 z2-lep 350 351 352 353 354 355 356 357 358 359 360 361 362 363 364 365 370 371 372 373 374 375 376 377 378 379"
    mul "$mode $conf - pythia6 6.428beta @ $nevt $seed" "380 381 382"
    
    # Pythia8:
    if [[ "$beam" == "ee" ]] ; then
      # ee beam:
      mul "$mode $conf - pythia8 8.108.p1 @ $nevt $seed" "default montull"
      mul "$mode $conf - pythia8 8.130.p1 @ $nevt $seed" "default jetset montull hoeth"
      mul "$mode $conf - pythia8 8.135 @ $nevt $seed" "default jetset montull hoeth"
      mul "$mode $conf - pythia8 8.142 @ $nevt $seed" "default jetset montull hoeth"
      mul "$mode $conf - pythia8 8.145 @ $nevt $seed" "default jetset montull hoeth"
      mul "$mode $conf - pythia8 8.150 @ $nevt $seed" "default default-noRap default-noFsr jetset montull hoeth"
      mul "$mode $conf - pythia8 8.153 @ $nevt $seed" "default default-noRap default-noFsr jetset montull hoeth"
      mul "$mode $conf - pythia8 8.157 @ $nevt $seed" "default default-noRap default-noFsr jetset montull hoeth"
      mul "$mode $conf - pythia8 8.160 @ $nevt $seed" "default default-noRap default-noFsr jetset montull hoeth"
      mul "$mode $conf - pythia8 8.162 @ $nevt $seed" "default default-noRap default-noFsr jetset montull hoeth"
      mul "$mode $conf - pythia8 8.163 @ $nevt $seed" "default default-noRap default-noFsr jetset montull hoeth" 
      mul "$mode $conf - pythia8 8.165 @ $nevt $seed" "default default-noRap default-noFsr jetset montull hoeth"
      mul "$mode $conf - pythia8 8.170 @ $nevt $seed" "default default-noRap default-noFsr jetset montull hoeth"
      mul "$mode $conf - pythia8 8.175 @ $nevt $seed" "default default-noRap default-noFsr default-noCR jetset montull hoeth"
    else
      mul "$mode $conf - pythia8 8.108.p1 @ $nevt $seed" "default"
      mul "$mode $conf - pythia8 8.130.p1 @ $nevt $seed" "default early tune-1"
      mul "$mode $conf - pythia8 8.135 @ $nevt $seed" "default early tune-1"
      mul "$mode $conf - pythia8 8.142 @ $nevt $seed" "default early tune-1 tune-2c tune-2m tune-3c tune-3m"
      mul "$mode $conf - pythia8 8.145 @ $nevt $seed" "default early tune-1 tune-2c tune-2m tune-4c"
      mul "$mode $conf - pythia8 8.150 @ $nevt $seed" "default default-noRap default-noFsr early tune-1 tune-2c tune-2m tune-4c"
      mul "$mode $conf - pythia8 8.153 @ $nevt $seed" "default default-noRap default-noFsr early tune-1 tune-2c tune-2m tune-4c tune-4cx"
      mul "$mode $conf - pythia8 8.157 @ $nevt $seed" "default default-noRap default-noFsr early tune-1 tune-2c tune-2m tune-4c tune-4cx"
      mul "$mode $conf - pythia8 8.160 @ $nevt $seed" "default default-noRap default-noFsr early tune-1 tune-2c tune-2m tune-4c tune-4cx tune-A2"
      mul "$mode $conf - pythia8 8.162 @ $nevt $seed" "default default-noRap default-noFsr early tune-1 tune-2c tune-2m tune-4c tune-4cx tune-A2"
      mul "$mode $conf - pythia8 8.163 @ $nevt $seed" "default default-noRap default-noFsr early tune-1 tune-2c tune-2m tune-4c tune-4cx tune-A2"
      mul "$mode $conf - pythia8 8.165 @ $nevt $seed" "default default-noRap default-noFsr default-CD default-MBR early tune-1 tune-2c tune-2m tune-4c tune-4cx tune-A2"
      mul "$mode $conf - pythia8 8.170 @ $nevt $seed" "default default-noRap default-noFsr default-CD default-MBR early tune-1 tune-2c tune-2m tune-4c tune-4cx tune-A2"
      mul "$mode $conf - pythia8 8.175 @ $nevt $seed" "default default-noRap default-noFsr default-noCR default-CD default-MBR early tune-1 tune-2c tune-2m tune-4c tune-4cx tune-A2"
    fi
    
    # Vincia:
    if [[ "$beam" == "ee" ]] ; then
      # ee beam:
      mul "$mode $conf - vincia 1.0.24_8.142 @ $nevt $seed" "pythiadef jeppsson jeppsson2"
      mul "$mode $conf - vincia 1.0.25_8.150 @ $nevt $seed" "pythiadef jeppsson jeppsson2 jeppsson3"
      mul "$mode $conf - vincia 1.0.26_8.150 @ $nevt $seed" "pythiadef jeppsson jeppsson2 jeppsson3"
      mul "$mode $conf - vincia 1.0.26_8.157 @ $nevt $seed" "pythiadef jeppsson jeppsson2 jeppsson3"
      mul "$mode $conf - vincia 1.0.27_8.157 @ $nevt $seed" "pythiadef jeppsson jeppsson2 jeppsson3 jeppsson4"
      mul "$mode $conf - vincia 1.0.28_8.165 @ $nevt $seed" "pythiadef jeppsson jeppsson2 jeppsson3 jeppsson4 skands-2loop"
      mul "$mode $conf - vincia 1.0.28_8.170 @ $nevt $seed" "pythiadef jeppsson jeppsson2 jeppsson3 jeppsson4 skands-2loop"
    fi
    
    # Herwig++:
    if [[ "$process" != "softqcdall" && "$process" != "elastic" ]] ; then
      echo "$mode $conf - herwig++ 2.4.2 default $nevt $seed"
      echo "$mode $conf - herwig++ 2.5.0 default $nevt $seed"
      mul "$mode $conf - herwig++ 2.5.1 @ $nevt $seed" "default LHC-UE7-2 LHC-UE-EE-2-1800 LHC-UE-EE-2-2760 LHC-UE-EE-2-7000"
      mul "$mode $conf - herwig++ 2.5.2 @ $nevt $seed" "default LHC-UE7-2 LHC-UE-EE-2-1800 LHC-UE-EE-2-2760 LHC-UE-EE-2-7000 LHC-UE-EE-3-7000"
      if (( $energy < 1000 )) ; then
        mul "$mode $conf - herwig++ 2.5.1 @ $nevt $seed" "LHC-MU900-2 LHC-UE-EE-2-900"
        mul "$mode $conf - herwig++ 2.5.2 @ $nevt $seed" "LHC-MU900-2 LHC-UE-EE-2-900 LHC-UE-EE-3-900"
      fi
      if (( $energy < 3000 )) ; then
        mul "$mode $conf - herwig++ 2.5.2 @ $nevt $seed" "LHC-UE-EE-3-1800 LHC-UE-EE-3-2760"
      fi
      mul "$mode $conf - herwig++ 2.6.0 @ $nevt $seed" "default LHC-UE-EE-4 LHC-UE-EE-4-CTEQ6L1 LHC-UE-EE-SCR-CTEQ6L1"
      mul "$mode $conf - herwig++ 2.6.1a @ $nevt $seed" "default LHC-UE-EE-4 LHC-UE-EE-4-CTEQ6L1 LHC-UE-EE-SCR-CTEQ6L1"
      mul "$mode $conf - herwig++ 2.6.2 @ $nevt $seed" "default LHC-UE-EE-4 LHC-UE-EE-4-CTEQ6L1 LHC-UE-EE-SCR-CTEQ6L1"
      mul "$mode $conf - herwig++ 2.6.3 @ $nevt $seed" "default LHC-UE-EE-4 LHC-UE-EE-4-CTEQ6L1 LHC-UE-EE-SCR-CTEQ6L1"
    fi
    
    # Herwig++ with POWHEG (only for Drell-Yan)
    if [[ "$process" == "z" ]] ; then
      #echo "$mode $conf - herwig++powheg 2.4.2 hppdef $nevt $seed"
      echo "$mode $conf - herwig++powheg 2.5.0 default $nevt $seed"
      mul "$mode $conf - herwig++powheg 2.5.1 @ $nevt $seed" "default LHC-UE7-2 LHC-UE-EE-2-1800 LHC-UE-EE-2-2760 LHC-UE-EE-2-7000"
      mul "$mode $conf - herwig++powheg 2.5.2 @ $nevt $seed" "default LHC-UE7-2 LHC-UE-EE-2-1800 LHC-UE-EE-2-2760 LHC-UE-EE-2-7000 LHC-UE-EE-3-7000"
      if (( $energy < 1000 )) ; then
        mul "$mode $conf - herwig++powheg 2.5.1 @ $nevt $seed" "LHC-MU900-2 LHC-UE-EE-2-900"
        mul "$mode $conf - herwig++powheg 2.5.2 @ $nevt $seed" "LHC-MU900-2 LHC-UE-EE-2-900 LHC-UE-EE-3-900"
      fi
      if (( $energy < 3000 )) ; then
        mul "$mode $conf - herwig++powheg 2.5.2 @ $nevt $seed" "LHC-UE-EE-3-1800 LHC-UE-EE-3-2760"
      fi
      mul "$mode $conf - herwig++powheg 2.6.0 @ $nevt $seed" "default LHC-UE-EE-4"
      mul "$mode $conf - herwig++powheg 2.6.1a @ $nevt $seed" "default LHC-UE-EE-4"
      mul "$mode $conf - herwig++powheg 2.6.2 @ $nevt $seed" "default LHC-UE-EE-4"
      mul "$mode $conf - herwig++powheg 2.6.3 @ $nevt $seed" "default LHC-UE-EE-4"
      # note: LHC-UE-EE-*-CTEQ6L1 is not run as "herwig++powheg-z" require MRST-NLO PDF set
    fi
    
    # Sherpa:
    if [[ "$process" != "softqcdall" && "$process" != "elastic" ]] ; then
      echo "$mode $conf - sherpa 1.2.2p default $nevt $seed"
    
      # Sherpa 1.2.3 uemb-soft 53 and 63 GeV runs lead to
      # "Determination of <\tilde{O}> failed" critical error.
      # This is a know bug and fixed in next version.
      # Skip such runs.
      [[ "$process" == "uemb-soft" ]] && (( $energy < 100 ))
      if [[ "$?" != "0" ]] ; then
        echo "$mode $conf - sherpa 1.2.3 default $nevt $seed"
      fi
    
      echo "$mode $conf - sherpa 1.3.0 default $nevt $seed"
      echo "$mode $conf - sherpa 1.3.1 default $nevt $seed"
      echo "$mode $conf - sherpa 1.4.0 default $nevt $seed"
      echo "$mode $conf - sherpa 1.4.1 default $nevt $seed"
      echo "$mode $conf - sherpa 1.4.2 default $nevt $seed"
      echo "$mode $conf - sherpa 1.4.3 default $nevt $seed"
      echo "$mode $conf - sherpa 1.4.3.2 default $nevt $seed"
    fi 

    # Phojet:
    if [[ "$process" == "uemb-soft" || "$process" == "uemb-hard" || "$process" == "jets" || "$process" == "elastic" || "$process" == "softqcdall" ]] ; then
      echo "$mode $conf - phojet 1.12a default $nevt $seed"
    fi

    # Epos:
    if [[ "$process" == "uemb-soft" || "$process" == "uemb-hard" || "$process" == "jets" ]] ; then
      if [[ "$beam" == "pp" ]] ; then
        echo "$mode $conf - epos 1.99.crmc.v3400 default $nevt $seed"
        echo "$mode $conf - epos 1.99.crmc.v3400 lhc $nevt $seed"
      fi
    fi
    
    # Alpgen:
    # skip alpgen runs if ptMin = 0 (as 'uemb-soft' process not implemented for alpgen)
    local ptMin=$(echo $conf | cut -d ' ' -f 4 | cut -d , -f 1)
    if [[ "$process" == "jets" && "$ptMin" == "-" ]] ; then
      continue
    fi

    if [[ "$process" == "softqcdall" && "$process" == "elastic" ]] ; then
      continue
    fi
    
    if [[ "$process" == "winclusive" ]]; then
      # Pythia
      for v in 2.1.3e_6.426 2.1.4_6.426 ; do
        mul "$mode $conf 0,1 alpgenpythia6 $v @ 50000 $seed" "350-CTEQ5L 351-CTEQ5L 352-CTEQ5L 356-CTEQ6L1 pro-q2o-CTEQ5L z1-CTEQ5L z2-CTEQ6L1 z2-lep-CTEQ6L1"
        mul "$mode $conf 1,1 alpgenpythia6 $v @ 10000 $seed" "350-CTEQ5L 351-CTEQ5L 352-CTEQ5L 356-CTEQ6L1 pro-q2o-CTEQ5L z1-CTEQ5L z2-CTEQ6L1 z2-lep-CTEQ6L1"
        mul "$mode $conf 2,1 alpgenpythia6 $v @ 5000 $seed" "350-CTEQ5L 351-CTEQ5L 352-CTEQ5L 356-CTEQ6L1 pro-q2o-CTEQ5L z1-CTEQ5L z2-CTEQ6L1 z2-lep-CTEQ6L1"
        mul "$mode $conf 3,0 alpgenpythia6 $v @ 1000 $seed" "350-CTEQ5L 351-CTEQ5L 352-CTEQ5L 356-CTEQ6L1 pro-q2o-CTEQ5L z1-CTEQ5L z2-CTEQ6L1 z2-lep-CTEQ6L1"
      done
      
      # fHerwig + Jimmy
      for v in 2.1.3e_6.520 2.1.4_6.520 ; do
        echo "$mode $conf 0,1 alpgenherwigjimmy $v default-CTEQ6L1 50000 $seed"
        echo "$mode $conf 1,1 alpgenherwigjimmy $v default-CTEQ6L1 10000 $seed"
        echo "$mode $conf 2,1 alpgenherwigjimmy $v default-CTEQ6L1 5000 $seed"
        echo "$mode $conf 3,0 alpgenherwigjimmy $v default-CTEQ6L1 1000 $seed"
      done
    fi

    if [[ "$process" == "jets" ]]; then
      # Pythia
      for v in 2.1.3e_6.426 2.1.4_6.426 ; do
        mul "$mode $conf 2,1 alpgenpythia6 $v @ 20000 $seed" "350-CTEQ5L 351-CTEQ5L 352-CTEQ5L 356-CTEQ6L1 pro-q2o-CTEQ5L z1-CTEQ5L z2-CTEQ6L1 z2-lep-CTEQ6L1"
        mul "$mode $conf 3,1 alpgenpythia6 $v @ 5000 $seed" "350-CTEQ5L 351-CTEQ5L 352-CTEQ5L 356-CTEQ6L1 pro-q2o-CTEQ5L z1-CTEQ5L z2-CTEQ6L1 z2-lep-CTEQ6L1"
        mul "$mode $conf 4,0 alpgenpythia6 $v @ 1000 $seed" "350-CTEQ5L 351-CTEQ5L 352-CTEQ5L 356-CTEQ6L1 pro-q2o-CTEQ5L z1-CTEQ5L z2-CTEQ6L1 z2-lep-CTEQ6L1"
      done
      
      # fHerwig + Jimmy
      for v in 2.1.3e_6.520 2.1.4_6.520 ; do
        echo "$mode $conf 2,1 alpgenherwigjimmy $v default-CTEQ6L1 20000 $seed"
        echo "$mode $conf 3,1 alpgenherwigjimmy $v default-CTEQ6L1 5000 $seed"
        echo "$mode $conf 4,0 alpgenherwigjimmy $v default-CTEQ6L1 1000 $seed"
      done
    fi

  done | grep -E "$filter"
}


# === main ===

# this script is intended to run all supported generators
# to produce all supported tunes/observables/cuts

# print usage info
if [[ "$#" < "2" || "$#" > "4" ]] ; then
  echo "runAll.sh: tool for MC production"
  echo "Usage:"
  echo "  ./runAll.sh [mode] [nevt] {filter} {queue}"
  echo "      [mode]   - local, lxbatch, dryrun, list"
  echo "      [nevt]   - number of events per run, can be specified with 'k' or 'M' suffix"
  echo "      {filter} - filter string, optional, default is no filtering"
  echo "      {queue}  - lxbatch queue name, optional, default is 2nd"
  echo ""
  
  exit 1
fi

mode="$1"         # run mode
nevt="$2"         # number of events per run
filter="$3"
queue=${4-"2nd"}  # LXBATCH jobs queue

# take into account 'k' or 'M' suffix
nevt=${nevt/%[kK]/000}
nevt=${nevt/%[mM]/000000}

# generate initial seed for random number generator
seed=$((100000 + RANDOM))

case "$mode" in
  "local"|"dryrun" )
    log="mcprod.log"  # log file
    rm -f $log
    
    echo "Running histograms generation ..."
    echo "Total runs = $(list_runs | wc -l)"
    echo "Mode = $mode"
    echo "Events per run = $nevt"
    echo "Seed = $seed"
    echo "Log = $log"
    echo "Output = dat/"
    
    list_runs $mode $nevt $seed "$filter" | while read line ; do
      echo "$(date) => $line"
      # make run and save logs
      ./runRivet.sh $line >> $log 2>&1
      
      # check run success:
      if [[ "$?" != "0" ]] ; then
        echo "WARNING: fail to run [$line]"
      fi
    done
    
    echo "All runs finished"
    echo "Total number of generated histograms: $(find dat/ -type f | wc -l)"
    ;;
  
  "lxbatch" )
    # --- master mode ---
    # (this part is going on local machine)
    
    # check the submission directory situated on AFS to avoid job failures
    if ! fs whereis >& /dev/null ; then
      echo "ERROR: current directory is situated on local disk drive"
      echo "       which is not accessible from LXBATCH nodes."
      echo "       Move files to any AFS directory (for example"
      echo "       home directory on lxplus) and try again."
      exit 1
    fi
    
    # get SVN revision
    svnRevision=$(svnversion)
    
    # prepare job submission directory
    batchdir="$(pwd)/batch-$(date +%F-%H.%M.%S)"
    jobfiles="configuration/ pythia8/ vincia/ alpgen/ phojet/ rivetvm/ analyses/ runAll.sh runRivet.sh rungen.sh"
    mkdir $batchdir
    cp -r configuration runAll.sh $batchdir/
    tar zcf $batchdir/mcprod.tgz $jobfiles
    
    if [[ "$?" != "0" ]] ; then
      echo "ERROR: fail to copy job files to batch directory"
      echo "       probably, job files do not situated in current directory"
      echo "         job files   = $jobfiles"
      echo "         current dir = $(pwd)"
      echo "         batch dir   = $batchdir"
      exit 1
    fi
    
    # enter to the batch directory
    cd $batchdir
    
    # submit jobs:
    { echo "Submitting jobs to LXBATCH ..."
      echo "Batch directory = $(pwd)"
      echo "Queue = $queue"
      echo "Events per run = $nevt"
      echo "Seed = $seed"
      echo "SVN revision = $svnRevision"
      echo "Filter = $filter"
    } | tee info.txt
    
    i="0"
    mkdir tasks/ results/
    
    list_runs $mode $nevt $seed "$filter" | while read line ; do
      echo $line > tasks/$i
      echo -n "$i [$line] "
      bsub -q $queue $(pwd)/$0 slave tasks/$i
      let "i++"
    done
    
    echo "All jobs submitted"
    ;;
  
  "slave" )
    # --- slave mode ---
    # (this part is going on "lxbatch" server)
    
    src=$LS_SUBCWD
    jobid=$LSB_BATCH_JID
    taskf=$src/$2
    dst=$src/results/$jobid.tgz
    
    # copying job files
    echo "$(date): Prepare job files..."
    tar zxf $src/mcprod.tgz
    
    # run generator and rivet
    echo "$(date): Running MC production..."
    line="$(cat $taskf)"
    ./runRivet.sh $line &> runRivet.log
    
    if [[ "$?" != "0" ]] ; then
      echo "ERROR: run fail"
      echo "       log-file runRivet.log:"
      echo "=================================================================="
      cat runRivet.log
      echo "=================================================================="
      exit 1
    fi
    
    # truncate log file to 1 Mb:
    logsize=$(du -k runRivet.log | cut -f 1)
    if (( $logsize > 1000 )) ; then
      # take head and tail part, drop middle
      ( head -c 500k runRivet.log ; tail -c 500k runRivet.log ) > runRivet.log.new
      mv runRivet.log.new runRivet.log
    fi
    
    # and copy results back
    echo "$(date): Copying results to $dst"
    tar zcf $dst dat/ runRivet.log
    if [[ "$?" != "0" ]] ; then
      echo "ERROR: fail to copy results"
      echo "         src = $(pwd)/"
      echo "         dst = $dst"
      exit 1
    fi
    
    # remove task file to indicate success
    rm $taskf
    
    echo "$(date): Job finished successfully"
    ;;
  
  "list" )
    list_runs $mode $nevt $seed "$filter"
    ;;
  
  * )
    echo "ERROR: unknown mode: $mode"
    exit 1
    ;;
esac

