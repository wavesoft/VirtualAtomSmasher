// -*- C++ -*-
#ifndef TOOLS_H
#define TOOLS_H

#include "LWH/Histogram1D.h"
#include "LWH/Profile1D.h"
#include "LWH/DataPointSet.h"
#include "LWH/AIManagedObject.h"
#include "LWH/Axis.h"
#include "LWH/AIHistogramFactory.h"
#include "LWH/DataPointSetFactory.h"
#include "Rivet/Tools/Utils.hh"


using namespace std;

// Change AIDA histos into data point sets
// the code is a copy-and-paste with minor ajustments from
//   http://projects.hepforge.org/rivet/trac/browser/trunk/src/Core/AnalysisHandler.cc
//     function AnalysisHandler::_normalizeTree()
void normalizeTree(LWH::Tree& tree)
{
  const vector<string> paths = tree.listObjectNames("/", true); // args set recursive listing
  //MSG_TRACE("Number of objects in AIDA tree = " << paths.size());
  const string tmpdir = "/RivetNormalizeTmp";
  tree.mkdir(tmpdir);
  
  LWH::DataPointSetFactory datapointsetFactory(tree);
  
  foreach (const string& path, paths) {

    LWH::IManagedObject* hobj = tree.find(path);
    if (hobj) {

      // Try to cast to specific histogram types
      const LWH::IProfile1D* prof = dynamic_cast<LWH::IProfile1D*>(hobj);
      const LWH::IHistogram1D* histo = (prof) ? 0 : dynamic_cast<LWH::IHistogram1D*>(hobj);
      const LWH::IHistogram2D* histo2 = (prof || histo) ? 0 : dynamic_cast<LWH::IHistogram2D*>(hobj);
      if (!(histo || histo2 || prof)) {
        //MSG_TRACE("Could not find the type of histo for " << path << ": it's probably already a DPS");
        continue;
      }

      // AIDA path mangling
      const size_t lastslash = path.find_last_of("/");
      const string basename = path.substr(lastslash+1, path.length() - (lastslash+1));
      const string tmppath = tmpdir + "/" + basename;

      // If it's a normal histo:
      tree.mv(path, tmpdir);
      if (histo) {
        //MSG_TRACE("Converting histo " << path << " to DPS");
        LWH::IHistogram1D* tmphisto = dynamic_cast<LWH::IHistogram1D*>(tree.find(tmppath));
        if (tmphisto) datapointsetFactory.create(path, *tmphisto);
      }
      // If it's a 2D histo:
      else if (histo2) {
        //MSG_TRACE("Converting 2D histo " << path << " to DPS");
        LWH::IHistogram2D* tmphisto2 = dynamic_cast<LWH::IHistogram2D*>(tree.find(tmppath));
        if (tmphisto2) datapointsetFactory.create(path, *tmphisto2);
      }
      // If it's a profile histo:
      else if (prof) {
        //MSG_TRACE("Converting profile histo " << path << " to DPS");
        LWH::IProfile1D* tmpprof = dynamic_cast<LWH::IProfile1D*>(tree.find(tmppath));
        if (tmpprof) datapointsetFactory.create(path, *tmpprof);
      }
      tree.rm(tmppath);
    }
  }
  tree.rmdir(tmpdir);
}


string getObjectType(LWH::IManagedObject* obj)
{
  const LWH::Profile1D* prof = dynamic_cast<LWH::Profile1D*>(obj);
  if (prof) return "PROFILE";
  
  const LWH::Histogram1D* histo = dynamic_cast<LWH::Histogram1D*>(obj);
  if (histo) return "HISTO";
  
  const LWH::DataPointSet* dps = dynamic_cast<LWH::DataPointSet*>(obj);
  if (dps) return "DPS";
  
  return "UNKNOWN";
}

LWH::IManagedObject* copyObject(LWH::IManagedObject* obj)
{
  const string type = getObjectType(obj);
  if (type == "PROFILE") return new LWH::Profile1D(*dynamic_cast<LWH::Profile1D*>(obj));
  if (type == "HISTO")   return new LWH::Histogram1D(*dynamic_cast<LWH::Histogram1D*>(obj));
  if (type == "DPS")     return new LWH::DataPointSet(*dynamic_cast<LWH::DataPointSet*>(obj));
  return 0;
}


typedef map<string, LWH::IManagedObject*> ObjectsMap;

