#include <iostream>
#include <fstream>
#include <sstream>
#include <map>
#include <set>
#include <vector>
#include <cmath>
using namespace std;

typedef map<string, string> PropMap;
typedef map<string, PropMap> SectionMap;

// supported merge modes
enum MergeMode {DEFAULT = 0, ALPGEN_XSECT, ALPGEN_FIXED, MergeMode_SIZE}; 

// bin definition of histogram or profile
struct Bin {
  double xlow;
  double xfocus;
  double xhigh;
  double Entries;
  double SumW;
  double SumW2;
  double SumXW;
  double SumX2W;
  
  // additional fields for profile
  bool isProfile;
  double SumYW;
  double SumY2W;
  double SumY2W2;

  void clear()
  {
    Entries = 0;
    SumW    = 0;
    SumW2   = 0;
    SumXW   = 0;
    SumX2W  = 0;
    SumYW   = 0;
    SumY2W  = 0;
    SumY2W2 = 0;
  }
  
  // same edges check
  bool sameEdges(const Bin& b) const
  {
    return ((fabs(b.xlow   - xlow)   < 1e-10) &&
            (fabs(b.xfocus - xfocus) < 1e-10) &&
            (fabs(b.xhigh  - xhigh)  < 1e-10));
  }
  
  // bin width
  double width() const { return (xhigh - xlow); }
  
  double height() const
  {
    // this is histogram bin (also take bin width into account):
    if (!isProfile) return SumW/width();
    
    // this is profile bin:
    // (extracted form rivet\include\LWH\Profile1D.h)
    return (SumW != 0.) ? SumYW/SumW : 0.;
  }
  
  // bin error
  double error() const
  {
    // this is histogram bin (also take bin width into account):
    if (!isProfile) return sqrt(SumW2)/width();
    
    // this is profile bin:
    // (extracted form rivet\include\LWH\Profile1D.h)
    if (SumW > 0) {
      const double n_eff = SumW*SumW / SumW2;
      if (n_eff <= 1.0) {
        return SumYW/n_eff;
      }
      
      const double denom = SumW*SumW - SumW2;
      const double numer = SumY2W*SumW - SumYW*SumYW;
      const double variance = numer/denom;
      /// @todo Is this biasing again? I.e. do we actually need a 1 / (n_eff - 1)?
      const double std_var = variance / n_eff;
      if (std_var > 0.0) {
        const double std_err = sqrt(std_var);
        return std_err;
      }
    }
    return 0.;
  }
};

struct Hist {
  SectionMap sect;
  vector<string> orig;
  vector<Bin> bins;
  string type; // "HISTOSTATS", "PROFILESTATS", "DPS", "" (failed to read histogram)
  
  // true if histogram has been read successfully
  operator bool() const {return (type != "");}
  
  // check presence of [section]
  bool haveSection(const string& section) const
  {
    return (sect.find(section) != sect.end());
  }
  
  // helper function to extract properties from sections
  string field(const string& section, const string& property) const
  {
    const PropMap& pm = sect.find(section)->second;
    const string field = pm.find(property)->second;
    
    return field;
  }
  
  // set bin values to 0
  void clear()
  {
    for (size_t i = 0; i < bins.size(); ++i)
      bins[i].clear();
  }
  
  bool isDPS() const { return (type == "DPS"); }
  
  double totalEntries() const
  {
    double N = 0.;
    for (size_t i = 0; i < bins.size(); ++i) {
      N += bins[i].Entries;    
    }
    
    return N;
  }
};


