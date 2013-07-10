INC   = -I$(PYTHIA8)/include -I$(HEPMC)/include -I$(VINCIA)/include 
LIB   = -L$(PYTHIA8)/lib -lpythia8 -llhapdfdummy -lhepmcinterface \
        -L$(HEPMC)/lib -lHepMC \
        -L$(VINCIA)/lib/archive -lvincia -lmginterface -ldhelas3 -lgfortran -lgfortranbegin
RPATH = -Wl,-rpath $(PYTHIA8)/lib -Wl,-rpath $(HEPMC)/lib

all: vincia.exe

vincia.exe: vincia.cc
	g++ vincia.cc -o vincia.exe -O2 $(INC) $(LIB) $(RPATH)

clean:
	rm -f vincia.exe
