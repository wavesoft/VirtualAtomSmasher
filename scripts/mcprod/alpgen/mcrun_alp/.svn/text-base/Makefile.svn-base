# platform / compiler specs

FC = gfortran
FFLAGS = -O2 -fno-automatic -fno-backslash -ffast-math
ALPGENAUTHOR = ${ALPGEN}/../share/alpgen-author
ALPGENLIBS = ${ALPGEN}/lib/archive

#top-libs
alp=${ALPGENAUTHOR}/alplib
her=${ALPGENAUTHOR}/herlib
py=${ALPGENAUTHOR}/pylib


# ME-level events generation : instructions for make gen
# DEFINE DIRECTORY AND FILE ALIASES
alp= ${ALPGENAUTHOR}/alplib
prclib= ${ALPGENAUTHOR}/$(prc)lib
#prcusr= ${ALPGENAUTHOR}/$(prc)work
prcusr=${PWD}
prcfile=$(prclib)/$(prc)

execfile=$(prc)gen.exe
usrfile=$(prcusr)/$(prc)usr

ifneq ($(prc),hjet)

  PARTON= $(prcfile).f $(usrfile).f

  INC=  $(prclib)/$(prc).inc $(alp)/alpgen.inc

  gen: $(PARTON) $(INC)
	$(FC) $(FFLAGS) -o $(execfile) $(PARTON) -L${ALPGENLIBS} -lalpgen

else

  PARTON= $(prcfile).f $(usrfile).f $(prclib)/77/VX77.f

  INC=  $(prclib)/$(prc).inc $(alp)/alpgen.inc $(wildcard $(prclib)/77/*.inc)

#   check the list of files with the author's hjetwork/Makefile
  gen: $(PARTON) $(INC)
	$(FC) $(FFLAGS) -o $(execfile) $(PARTON) \
	$(alp)/alpgen.f $(alp)/alputi.f $(alp)/alppdf.f $(alp)/Aint90.f

endif



# Include files
INC= $(py)/hepevt.inc $(py)/hnt.inc $(py)/pythia6300.inc 
INCLUDES=-I$(HEPMC)/include -Iinclude

RPATH = -Wl,-rpath $(PYTHIA6LOCATION) -Wl,-rpath $(HEPMC)/lib

test:
	@echo "test"
	@echo $(RPATH)	
	@echo $(HEPMC)	
	@echo $(INCLUDES)		
	@echo $(PYTHIA6LOCATION)

pyuser++:
	$(FC) $(FFLAGS) -I$(PYTHIA6LOCATION)/../../include \
	-I$(HEPMC)/include $(INCLUDES) -o pyuser++.exe \
	pyuser++.cc $(py)/atopyt.f \
	-L${ALPGENLIBS} -L$(PYTHIA6LOCATION) \
	-lpythia6 -lalpsho -lpythia6_dummy -lpythia6_pdfdummy \
	-L$(HEPMC)/lib -lHepMC -lHepMCfio $(RPATH)

# DIRECTORY CLEANUP UTILITIES:
#
# remove object files, etc
cleanall:
	@echo "Fix me"
	-rm fort.* *.top *.par *.wgt *.unw *.mon *.stat *.exe bin