ObjectsMap makeSnapshot(LWH::Tree& tree)
{
  ObjectsMap om;
  
  const vector<string> paths = tree.listObjectNames("/", true); // args set recursive listing
  foreach (const string& path, paths) {
    LWH::IManagedObject* obj = tree.find(path);
    om[path] = copyObject(obj);
  }
  
  return om;
}


void printSnapshot(const ObjectsMap& om)
{
  cout << "These are the contents of the snapshot:" << endl;
  
  for (ObjectsMap::const_iterator i = om.begin(); i != om.end(); ++i) {
    const string type = getObjectType(i->second);
    cout << type << "\t" << i->first << endl;
  }
}

// purpose of this function is to recover statistical information
// after rivet finalisation step (conversion of all kinds of
// histograms to DataPointSet)
// Input:
//   om0 - snapshot of all histogram objects before finalize()
//   om1 - and after finalize()
// Output:
//   recovered histograms
ObjectsMap processSnapshots(const ObjectsMap& om0, const ObjectsMap& om1)
{
  ObjectsMap om;
  
  // loop over all histograms from 'om1'
  for (ObjectsMap::const_iterator i = om1.begin(); i != om1.end(); ++i) {
    const string type1 = getObjectType(i->second);
    
    if (type1 != "DPS") {
      // final histogram is not in DPS format, copy final:
      om[i->first] = i->second;
      continue;
    }
    
    // find corresponding histogram from 'om0':
    ObjectsMap::const_iterator orig = om0.find(i->first);
    
    if (orig == om0.end()) {
      // corresponding original histogram do not exists, copy final:
      om[i->first] = i->second;
      continue;
    }
    
    const string type0 = getObjectType(orig->second);
    
    if (type0 == "DPS") {
      // original histogram also in DPS format, copy final:
      om[i->first] = i->second;
      continue;
    }
    
    // If we reach this point this means
    // final histogram is in DPS format, but
    // original histogram is in non-DPS format.
    // Let's try to recover final histogram to original format:
    //   1. calculate bin-per-bin ratio between final and original histograms
    //   2. if the ration is constant along all bins re-apply the ratio to original histogram
    
    LWH::Tree tree;
    LWH::DataPointSetFactory factory(tree);
    
    LWH::IDataPointSet* dps0;
    if (type0 == "HISTO") {
      const LWH::Histogram1D* histo = dynamic_cast<LWH::Histogram1D*>(orig->second);
      dps0 = factory.create("histo", *histo);
    }
    else if (type0 == "PROFILE") {
      const LWH::Profile1D* prof = dynamic_cast<LWH::Profile1D*>(orig->second);
      dps0 = factory.create("prof", *prof);
    }
    else {
      // original histogram in unknown format, copy final:
      om[i->first] = i->second;
      continue;
    }
    
    const LWH::DataPointSet* dps1 = dynamic_cast<LWH::DataPointSet*>(i->second);
    
    if (dps0->size() != dps1->size()) {
      // DPS do not match to each other, copy final:
      om[i->first] = i->second;
      continue;
    }
    
    cout << i->first << " " << type0 << " -> " << type1 << endl;
    
    // calculate mean and sigma^2 over all bin-per-bin ratios:
    double Sr = 0.;
    double Sr2 = 0.;
    int N = 0;
    
    for (int j = 0; j < dps0->size(); ++j) {
      const LWH::IDataPoint* p0 = dps0->point(j);
      const double x0 = p0->coordinate(0)->value();
      const double y0 = p0->coordinate(1)->value();
      
      const LWH::IDataPoint* p1 = dps1->point(j);
      const double x1 = p1->coordinate(0)->value();
      const double y1 = p1->coordinate(1)->value();
      
      const bool isEmpty = ((y0 == 0.) && (y1 == 0.));
      if (isEmpty) continue; // skip empty bins
      
      const double r = (y0 != 0.) ? (y1 / y0) : 0;
      Sr  += r;
      Sr2 += r*r;
      N++;
      
      //cout << x0 << " " << x1 << " "
      //     << y0 << " " << y1 << " "
      //     << r << endl;
    }
    
    // calculate scale factor:
    const double mean   = (N > 0) ? Sr/N : 1.;
    const double sigma2 = (N > 0) ? (Sr2/N - mean*mean) : 0;
    const double sigma = sqrt(fabs(sigma2));
    const double SoM = sigma/mean;
    
    cout << "scale: mean = " << mean << "  sigma = " << sigma << "  sigma/mean = " << SoM << endl;
    
    // check dispersion:
    if (SoM > 1e-6) {
      // dispersion is not negligible
      // this means bins were scaled in non-uniform way
      // and recovery is not trivial (probably),
      // just copy final histo:
      om[i->first] = i->second;
      continue;
    }
    
    // dispersion is low, this means all bins scaled uniformly
    // so, we can re-apply scale factor to original histogram:
    if (type0 == "HISTO") {
      LWH::Histogram1D* histo = dynamic_cast<LWH::Histogram1D*>(orig->second);
      histo->scale(mean);
    }
    else {
      LWH::Profile1D* prof = dynamic_cast<LWH::Profile1D*>(orig->second);
      prof->scale(mean);
    }
    
    // add re-scaled original histogram to results:
    om[orig->first] = orig->second;
  }
  
  return om;
}


