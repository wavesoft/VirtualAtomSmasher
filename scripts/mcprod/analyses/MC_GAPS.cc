// -*- C++ -*-
#include "Rivet/Analysis.hh"
#include "Rivet/RivetAIDA.hh"
#include "Rivet/Tools/Logging.hh"
#include "Rivet/Projections/ChargedFinalState.hh"
#include "Rivet/Projections/FinalState.hh"

namespace Rivet {

  // @author: Sercan Sen<Sercan.Sen@cern.ch>
  // Gap size calculation, fwd, bwd, central for all final states and in detector limits 
  class MC_GAPS : public Analysis {
  public:

    MC_GAPS()
      : Analysis("MC_GAPS"), detEvents(0.0), edge(5.2)
    {  }

  public:

    void init() {

      addProjection(FinalState(-MAXRAPIDITY, MAXRAPIDITY, 0.2*GeV), "FS");

      _h_fs_fmax   = bookHistogram1D("fs-fmax", 100, 0, 20.0);
      _h_fs_cmax   = bookHistogram1D("fs-cmax", 100, 0, 20.0);
      _h_fs_gapmax = bookHistogram1D("fs-gapmax", 100, 0, 20.0);
      _h_fs_fmin   = bookHistogram1D("fs-fmin", 100, 0, 20.0);
      _h_fs_minfmaxc = bookHistogram1D("fs-minfmaxc", 100, 0, 20.0);

      _h_detfs_fmax   = bookHistogram1D("detfs-fmax", edge*10., 0, edge*2.);
      _h_detfs_cmax   = bookHistogram1D("detfs-cmax", edge*10., 0, edge*2.);
      _h_detfs_gapmax = bookHistogram1D("detfs-gapmax", edge*10., 0, edge*2.);
      _h_detfs_fmin   = bookHistogram1D("detfs-fmin", edge*10., 0, edge*2.);
      _h_detfs_minfmaxc = bookHistogram1D("detfs-minfmaxc", edge*10., 0, edge*2.);
      _h_detfs_eta    = bookHistogram1D("detfs-eta", edge*10., -edge, edge);
      _h_detfs_eflow  = bookHistogram1D("detfs-eflow", edge*10., -edge, edge);
      _h_detfs_etflow = bookHistogram1D("detfs-etflow", edge*10., -edge, edge);
    }

