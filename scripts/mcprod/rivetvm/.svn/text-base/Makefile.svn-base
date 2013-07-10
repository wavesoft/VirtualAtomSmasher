LIBS  = `$(RIVET)/bin/rivet-config --cppflags --ldflags --libs` -lHepMC
RPATH = -Wl,-rpath $(RIVET)/lib -Wl,-rpath $(HEPMC)/lib

all: rivetvm.exe

rivetvm.exe: rivetvm.cc tools.h
	g++ rivetvm.cc -o rivetvm.exe -DNDEBUG -Wfatal-errors $(RPATH) $(LIBS)

clean:
	rm -f rivetvm.exe
