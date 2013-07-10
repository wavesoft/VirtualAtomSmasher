// Vincia wrapper (based on vincia01.cc example from Vincia distribution)

#include "Vincia.h"
#include "HepMCInterface.h"

#include "HepMC/GenEvent.h"
#include "HepMC/IO_GenEvent.h"
#ifdef HEPMC_HAS_UNITS
#include "HepMC/Units.h"
#endif

// Main Program
int main(int argc, char* argv[])
{
  // Check that correct number of command-line arguments
  if (argc != 4) {
    cerr << " Unexpected number of command-line arguments. \n You are"
         << " expected to provide one input and one output file name. \n"
         << " Program stopped! " << endl;
    return 1;
  }
  
  // Check that the provided input name corresponds to an existing file.
  ifstream is(argv[1]);
  if (!is) {
    cerr << " Command-line file " << argv[1] << " was not found. \n"
         << " Program stopped! " << endl;
    return 1;
  }
  
  // Confirm that external files will be used for input and output.
  cout << " PYTHIA settings will be read from file " << argv[1] << endl;
  cout << " HepMC events will be written to file " << argv[2] << endl;
  
  // Interface for conversion from Pythia8::Event to HepMC one. 
  HepMC::I_Pythia8 ToHepMC;
  // ToHepMC.set_crash_on_problem();
  
  // Specify file where HepMC events will be stored.
  HepMC::IO_GenEvent ascii_io(argv[2], std::ios::out);
  
  // Define Pythia 8 generator with plug-in
  Pythia pythia;
  VinciaPlugin vincia(&pythia, argv[1], argv[3]);
  
  // Extract settings to be used in the main program.  
  int    nEvent    = pythia.settings.mode("Main:numberOfEvents");
  int    nShow     = pythia.settings.mode("Main:timesToShow");
  
  // Initialize
  if (! pythia.init()) return 1;
  
  // List changed settings
  pythia.settings.listChanged();
  pythia.particleData.listChanged();
  
  // Event loop
  for (int iEvent = 0; iEvent < nEvent; ++iEvent) {

    if (iEvent % (max(1, nEvent/max(nShow, 1))) == 0)
      cout << " Now begin event " << iEvent << endl;
    
    if (!pythia.next()) continue;
    
    // Construct new empty HepMC event
    #ifdef HEPMC_HAS_UNITS
      HepMC::GenEvent* hepmcevt = new HepMC::GenEvent(HepMC::Units::GEV, HepMC::Units::MM);
    #else
      HepMC::GenEvent* hepmcevt = new HepMC::GenEvent();
    #endif
    
    // Fill HepMC event, including PDF info.
    ToHepMC.fill_next_event(pythia, hepmcevt);
    
    // Write the HepMC event to file. Done with it.
    ascii_io << hepmcevt;
    delete hepmcevt;
  }
  
  // Print out Vincia end-of-run information
  pythia.statistics();
  vincia.printInfo();
  
  // Done.
  return 0;
}