void printTree(LWH::Tree& tree)
{
  cout << "These are the contents of the Tree:" << endl;
  
  const vector<string> paths = tree.listObjectNames("/", true); // args set recursive listing
  foreach (const string& path, paths) {
    const string type = getObjectType(tree.find(path));
    cout << type << "\t" << path << endl;
  }
}

bool checkAnalysis(const string a)
{
  const static set<string> analyses = Rivet::AnalysisLoader::getAllAnalysisNames();
  return (analyses.count(a) != 0);
}

void listAvailableAnalyses()
{
  static const set<string> analyses = Rivet::AnalysisLoader::getAllAnalysisNames();
  cout << "Available analyses: " << endl;
  foreach (const string& a, analyses) {
    cout << a << endl;
  }
}

// Small function that creates the output filename for a single histogram
string getOutputFilename(string hpath)
{
  // TODO: remove boost functions
  boost::erase_first(hpath, "/");
  return boost::ireplace_all_copy(hpath, "/", "_") + ".dat";
}


// Write some header meta data
void writeHeader(ofstream &file, const int numEvents, const double crosssection)
{
  // increase precision for floats:
  const streamsize prec0 = file.precision(15);
  
  file << "# BEGIN METADATA\n"
       << "beam=%beam%\n"
       << "process=%process%\n"
       << "energy=%energy%\n"
       << "params=%params%\n"
       << "specific=%specific%\n"
       << "generator=%generator%\n"
       << "version=%version%\n"
       << "tune=%tune%\n"
       << "nevts=" << numEvents << "\n"
       << "seed=%seed%\n"
       << "crosssection=" << crosssection << "\n"
       << "rivet=" << Rivet::version() << "\n"
       << "revision=%revision%\n"
       << "observable=%observable%\n"
       << "cuts=%cuts%\n"
       << "# END METADATA\n\n";
  
  // restore precision
  file.precision(prec0);
}

double binMidPoint(const LWH::IAxis& axis, const int i)
{
  return 0.5 * (axis.binLowerEdge(i) + axis.binUpperEdge(i));
}

// Write Histogram1D to file
void writeHisto(ofstream& file, const LWH::Histogram1D* histo, const string hpath)
{
  const LWH::IAxis& axis = histo->axis();
  const int nBins = axis.bins();
  
  file << "# BEGIN HISTOGRAM " << hpath << "\n"
       << "AidaPath=" << hpath << "\n";
  
  for (int i = 0; i < nBins; ++i) {
    file << axis.binLowerEdge(i) << "\t"
         << binMidPoint(axis, i) << "\t"
         << axis.binUpperEdge(i) << "\t"
         << histo->binHeight(i)/axis.binWidth(i) << "\t"
         << histo->binError(i)/axis.binWidth(i) << "\t"
         << histo->binError(i)/axis.binWidth(i) << "\n";
  }
  file << "# END HISTOGRAM\n\n";
  
  // increase precision for floats:
  const streamsize prec0 = file.precision(15);
  
  // Also write the Histogram1D distributions so that we can add weigthed things afterwards
  file << "# BEGIN HISTOSTATS " << hpath << "\n"
       << "AidaPath=" << hpath << "\n";
  
  for (int i = 0; i < nBins; ++i) {
    file << axis.binLowerEdge(i) << "\t"
         << binMidPoint(axis, i) << "\t"
         << axis.binUpperEdge(i) << "\t"
         << histo->binEntries(i) << "\t"
         << histo->getSumW(i)    << "\t"
         << histo->getSumW2(i)   << "\t"
         << histo->getSumXW(i)   << "\t"
         << histo->getSumX2W(i) << "\n";
  }
  file << "# END HISTOSTATS\n\n";
  
  // restore precision
  file.precision(prec0);
}

