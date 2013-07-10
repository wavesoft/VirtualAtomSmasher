// -*- C++ -*-
#include "Rivet/Analysis.hh"
#include "Rivet/RivetAIDA.hh"
#include "Rivet/Tools/Logging.hh"
#include "Rivet/Projections/FinalState.hh"

namespace Rivet {


  class TOTEM_2011_I930960 : public Analysis {
  public:

    TOTEM_2011_I930960()
      : Analysis("TOTEM_2011_I930960")
    {    }

  public:

    void init() {

      addProjection(FinalState(),"FS");

      _hist_sigma = bookHistogram1D(1, 1, 1);
	
    }

    void analyze(const Event& event) {

      const double weight = event.weight();

      const FinalState& fs = applyProjection<FinalState>(event, "FS");
      if (fs.empty()) {
        MSG_DEBUG("Empty event!"); 
        vetoEvent;
      }

    _hist_sigma->fill(7000/GeV, weight);

    }

    void finalize() {

      scale(_hist_sigma, crossSection()/millibarn/sumOfWeights());

    }

  private:

    AIDA::IHistogram1D *_hist_sigma;

  };


  DECLARE_RIVET_PLUGIN(TOTEM_2011_I930960);

}
