
INC   = -I$(PYTHIA8)/include -I$(HEPMC)/include
LIB   = -L$(PYTHIA8)/lib -lpythia8 -lhepmcinterface -L$(LHAPDF)/lib -lLHAPDF -L$(HEPMC)/lib -lHepMC
RPATH = -Wl,-rpath $(PYTHIA8)/lib -Wl,-rpath $(LHAPDF)/lib -Wl,-rpath $(HEPMC)/lib

all: pythia8.exe

pythia8.exe: pythia8.cc
	g++ pythia8.cc -o pythia8.exe $(INC) $(LIB) $(RPATH)

clean:
	rm -f pythia8.exe

