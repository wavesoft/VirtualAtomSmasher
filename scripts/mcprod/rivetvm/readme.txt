Temporary documentation on rivetvm
----------------------------------

prepare environment:
  
  $ ssh lxplus
  $ source /afs/cern.ch/sw/lcg/contrib/gcc/4.3/x86_64-slc5-gcc43-opt/setup.sh
  $ make -f Makefile.manual

run generators:
  $ source setup.sh
  
  $ agile-runmc Pythia6:425 -p "MSTP(5)=320" --beams LHC:900 --seed 100 --nevts=300 --out=evt100.hepmc
  $ ./rivetvm.exe -a ATLAS_2010_S8591806 -i evt100.hepmc
  $ for i in ATLAS*.dat ; do ./complete.sh $i; sed -e "s,%seed%,100," -i $i; mv $i 100-$i; done
  
  $ agile-runmc Pythia6:425 -p "MSTP(5)=320" --beams LHC:900 --seed 314 --nevts=300 --out=evt314.hepmc
  $ ./rivetvm.exe -a ATLAS_2010_S8591806 -i evt314.hepmc
  $ for i in ATLAS*.dat ; do ./complete.sh $i; sed -e "s,%seed%,314," -i $i; mv $i 314-$i; done
  
  Two sets of .dat files will be produced (correspond to seeds 100 and 314).
  
merge:
  $ make -C ../merge
  $ ../merge/merge.exe 100-ATLAS_2010_S8591806_d02-x01-y01.dat 314-ATLAS_2010_S8591806_d02-x01-y01.dat
  
  Contents of
    100-ATLAS_2010_S8591806_d02-x01-y01.dat
  will be merged into
    314-ATLAS_2010_S8591806_d02-x01-y01.dat
