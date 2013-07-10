TARGET   = phojet.exe
PARTS    = hist.o phojet.o

PLATFORM = x86_64-slc5-gcc43-opt
HEPMC   ?= /afs/cern.ch/sw/lcg/external/HepMC/2.06.05/$(PLATFORM)
PYTHIA6 ?= /afs/cern.ch/sw/lcg/external/MCGenerators/pythia6/115a/$(PLATFORM)
PHOJET  ?= /afs/cern.ch/sw/lcg/external/MCGenerators/phojet/1.12a/$(PLATFORM)

INC      = -I$(HEPMC)/include
LIB      = -L$(HEPMC)/lib -lHepMC -lHepMCfio \
           -L$(PYTHIA6)/lib -lpythia6 -lpythia6_dummy \
           -L$(PHOJET)/lib -lphojet -lphojet_pdfdummy
RPATH    = -Wl,-rpath $(HEPMC)/lib -Wl,-rpath $(PYTHIA6)/lib -Wl,-rpath $(PHOJET)/lib

all: $(TARGET)

$(TARGET): $(PARTS)
	g++ -o $(TARGET) $(PARTS) $(LIB) $(RPATH)

.f.o:
	gfortran -c $<

.cc.o:
	g++ -c $< $(INC)

clean:
	rm -f $(TARGET) $(PARTS)
