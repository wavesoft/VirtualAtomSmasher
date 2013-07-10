# platform / compiler specs
include config.mk
#top-libs
alp=${ALPGENINSTALLED}/alpgen-author/alplib
her=${ALPGENINSTALLED}/alpgen-author/herlib
py=${ALPGENINSTALLED}/alpgen-author/pylib
HepMClib= -L${HEPMC}/lib -lHepMC
HepMCfiolib= -L${HEPMC}/lib -lHepMCfio

thisdir=${PWD}

# ME-level events generation : instructions for make gen
include alpgen.mk

# Include files
INC= $(py)/hepevt.inc $(py)/hnt.inc $(py)/pythia6300.inc 
INCLUDES=-I$(HEPMC)/include -I$(thisdir)/include

HDRS = $(HEPMC)/include/HepMC/*.h $(thisdir)/include/*.h

RPATH = -Wl,-rpath $(PYTHIA6LOCATION) -Wl,-rpath $(HEPMC)/lib

test:
	@echo "test"
	@echo $(RPATH)	
	@echo $(HEPMC)	
	@echo $(HDRS)
	@echo $(INCLUDES)		
	@echo $(PYTHIA6LOCATION)
	
pyuser++:
	mkdir -p ../bin
	$(FC) $(FFLAGS) -I$(PYTHIA6LOCATION)/../../include \
	-I$(HEPMC)/include $(INCLUDES) -o ../bin/pyuser++.exe \
	pyuser++.cc $(py)/atopyt.f \
	-L${ALPGENLIBS} -L$(PYTHIA6LOCATION) \
	-lpythia6 -lalpsho -lpythia6_dummy -lpythia6_pdfdummy \
	-L$(HEPMC)/lib -lHepMC -lHepMCfio $(RPATH)
	ln -fs ../bin/pyuser++.exe pyuser++.exe

# DIRECTORY CLEANUP UTILITIES:
#
# remove object files, etc
cleanall:
	@echo "Fix me"
	-rm fort.* *.top *.par *.wgt *.unw *.mon *.stat *.exe bin