Hist readFile(const char* fname)
{
  //cout << "readFile: " << fname << endl;
  
  ifstream f(fname);
  string line, section;
  Hist hist;
  
  // read file line by line
  while (getline(f, line)) {
    // new section
    if (line.find("# BEGIN") == 0) {
      istringstream iss(line.substr(7));
      string name;
      iss >> section >> name;
      
      PropMap pm;
      pm[""] = name;
      hist.sect[section] = pm;
      
      continue;
    }
    
    // end section
    if (line.find("# END") == 0) {
      section = "";
      continue;
    }
    
    // section properties
    const size_t eqpos = line.find("=");
    if ((section != "") && (eqpos != string::npos)) {
      // if where is '=' sign in line, this is a property string: key=value
      const string key = line.substr(0, eqpos);
      const string value = line.substr(eqpos + 1);
      hist.sect[section][key] = value;
      continue;
    }
    
    if (section == "HISTOGRAM") {
      hist.orig.push_back(line);
      continue;
    }
    
    if (section == "HISTOSTATS" || section == "PROFILESTATS") {
      // this is bin content
      istringstream iss(line);
      Bin bin;
      
      if (section == "HISTOSTATS") {
        iss >> bin.xlow >> bin.xfocus >> bin.xhigh
            >> bin.Entries >> bin.SumW >> bin.SumW2
            >> bin.SumXW >> bin.SumX2W;
        bin.SumYW = bin.SumY2W = bin.SumY2W2 = 0.;
        bin.isProfile = false;
      }
      else {
        iss >> bin.xlow >> bin.xfocus >> bin.xhigh
            >> bin.Entries >> bin.SumW >> bin.SumW2
            >> bin.SumXW >> bin.SumX2W
            >> bin.SumYW >> bin.SumY2W >> bin.SumY2W2;
        bin.isProfile = true;
      }
      
      hist.bins.push_back(bin);
      
      if (!iss) {
        cerr << "ERROR: corrupted bin content\n"
             << "       file: " << fname << "\n"
             << "       bin: " << line << "\n"
             << endl;
        
        return Hist();
      }
      
      continue;
    }
  }
  
  // determine type of histogram
  if (hist.haveSection("HISTOSTATS"))
    hist.type = "HISTOSTATS";
  else if (hist.haveSection("PROFILESTATS"))
    hist.type = "PROFILESTATS";
  else if (hist.haveSection("HISTOGRAM"))
    hist.type = "DPS";
  
  return hist;
}


void printHist(const Hist& hist)
{
  cout << "Type = " << hist.type << "\n";
  
  for (SectionMap::const_iterator i = hist.sect.begin(); i != hist.sect.end(); ++i) {
    const string& section = i->first;
    const PropMap& pm = i->second;
    
    cout << "[" << section << "]\n";
    
    for (PropMap::const_iterator j = pm.begin(); j != pm.end(); ++j)
      cout << j->first << " = " << j->second << "\n";
    
    if (section == "HISTOSTATS" || section == "PROFILESTATS") {
      for (size_t j = 0; j < hist.bins.size(); ++j) {
        const Bin& bin = hist.bins[j];
        cout << bin.xlow << "\t" << bin.xfocus << "\t" << bin.xhigh << "\t"
             << bin.Entries << "\t" << bin.SumW << "\t" << bin.SumW2 << "\t"
             << bin.SumXW << "\t" << bin.SumX2W << "\t"
             << bin.SumYW << "\t" << bin.SumY2W << "\t" << bin.SumY2W2
             << "\n";
      }
    }
    
    cout << "\n";
  }
}


bool isDublicates(const string& line)
{
  set<string> elems;
  string word;
  istringstream iss(line);
  
  while (iss >> word)
    if (! elems.insert(word).second)
      return true;
  
  return false;
}


bool isCompatible(const Hist& h1, const Hist& h2, const MergeMode mode)
{
  // check histograms have been read successfully
  if (! (h1 && h2)) return false;
  
  // check type:
  if (h1.type != h2.type) return false;
  
  // check number of bins:
  if (h1.bins.size() != h2.bins.size()) return false;
  
  // check bins edges:
  for (size_t i = 0; i < h1.bins.size(); ++i)
    if (! h1.bins[i].sameEdges(h2.bins[i]))
      return false;
  
  // check PLOT section:
  size_t nplot = h1.sect.count("PLOT") + h2.sect.count("PLOT");
  // nplot could be:
  //  0 - no PLOT section in both histograms, this is fine, just skip comparions of PLOT sections
  //  1 - PLOT section exists only in one of histograms, histograms are not compatible
  //  2 - both histograms have PLOT sections, compare them
  
  if (nplot == 1) return false;
  
  if (nplot > 1)
    if (*h1.sect.find("PLOT") != *h2.sect.find("PLOT"))
      return false;
  
  // check HISTOSTATS/PROFILESTATS section:
  if (! h1.isDPS())
    if (*h1.sect.find(h1.type) != *h2.sect.find(h2.type))
      return false;
  
  const bool isAlpgenMerge = ((mode == ALPGEN_XSECT) || (mode == ALPGEN_FIXED));
  
  // check METADATA section:
  // all parameters should be the same except of "nevts", "seed", "crosssection":
  PropMap meta1 = h1.sect.find("METADATA")->second;
  const string seed1 = meta1.find("seed")->second;
  meta1.erase("nevts");
  meta1.erase("seed");
  meta1.erase("crosssection");
  if (isAlpgenMerge) meta1.erase("specific");
  
  PropMap meta2 = h2.sect.find("METADATA")->second;
  const string seed2 = meta2.find("seed")->second;
  meta2.erase("nevts");
  meta2.erase("seed");
  meta2.erase("crosssection");
  if (isAlpgenMerge) meta2.erase("specific");
  
  if (meta1 != meta2) return false;
  
  // seeds should be different (no intersection):
  if (! isAlpgenMerge)
    if (! h1.isDPS())
      if (isDublicates(seed1 + " " + seed2))
        return false;
  
  return true;
}

