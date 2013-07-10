#include <iostream>
#include "HepMC/PythiaWrapper.h"
#include "HepMC/IO_HEPEVT.h"
#include "HepMC/IO_GenEvent.h"
#include "HepMC/GenEvent.h"
#include "HepMC/HEPEVT_Wrapper.h"

using namespace std;

extern "C" {
  // definition of PHO_INIT
  void pho_init_(int& LINP, int& IREJ);
  
  // HepMC conversion, called from hist.f:PHO_PHIST()
  void convhepmc_(const double& xsec_mb, const int& final);
}

// wrapper around pho_init_() for convenience
int call_pho_init(int LINP)
{
  int IREJ;
  pho_init_(LINP, IREJ);
  return IREJ;
}

// path to HepMC output file
const char* outfile = 0;

// PYJETS to HepMC conversion, called from hist.f:PHO_PHIST()
void convhepmc_(const double& xsec_mb, const int& final)
{
  HepMC::HEPEVT_Wrapper::set_max_number_entries(10000);
  
  // Instantiate an IO strategy for reading from HEPEVT.
  static HepMC::IO_HEPEVT hepevtio;
  
  // Instantial an IO strategy to write the data to file
  static HepMC::IO_GenEvent io(outfile, std::ios::out);
  
  static HepMC::GenEvent* prev_evt = 0;
  HepMC::GenEvent* evt = 0;
  
  static int nevents = 0;
  
  if (final == 0) {
    // pythia pyhepc routine convert common PYJETS in common HEPEVT
    call_pyhepc(1);
    
    //HepMC::HEPEVT_Wrapper check_hepevt_consistency();
    
    // convert common HEPEVT to HepMC record
    evt = new HepMC::GenEvent(HepMC::Units::GEV, HepMC::Units::MM);
    hepevtio.fill_next_event(evt);
    
    nevents++;
  }
  else {
    // set cross section information
    HepMC::GenCrossSection cross;
    const double xsec = 1e9 * xsec_mb; // convert to pb
    const double xsec_err = xsec / sqrt(nevents); // statistical error
    cross.set_cross_section(xsec, xsec_err);
    prev_evt->set_cross_section(cross);
  }
  
  // write the event out to the output file
  if (prev_evt != 0) {
    io << prev_evt;
    delete prev_evt;
  }
  
  prev_evt = evt;
}


int main(int argc, char* argv[])
{
  if (argc < 2) {
    cerr << "Usage:\n"
         << "  phojet.exe events.hepmc < card.txt\n"
         << endl;
    return 1;
  }
  
  outfile = argv[1];
  
  if (call_pho_init(5) != 0) {
    cerr << "Error in PHO_INIT" << endl;
    return 1;
  }
  
  return 0;
}
