#include "Rivet/AnalysisHandler.hh"
#include "Rivet/Analysis.hh"
#include "LWH/Tree.h"

#include "HepMC/GenEvent.h"
#include <fstream>
#include "tools.h"

using namespace std;

int main(int argc, char* argv[])
{
  // Vector with Rivet analyses
  vector<string> analyses;
  
  // HepMC input file
  string input_file = "input.hepmc";
  
  // .dat histograms output directory
  string output_dat_dir = ".";
  
  // AIDA output file
  string output_aida = "output.aida";
  
  // dump directory for screensaver
  string output_dump_dir = "";
  
  // Iterate over command-line arguments
  for(int i = 0; i < argc; i++) {
    const string par = argv[i];
    const string val = (i < argc - 1) ? argv[i+1] : "";
    
    if (par == "--list-analyses") {
      listAvailableAnalyses();
      return 0;
    }
    else if (par == "-a") {
      analyses.push_back(val);
    }
    else if (par == "-i") {
      input_file = val;
    }
    else if (par == "-o") {
      output_dat_dir = val;
    }
    else if (par == "-H") {
      output_aida = val;
    }
    else if (par == "-d") {
      output_dump_dir = val;
    }
  }
  
  // Check if analyses have been supplied
  if (analyses.size() == 0) {
    cout << "No analysis specified!" << endl;
    listAvailableAnalyses();
    return 1;
  }
  
  // Rivet
  Rivet::AnalysisHandler rivet;
  
  // Specify the analyses to be used and do some checks
  foreach (const string& i, analyses) {
    if (checkAnalysis(i)) {
      rivet.addAnalysis(i);
    }
    else {
      cout << "Requested analysis " << i << " not available!" << endl;
      listAvailableAnalyses();
      return 1;
    }
  }
  
  // specify an input stream
  ifstream is(input_file.c_str());
  
  if (!is) {
    cerr << "Failed to open input file: " << input_file << endl;
    return 1;
  }
  
  // create an empty event
  HepMC::GenEvent evt;
  
  // loop over the input stream
  while (is) {
    // read the event
    evt.read(is);
    
    if (is.bad()) {
      cerr << "Failed to read events from input stream" << endl;
      return 1;
    }
    
    // skip invalid event (no particles or vertices)
    if (! evt.is_valid()) continue;
    
    // analyze the event
    rivet.analyze(evt);
    
    // print progress
    if (rivet.numEvents() % 100 == 0) {
      cout << rivet.numEvents() << " Events processed" << endl;
    }
    
    // dump histograms for display
    if ((rivet.numEvents() % 1000 == 0) && (output_dump_dir != "")) {
      cout << "dumping histograms..." << endl;
      LWH::Tree& tree = dynamic_cast<LWH::Tree&>(rivet.tree());
      const ObjectsMap om = makeSnapshot(tree);
      //printSnapshot(om);
      dumpSnapshot(output_dump_dir, om, rivet.numEvents(), rivet.crossSection());
    }
  }
  
  // get reference to analysis tree:
  LWH::Tree& tree = dynamic_cast<LWH::Tree&>(rivet.tree());
  //printTree(tree);
  //dumpTree(tree, rivet.numEvents(), rivet.crossSection());
  
  // make snapshot of all histograms:
  const ObjectsMap om0 = makeSnapshot(tree);
  //printSnapshot(om0);
  
  // (1) finalize a run
  // only Histogram1D converted to DPS, Profile1D stay as is
  foreach (Rivet::AnaHandle a, rivet.analyses()) {
    a->finalize();
  }
  
  // or (2)
  // all objects will be converted to DPS
  //rivet.finalize();
  
  //printTree(tree);
  
  // make snapshot
  const ObjectsMap om1 = makeSnapshot(tree);
  //printSnapshot(om1);
  
  // re-apply scale (and merge) snapshots:
  const ObjectsMap om = processSnapshots(om0, om1);
  
  // write out histograms
  dumpSnapshot(output_dat_dir, om, rivet.numEvents(), rivet.crossSection());
  
  // convert all histogram objects to Data Point Set format
  // to be compatible with `rivet-mkhtml` utility
  normalizeTree(tree);
  // dump all histograms to .aida file
  tree.commit(output_aida);
  
  return 0;
}