typedef vector<Hist> Histograms;

struct Summ {
  MergeMode mode;
  Histograms src_hists;
  Hist dst_hist;
};

bool checkSumm(const Summ& summ)
{
  if (summ.mode >= MergeMode_SIZE) {
    cerr << "ERROR: invalid merge mode" << endl;
    return false;
  }
  
  const size_t nsrc = summ.src_hists.size();
  
  if (nsrc == 0) return false;
  
  for (size_t i = 1; i < nsrc; ++i)
    if (! isCompatible(summ.src_hists[0], summ.src_hists[i], summ.mode))
      return false;
  
  // check all seeds are uniq in case of non-alpgen merge mode
  const bool isAlpgenMerge = ((summ.mode == ALPGEN_XSECT) || (summ.mode == ALPGEN_FIXED));
  if ((! isAlpgenMerge) && (nsrc > 2)) {
    if (! summ.src_hists[0].isDPS()) {
      string seeds;
      for (size_t i = 0; i < nsrc; ++i)
        seeds += (" " + summ.src_hists[i].field("METADATA", "seed"));
      
      if (isDublicates(seeds)) return false;
    }
  }
  
  // check all 'specific' fields are uniq in case of alpgen merge modes
  if (isAlpgenMerge) {
    string specifics;
    for (size_t i = 0; i < nsrc; ++i)
      specifics += (" " + summ.src_hists[i].field("METADATA", "specific"));
    
    if (isDublicates(specifics)) return false;
  }
  
  return true;
}


// convert string to value
template<typename T>
T toValue(const string& s)
{
  istringstream iss(s);
  T x;
  iss >> x;
  return x;
}

// convert value to string
template<typename T>
std::string toString(const T x)
{
  std::ostringstream ss;
  ss << x;
  return ss.str();
}