// Write a Profile1D object to file
void writeProfile(ofstream &file, const LWH::Profile1D* prof, const string hpath)
{
  const LWH::IAxis& axis = prof->axis();
  const int nBins = axis.bins();
  
  file << "# BEGIN HISTOGRAM " << hpath << "\n"
       << "AidaPath=" << hpath << "\n";
  
  for (int i = 0; i < nBins; ++i) {
    file << axis.binLowerEdge(i) << "\t"
         << binMidPoint(axis, i) << "\t"
         << axis.binUpperEdge(i) << "\t"
         << prof->binHeight(i) << "\t"
         << prof->binError(i) << "\t"
         << prof->binError(i) << "\n";
  }
  file << "# END HISTOGRAM\n\n";
  
  // increase precision for floats:
  const streamsize prec0 = file.precision(15);
  
  file << "# BEGIN PROFILESTATS " << hpath << "\n"
       << "AidaPath=" << hpath << "\n";
  
  for (int i = 0; i < nBins; ++i) {
    file << axis.binLowerEdge(i) << "\t"
         << binMidPoint(axis, i) << "\t"
         << axis.binUpperEdge(i) << "\t"
         << prof->binEntries(i) << "\t"
         << prof->getSumW(i)    << "\t"
         << prof->getSumW2(i)   << "\t"
         << prof->getSumXW(i)   << "\t"
         << prof->getSumX2W(i)  << "\t"
         << prof->getSumYW(i)   << "\t"
         << prof->getSumY2W(i)  << "\t"
         << prof->getSumY2W2(i) << "\n";
  }
  file << "# END PROFILESTATS\n\n";
  
  // restore precision
  file.precision(prec0);
}

// Write DataPointSet to file
void writeDPS(ofstream& file, const LWH::DataPointSet* dps, const string hpath)
{
  file << "# BEGIN HISTOGRAM " << hpath << "\n"
       << "AidaPath=" << hpath << "\n";
  
  for (int i = 0; i < dps->size(); ++i) {
    const LWH::IDataPoint* p = dps->point(i);
    const LWH::IMeasurement* x = p->coordinate(0);
    const LWH::IMeasurement* y = p->coordinate(1);
    
    file << (x->value() - x->errorMinus()) << "\t"
         << x->value() << "\t"
         << (x->value() + x->errorPlus()) << "\t"
         << y->value() << "\t"
         << y->errorMinus() << "\t"
         << y->errorPlus() << "\n";
  }
  file << "# END HISTOGRAM\n\n";
}

// A small function that calls either writeHisto or writeProfile, depending on the observable
bool writeFinal(ofstream& file, LWH::IManagedObject* obj, const string hpath)
{
  const LWH::Profile1D* prof = dynamic_cast<LWH::Profile1D*>(obj);
  if (prof) {
    writeProfile(file, prof, hpath);
    return true;
  }
  
  const LWH::Histogram1D* histo = dynamic_cast<LWH::Histogram1D*>(obj);
  if (histo) {
    writeHisto(file, histo, hpath);
    return true;
  }
  
  const LWH::DataPointSet* dps = dynamic_cast<LWH::DataPointSet*>(obj);
  if (dps) {
    writeDPS(file, dps, hpath);
    return true;
  }
  
  cout << "Could not write histogram/profile for " << hpath << endl;
  return false;
}

bool dumpTree(LWH::Tree& tree, const int numEvents, const double crossSection)
{
  const vector<string> histos = tree.listObjectNames("/", true); // args set recursive listing
  
  // write out histograms
  foreach (const string& i, histos) {
    const string fname = getOutputFilename(i);
    //cout << fname << endl;
    ofstream file(fname.c_str());
    
    if (!file) {
      cout << "Failed to open output file: " << fname << endl;
      return 1;
    }
    
    writeHeader(file, numEvents, crossSection);
    writeFinal(file, tree.find(i), i);
  }
}

bool dumpSnapshot(const string& root, const ObjectsMap& om, const int numEvents, const double crossSection)
{
  for (ObjectsMap::const_iterator i = om.begin(); i != om.end(); ++i) {
    const string fname = getOutputFilename(i->first);
    //cout << fname << endl;
    ofstream file((root + "/" + fname).c_str());
    
    if (!file) {
      cout << "Failed to open output file: " << fname << endl;
      return 1;
    }
    
    writeHeader(file, numEvents, crossSection);
    writeFinal(file, i->second, i->first);
  }
}


#endif