    void analyze(const Event& event) {

      const double weight = event.weight();

      const FinalState& fs = applyProjection<FinalState>(event, "FS");

      // Calculate gap sizes by using all final state particles
      if (fs.size() > 2) { // need at least two particles to calculate gaps
        const ParticleVector particlesByEta = fs.particlesByEta(); // sorted from minus to plus
        const size_t num_particles = particlesByEta.size();

        vector<double> gaps;
        for (size_t ip = 1; ip < num_particles; ++ip) {
          const Particle& p1 = particlesByEta[ip-1];
          const Particle& p2 = particlesByEta[ip];
          const double gap = p2.momentum().eta() - p1.momentum().eta();
          assert(gap >= 0);
          gaps.push_back(gap);
        }

        const double gapmax = *max_element(gaps.begin(), gaps.end());
        const double gapbwd = gaps.front();
        const double gapfwd = gaps.back();
        const double gapcenter = *max_element(gaps.begin()+1, gaps.end()-1);
        const double fmax = max(gapbwd, gapfwd);
        const double fmin = min(gapbwd, gapfwd);
        const double minFmaxCenter = min(fmax, gapcenter);

        _h_fs_fmax->fill(fmax, weight);
        _h_fs_cmax->fill(gapcenter, weight);
        _h_fs_gapmax->fill(gapmax, weight);
        _h_fs_fmin->fill(fmin, weight);
        _h_fs_minfmaxc->fill(minFmaxCenter, weight);

      } else { 
        //MSG_WARNING("Final state is empty or have only single particle");
      }

      // Calculate gap sizes by using final state particles in Detector limits
      vector<double> detparticles;
      detparticles.push_back(-edge); // minus edge of the detector, needed for bwd gap
      foreach (const Particle& p, fs.particlesByEta()) {
        if (fabs(p.momentum().eta()) < edge && p.momentum().pT() > 0.2*GeV) {
           double eta = p.momentum().eta();

           _h_detfs_eta->fill(eta, weight);
           _h_detfs_eflow->fill(eta, p.momentum().E()*weight);
           _h_detfs_etflow->fill(eta, p.momentum().Et()*weight);

           detparticles.push_back(eta);
        }
      }
      detparticles.push_back(edge); // plus edge of the detector, needed for fwd gap
   
      if (detparticles.size() < 3) vetoEvent; // require at least one particle in the in detector limtis

      detEvents += weight;

      vector <double>::iterator iter;
      vector<double> detgaps;
      for (iter = detparticles.begin()+1; iter != detparticles.end(); ++iter) { 
        const double detgap = *iter - *(iter-1);
        detgaps.push_back(detgap);
      }

      const double detgapmax = *max_element(detgaps.begin(), detgaps.end());
      const double detgapbwd = detgaps.front();
      const double detgapfwd = detgaps.back();
      const double detfmax = max(detgapbwd, detgapfwd);
      const double detfmin = min(detgapbwd, detgapfwd);

      _h_detfs_fmax->fill(detfmax, weight);
      _h_detfs_gapmax->fill(detgapmax, weight);
      _h_detfs_fmin->fill(detfmin, weight);

      if (detgaps.size() > 2) { // if there is a central gap 
        const double detgapcenter = *max_element(detgaps.begin()+1, detgaps.end()-1);
        double detminFmaxCenter = min(detfmax, detgapcenter); 
        _h_detfs_cmax->fill(detgapcenter, weight);
        _h_detfs_minfmaxc->fill(detminFmaxCenter, weight);
      }

    }

    void finalize() {

       scale(_h_fs_fmax, crossSection()/millibarn/sumOfWeights());
       scale(_h_fs_cmax, crossSection()/millibarn/sumOfWeights());
       scale(_h_fs_gapmax, crossSection()/millibarn/sumOfWeights());
       scale(_h_fs_fmin, crossSection()/millibarn/sumOfWeights());
       scale(_h_fs_minfmaxc, crossSection()/millibarn/sumOfWeights());

       scale(_h_detfs_fmax, crossSection()/millibarn/sumOfWeights());
       scale(_h_detfs_cmax, crossSection()/millibarn/sumOfWeights());
       scale(_h_detfs_gapmax, crossSection()/millibarn/sumOfWeights());
       scale(_h_detfs_fmin, crossSection()/millibarn/sumOfWeights());
       scale(_h_detfs_minfmaxc, crossSection()/millibarn/sumOfWeights());

       scale(_h_detfs_eta, 1./detEvents);
       scale(_h_detfs_eflow, 1./detEvents);
       scale(_h_detfs_etflow, 1./detEvents);

    }

  private:

    AIDA::IHistogram1D *_h_fs_fmax;
    AIDA::IHistogram1D *_h_fs_cmax;
    AIDA::IHistogram1D *_h_fs_gapmax;
    AIDA::IHistogram1D *_h_fs_fmin;
    AIDA::IHistogram1D *_h_fs_minfmaxc;
    AIDA::IHistogram1D *_h_detfs_fmax;
    AIDA::IHistogram1D *_h_detfs_cmax;
    AIDA::IHistogram1D *_h_detfs_gapmax;
    AIDA::IHistogram1D *_h_detfs_fmin;
    AIDA::IHistogram1D *_h_detfs_minfmaxc;
    AIDA::IHistogram1D *_h_detfs_eta;
    AIDA::IHistogram1D *_h_detfs_eflow;
    AIDA::IHistogram1D *_h_detfs_etflow;

    double detEvents;
    const double edge;

  };


  DECLARE_RIVET_PLUGIN(MC_GAPS);

}