void summHist(Summ& summ)
{
  /// evaluate weights (w) and summ histograms: 
  /// dst_hist = sum_i w_i*(src_hists)_i
  
  // use 1st src_hist as dst_hist template
  summ.dst_hist = summ.src_hists[0];
  summ.dst_hist.clear();
  
  // for weights
  vector<double> weight_vec;
  vector<int> nevts_vec;
  vector<double> ffill_vec;
  vector<double> xs_vec;
  
  // for metadata
  string seed;
  // separator for merge mode dependent fields
  const string sep = (summ.mode == DEFAULT) ? " " : ":" ;
  // subsample data strings (used for Alpgen)
  string subs_nevts, subs_nfill, subs_crosssection, subs_specific, subs_weights;
  
  // for summing histograms
  int nevts = 0;
  double xs = 0.;
  
  // collect METADATA for weights and summed histo METADATA
  for (size_t j = 0; j < summ.src_hists.size(); ++j) {
    const Hist& h = summ.src_hists[j];
    
    const string nevts_s = h.field("METADATA", "nevts");
    nevts_vec.push_back(toValue<int>(nevts_s));
    nevts += nevts_vec[j];
    subs_nevts += (j == 0) ? nevts_s : (sep + nevts_s);
    
    const double nfill = h.totalEntries();
    
    // TODO: think about the case of empty histograms: nevts_vec[j] == 0,
    //       in principle such histograms should be skipped
    
    // number of histogram fills per event
    const double ffill = nfill/nevts_vec[j];
    
    ffill_vec.push_back(ffill);
    subs_nfill += (j == 0) ? toString(nfill) : (sep + toString(nfill));
    
    // cross-section value of the sample used for the histogram
    string x_s = h.field("METADATA", "crosssection");
    xs_vec.push_back(toValue<double>(x_s));
    subs_crosssection += (j == 0) ? x_s : (sep + x_s);
    
    subs_specific += (j == 0) ? h.field("METADATA", "specific") : \
      ( sep + h.field("METADATA", "specific") );
    
    seed += (j == 0) ? h.field("METADATA", "seed") : \
      ( sep + h.field("METADATA", "seed") );
  }
  
  double weight_norm = 1;
  
  // set normalization constant for sum_i w_i 
  if (summ.mode == ALPGEN_XSECT) {
    // for Alpgen NpX samples with normalization propto xsection no weight normalization is needed:
    weight_norm = 1;
  }
  else if (summ.mode == ALPGEN_FIXED) {
    // for Alpgen NpX samples with normalization to fixed area or bin value:
    weight_norm = 0;
    for (size_t i = 0; i < ffill_vec.size(); i++)
      weight_norm += ffill_vec[i] * xs_vec[i];
  }
  else {
    // for adding histograms for statistics increase:
    weight_norm = nevts;
  }
  
  // TODO: weight_norm == 0 ?
  
  // evaluate weights and total cross-section
  for (int j = 0; j < summ.src_hists.size(); ++j) {
    if (summ.mode == ALPGEN_XSECT) {
      weight_vec.push_back(1.);
      xs += xs_vec[j];
    }
    else if (summ.mode == ALPGEN_FIXED) {
      weight_vec.push_back(xs_vec[j] * ffill_vec[j] / weight_norm); 
      xs += xs_vec[j];
    }
    else {
      weight_vec.push_back(nevts_vec[j] / weight_norm);
      xs += weight_vec[j] * xs_vec[j];
    }
    
    subs_weights += (j == 0) ? toString(weight_vec[j]) : (sep + toString(weight_vec[j]));
  }
  
  // summ histograms
  for (size_t i = 0; i < summ.dst_hist.bins.size(); ++i) {
    Bin& b = summ.dst_hist.bins[i];
    
    for (size_t j = 0; j < summ.src_hists.size(); ++j) {
      const Bin& bj = summ.src_hists[j].bins[i];
      const double w = weight_vec[j];
      
      // histograms and profiles:
      b.Entries +=     bj.Entries;
      b.SumW    +=   w*bj.SumW;
      b.SumW2   += w*w*bj.SumW2;
      b.SumXW   +=   w*bj.SumXW;
      b.SumX2W  +=   w*bj.SumX2W;
      
      // profiles:
      b.SumYW   +=   w*bj.SumYW;
      b.SumY2W  +=   w*bj.SumY2W;
      b.SumY2W2 += w*w*bj.SumY2W2;
    }
  }
  
  // fill metadata
  // filled for all histograms:
  summ.dst_hist.sect["METADATA"]["seed"] = seed; 
  summ.dst_hist.sect["METADATA"]["nevts"] = toString(nevts);
  summ.dst_hist.sect["METADATA"]["crosssection"] = toString(xs);
  
  // extra metadata for merging modes other than default:
  if ((summ.mode == ALPGEN_XSECT) || (summ.mode == ALPGEN_FIXED)) {
    // add flag which indicate the histogram is a combination of various npX samples,
    // this is neccessary to aid/simplify further manipulation of the histogram
    summ.dst_hist.sect["METADATA"]["blend"] = "1";
    
    // add additional fields with subsamples composition
    summ.dst_hist.sect["METADATA"]["samples_nevts"] = subs_nevts;
    summ.dst_hist.sect["METADATA"]["samples_nfill"] = subs_nfill;   
    summ.dst_hist.sect["METADATA"]["samples_crosssection"] = subs_crosssection;
    summ.dst_hist.sect["METADATA"]["samples_weights"] = subs_weights;
    summ.dst_hist.sect["METADATA"]["specific"] = subs_specific;
  }
}


void writeFile(const char* fname, const Hist& hist)
{
  //cout << "writeFile: " << fname << endl;
  
  ofstream f(fname);
  
  for (SectionMap::const_iterator i = hist.sect.begin(); i != hist.sect.end(); ++i) {
    const string& section = i->first;
    const PropMap& pm = i->second;
    
    // begin section
    const string sect_val = (pm.find("") != pm.end()) ? (pm.find("")->second) : "";
    f << "# BEGIN " << section << " " << sect_val << "\n";
    
    // print properties
    for (PropMap::const_iterator j = pm.begin(); j != pm.end(); ++j)
      if (j->first != "")
        f << j->first << "=" << j->second << "\n";
    
    // print bins
    if (section == "HISTOGRAM") {
      if ((hist.type == "HISTOSTATS") || (hist.type == "PROFILESTATS")) {
        // re-compute content of "HISTOGRAM" section
        for (size_t j = 0; j < hist.bins.size(); ++j) {
          const Bin& bin = hist.bins[j];
          f << bin.xlow << "\t"
            << (bin.xlow + bin.xhigh)/2 << "\t"
            << bin.xhigh << "\t"
            << bin.height() << "\t"
            << bin.error() << "\t"
            << bin.error() << "\n";
        }
      }
      else {
        // this is DPS:
        // there is no additional statistical information,
        // just copy original data of "HISTOGRAM" section
        for (size_t j = 0; j < hist.orig.size(); ++j) {
          f << hist.orig[j] << "\n";
        }
      }
    }
    
    // increase precision for floats:
    const streamsize prec0 = f.precision(15);
  
    if (section == "HISTOSTATS") {
      for (size_t j = 0; j < hist.bins.size(); ++j) {
        const Bin& bin = hist.bins[j];
        f << bin.xlow << "\t" << bin.xfocus << "\t" << bin.xhigh << "\t"
          << bin.Entries << "\t" << bin.SumW << "\t" << bin.SumW2 << "\t"
          << bin.SumXW << "\t" << bin.SumX2W << "\n";
      }
    }
    
    if (section == "PROFILESTATS") {
      for (size_t j = 0; j < hist.bins.size(); ++j) {
        const Bin& bin = hist.bins[j];
        f << bin.xlow << "\t" << bin.xfocus << "\t" << bin.xhigh << "\t"
          << bin.Entries << "\t" << bin.SumW << "\t" << bin.SumW2 << "\t"
          << bin.SumXW << "\t" << bin.SumX2W << "\t"
          << bin.SumYW << "\t" << bin.SumY2W << "\t" << bin.SumY2W2 << "\n";
      }
    }
    
    // restore precision
    f.precision(prec0);
    
    // end section
    f << "# END " << section << "\n\n";
  }
}


int main(int argc, char* argv[])
{
  // Arguments:
  // 1st            = merge mode,
  // 2nd - pre-last = src_hists,
  // last           = output file name
  
  if (argc < 5) {
    cerr << "Usage:\n"
         << "  ./merge.exe [merge mode] [src_hist_1] ... [src_hist_n] [dst_hist]\n"
         << "\n"
         << "  merge [src_hist_1] ... [src_hist_n] and write output to [dst_hist]\n"
         << "\n"
         << "  [merge mode] can be either of:\n"
         << "    " << DEFAULT      << ": histograms with contents equivalent within stats\n"
         << "    " << ALPGEN_XSECT << ": (Alpgen) histograms normalized to xsection\n"
         << "    " << ALPGEN_FIXED << ": (Alpgen) histograms with const. area or bin content"
         << endl;
    
    return 1;
  }
  
  const MergeMode mode = static_cast<MergeMode>(toValue<int>(argv[1]));
  const char* fdst = argv[argc - 1];
  
  // print parameters:
  //cout << "Mergemode = " << mode << "\n"
  //     << "Source files = ";
  //for (int i = 2; i < (argc - 1); ++i) cout << argv[i] << " ";
  //cout << "\n"
  //     << "Output file = " << fdst << endl;
  
  Summ summ;
  summ.mode = mode;
  
  for (int i = 2; i < (argc - 1); ++i) {
    const Hist hist = readFile(argv[i]);
    
    if (! hist) {
      cerr << "ERROR: failed to read input histogram: " << argv[i] << endl;
      return 1;
    }
    
    summ.src_hists.push_back(hist);
  }
  
  // check if histograms are compatible according to merge mode
  if (! checkSumm(summ)) {
    cerr << "ERROR: input histograms are not compatible" << endl;
    return 1;
  }
  
  if (summ.src_hists[0].isDPS()) {
    // several DPS, pick the one with higher statistics
    
    if (mode != DEFAULT) {
      cerr << "ERROR: merging of DPS is mot supported in merge mode " << mode << endl;
      return 1;
    }
    
    int max = 0;
    size_t ind = 0;
    
    for (size_t i = 0; i < summ.src_hists.size(); ++i) {
      const int n = toValue<int>(summ.src_hists[i].field("METADATA", "nevts"));
      
      if (n > max) {
        max = n;
        ind = i;
      }
    }
    
    writeFile(fdst, summ.src_hists[ind]);
  }
  else {
    // calc summ
    summHist(summ);
    writeFile(fdst, summ.dst_hist);
  }
  
  return 0;
}
