// -*- C++ -*-
#include "Rivet/Analysis.hh"
#include "Rivet/RivetAIDA.hh"
#include "Rivet/Tools/Logging.hh"
#include "Rivet/Tools/ParticleIdUtils.hh"
#include "Rivet/Projections/FinalState.hh"
#include "Rivet/Projections/IdentifiedFinalState.hh"
/// @todo Include more projections as required, e.g. ChargedFinalState, FastJets, ZFinder...

namespace Rivet {


  namespace {
    const long TOP=6;
    const long ATOP=-TOP;
  }


  class MC_FBA_TTBAR : public Analysis {
  public:

    /// @name Constructors etc.
    //@{

    /// Constructor
    MC_FBA_TTBAR() : Analysis("MC_FBA_TTBAR") {
      setNeedsCrossSection(true);
    }

    //@}


  public:

    /// @name Analysis methods
    //@{

    /// Book histograms and initialise projections before the run
    void init() {

      /// @todo Initialise and register projections here

      IdentifiedFinalState ifs(-10, 10, 0.0*GeV);
      ifs.acceptId(TOP);
      ifs.acceptId(ATOP);
      addProjection(ifs,"IFS");

      /// @todo Book histograms here, e.g.:
      // _h_XXXX = bookProfile1D(1, 1, 1);
      // _h_YYYY = bookHistogram1D(2, 1, 1);

      _h_ttdy=bookHistogram1D("dyttbar.all",50,-5.0,5.0);
      _h_ttdy_fw=bookHistogram1D("dyttbar.fw",50,-5.0,5.0);
      _h_ttdy_bw=bookHistogram1D("dyttbar.bw",50,-5.0,5.0);

      _h_ttody=bookHistogram1D("moddyttbar.all",20,0.0,4.0);
      _h_ttody_fw=bookHistogram1D("moddyttbar.fw",20,0.0,4.0);
      _h_ttody_bw=bookHistogram1D("moddyttbar.bw",20,0.0,4.0);

      _h_ttdphi=bookHistogram1D("dphittbar.all",40,0.0,M_PI);
      _h_ttdphi_fw=bookHistogram1D("dphittbar.fw",40,0.0,M_PI);
      _h_ttdphi_bw=bookHistogram1D("dphittbar.bw",40,0.0,M_PI);

      _h_ttpt=bookHistogram1D("pTttbar.all",90,0.0,360.0);
      _h_ttpt_fw=bookHistogram1D("pTttbar.fw",90,0.0,360.0);
      _h_ttpt_bw=bookHistogram1D("pTttbar.bw",90,0.0,360.0);

      _h_topt=bookHistogram1D("pTtop.all",80,0.0,480.0);
      _h_topt_fw=bookHistogram1D("pTtop.fw",80,0.0,480.0);
      _h_topt_bw=bookHistogram1D("pTtop.bw",80,0.0,480.0);
      _h_atpt=bookHistogram1D("pTatop.all",80,0.0,480.0);
      _h_atpt_fw=bookHistogram1D("pTatop.fw",80,0.0,480.0);
      _h_atpt_bw=bookHistogram1D("pTatop.bw",80,0.0,480.0);

      _h_tty=bookHistogram1D("yttbar.all",60,-3.0,3.0);
      _h_tty_fw=bookHistogram1D("yttbar.fw",60,-3.0,3.0);
      _h_tty_bw=bookHistogram1D("yttbar.bw",60,-3.0,3.0);

      _h_toy=bookHistogram1D("ytop.all",100,-5.0,5.0);
      _h_toy_fw=bookHistogram1D("ytop.fw",100,-5.0,5.0);
      _h_toy_bw=bookHistogram1D("ytop.bw",100,-5.0,5.0);
      _h_aty=bookHistogram1D("yatop.all",100,-5.0,5.0);
      _h_aty_fw=bookHistogram1D("yatop.fw",100,-5.0,5.0);
      _h_aty_bw=bookHistogram1D("yatop.bw",100,-5.0,5.0);

      _h_ttm=bookHistogram1D("mttbar.all",100,0.0,1000.0);
      _h_ttm_fw=bookHistogram1D("mttbar.fw",100,0.0,1000.0);
      _h_ttm_bw=bookHistogram1D("mttbar.bw",100,0.0,1000.0);

      _h_xsectot=bookDataPointSet("xsectot",1,0,1);
      _h_xseccut=bookHistogram1D("xseccut",17,-0.5,16.5);


      //ttbar mass cut
      _h_ttdy_mttc=bookHistogram1D("dyttbar.mttc.lower",50,-5.0,5.0);
      _h_ttdphi_mttc=bookHistogram1D("lowMtt.dphittbar.all",40,0.0,M_PI);
      _h_ttpt_mttc=bookHistogram1D("lowMtt.pTttbar.all",90,0.0,360.0);
      _h_topt_mttc=bookHistogram1D("lowMtt.pTtop.all",80,0.0,480.0);
      _h_tty_mttc=bookHistogram1D("lowMtt.yttbar.all",60,-3.0,3.0);
      _h_ttdphi_mttc_fw=bookHistogram1D("lowMtt.dphittbar.fw",40,0.0,M_PI);
      _h_ttpt_mttc_fw=bookHistogram1D("lowMtt.pTttbar.fw",90,0.0,360.0);
      _h_topt_mttc_fw=bookHistogram1D("lowMtt.pTtop.fw",80,0.0,480.0);
      _h_tty_mttc_fw=bookHistogram1D("lowMtt.yttbar.fw",60,-3.0,3.0);
      _h_ttdphi_mttc_bw=bookHistogram1D("lowMtt.dphittbar.bw",40,0.0,M_PI);
      _h_ttpt_mttc_bw=bookHistogram1D("lowMtt.pTttbar.bw",90,0.0,360.0);
      _h_topt_mttc_bw=bookHistogram1D("lowMtt.pTtop.bw",80,0.0,480.0);
      _h_tty_mttc_bw=bookHistogram1D("lowMtt.yttbar.bw",60,-3.0,3.0);

      _h_ttdy_Mttc=bookHistogram1D("dyttbar.mttc.upper",50,-5.0,5.0);
      _h_ttdphi_Mttc=bookHistogram1D("highMtt.dphittbar.all",40,0.0,M_PI);
      _h_ttpt_Mttc=bookHistogram1D("highMtt.pTttbar.all",90,0.0,360.0);
      _h_topt_Mttc=bookHistogram1D("highMtt.pTtop.all",80,0.0,480.0);
      _h_tty_Mttc=bookHistogram1D("highMtt.yttbar.all",60,-3.0,3.0);
      _h_ttdphi_Mttc_fw=bookHistogram1D("highMtt.dphittbar.fw",40,0.0,M_PI);
      _h_ttpt_Mttc_fw=bookHistogram1D("highMtt.pTttbar.fw",90,0.0,360.0);
      _h_topt_Mttc_fw=bookHistogram1D("highMtt.pTtop.fw",80,0.0,480.0);
      _h_tty_Mttc_fw=bookHistogram1D("highMtt.yttbar.fw",60,-3.0,3.0);
      _h_ttdphi_Mttc_bw=bookHistogram1D("highMtt.dphittbar.bw",40,0.0,M_PI);
      _h_ttpt_Mttc_bw=bookHistogram1D("highMtt.pTttbar.bw",90,0.0,360.0);
      _h_topt_Mttc_bw=bookHistogram1D("highMtt.pTtop.bw",80,0.0,480.0);
      _h_tty_Mttc_bw=bookHistogram1D("highMtt.yttbar.bw",60,-3.0,3.0);


      //ttbar pt cut to separate Sudakov from hard-PT region
      _h_ttdy_ptc=bookHistogram1D("dyttbar.ptc.lower",50,-5.0,5.0);
      _h_ttdphi_ptc=bookHistogram1D("z.lowPT.dphittbar.all",40,0.0,M_PI);
      _h_ttm_ptc=bookHistogram1D("z.lowPT.mttbar.all",100,0.0,1000.0);
      _h_topt_ptc=bookHistogram1D("z.lowPT.pTtop.all",80,0.0,480.0);
      _h_tty_ptc=bookHistogram1D("z.lowPT.yttbar.all",60,-3.0,3.0);
      _h_ttdphi_ptc_fw=bookHistogram1D("z.lowPT.dphittbar.fw",40,0.0,M_PI);
      _h_ttm_ptc_fw=bookHistogram1D("z.lowPT.mttbar.fw",100,0.0,1000.0);
      _h_topt_ptc_fw=bookHistogram1D("z.lowPT.pTtop.fw",80,0.0,480.0);
      _h_tty_ptc_fw=bookHistogram1D("z.lowPT.yttbar.fw",60,-3.0,3.0);
      _h_ttdphi_ptc_bw=bookHistogram1D("z.lowPT.dphittbar.bw",40,0.0,M_PI);
      _h_ttm_ptc_bw=bookHistogram1D("z.lowPT.mttbar.bw",100,0.0,1000.0);
      _h_topt_ptc_bw=bookHistogram1D("z.lowPT.pTtop.bw",80,0.0,480.0);
      _h_tty_ptc_bw=bookHistogram1D("z.lowPT.yttbar.bw",60,-3.0,3.0);

      _h_ttdy_Ptc=bookHistogram1D("dyttbar.ptc.upper",50,-5.0,5.0);
      _h_ttdphi_Ptc=bookHistogram1D("z.highPT.dphittbar.all",40,0.0,M_PI);
      _h_ttm_Ptc=bookHistogram1D("z.highPT.mttbar.all",100,0.0,1000.0);
      _h_topt_Ptc=bookHistogram1D("z.highPT.pTtop.all",80,0.0,480.0);
      _h_tty_Ptc=bookHistogram1D("z.highPT.yttbar.all",60,-3.0,3.0);
      _h_ttdphi_Ptc_fw=bookHistogram1D("z.highPT.dphittbar.fw",40,0.0,M_PI);
      _h_ttm_Ptc_fw=bookHistogram1D("z.highPT.mttbar.fw",100,0.0,1000.0);
      _h_topt_Ptc_fw=bookHistogram1D("z.highPT.pTtop.fw",80,0.0,480.0);
      _h_tty_Ptc_fw=bookHistogram1D("z.highPT.yttbar.fw",60,-3.0,3.0);
      _h_ttdphi_Ptc_bw=bookHistogram1D("z.highPT.dphittbar.bw",40,0.0,M_PI);
      _h_ttm_Ptc_bw=bookHistogram1D("z.highPT.mttbar.bw",100,0.0,1000.0);
      _h_topt_Ptc_bw=bookHistogram1D("z.highPT.pTtop.bw",80,0.0,480.0);
      _h_tty_Ptc_bw=bookHistogram1D("z.highPT.yttbar.bw",60,-3.0,3.0);

    }


    /// Perform the per-event analysis
    void analyze(const Event& event) {

      const double weight = event.weight();
      _h_xseccut->fill(0,weight);

      /// @todo Do the event by event analysis here

      const IdentifiedFinalState& ifs
	=applyProjection<IdentifiedFinalState>(event,"IFS");
      ParticleVector allp=ifs.particlesByPt();
      if(allp.size()<2) vetoEvent;
      _h_xseccut->fill(1,weight);

      bool ftop=false, ftbar=false;
      FourMomentum momtop, momtbar;
      for(size_t i=0; i<allp.size(); ++i) {
	if(!ftop && allp[i].pdgId()==TOP) {
	  ftop=true; momtop=allp[i].momentum(); if(ftbar) break;
	}
	else if(!ftbar && allp[i].pdgId()==ATOP) {
	  ftbar=true; momtbar=allp[i].momentum(); if(ftop) break;
	}
      }
      if(ftop && ftbar); else vetoEvent;
      _h_xseccut->fill(2,weight);

      const double dy=momtop.rapidity()-momtbar.rapidity();
      const double dphi=deltaPhi(momtop.phi(), momtbar.phi());
      const double ptt=momtop.pT(), pta=momtbar.pT();
      const double yt=momtop.rapidity(), ya=momtbar.rapidity();
      FourMomentum momtt=momtop+momtbar;
      const double pt=momtt.pT();
      const double rap=momtt.rapidity();
      const double mss=momtt.mass();

      //All.
      _h_ttdy->fill(dy,weight); _h_ttody->fill(fabs(dy),weight);
      _h_ttdphi->fill(dphi,weight); _h_ttpt->fill(pt,weight);
      _h_topt->fill(ptt,weight); _h_atpt->fill(pta,weight);
      _h_tty->fill(rap,weight);
      _h_toy->fill(yt,weight); _h_aty->fill(ya,weight);
      _h_ttm->fill(mss,weight);
      if(dy>=0.0) {
	_h_xseccut->fill(3,weight);
	_h_ttdy_fw->fill(dy,weight); _h_ttody_fw->fill(fabs(dy),weight);
	_h_ttdphi_fw->fill(dphi,weight); _h_ttpt_fw->fill(pt,weight);
	_h_topt_fw->fill(ptt,weight); _h_atpt_fw->fill(pta,weight);
	_h_tty_fw->fill(rap,weight);
	_h_toy_fw->fill(yt,weight); _h_aty_fw->fill(ya,weight);
	_h_ttm_fw->fill(mss,weight);
      } else {
	_h_xseccut->fill(4,weight);
	_h_ttdy_bw->fill(dy,weight); _h_ttody_bw->fill(fabs(dy),weight);
	_h_ttdphi_bw->fill(dphi,weight); _h_ttpt_bw->fill(pt,weight);
	_h_topt_bw->fill(ptt,weight); _h_atpt_bw->fill(pta,weight);
	_h_tty_bw->fill(rap,weight);
	_h_toy_bw->fill(yt,weight); _h_aty_bw->fill(ya,weight);
	_h_ttm_bw->fill(mss,weight);
      }

      //Mass cut.
      if(mss<=450.0) {
	_h_xseccut->fill(5,weight);
	_h_ttdy_mttc->fill(dy,weight); _h_ttdphi_mttc->fill(dphi,weight);
	_h_ttpt_mttc->fill(pt,weight); _h_topt_mttc->fill(ptt,weight);
	_h_tty_mttc->fill(rap,weight);
	if(dy>=0.0) {
	  _h_xseccut->fill(6,weight);
	  _h_ttdphi_mttc_fw->fill(dphi,weight);
	  _h_ttpt_mttc_fw->fill(pt,weight); _h_topt_mttc_fw->fill(ptt,weight);
	  _h_tty_mttc_fw->fill(rap,weight);
	} else {
	  _h_xseccut->fill(7,weight);
	  _h_ttdphi_mttc_bw->fill(dphi,weight);
	  _h_ttpt_mttc_bw->fill(pt,weight); _h_topt_mttc_bw->fill(ptt,weight);
	  _h_tty_mttc_bw->fill(rap,weight);
	}
      } else {
	_h_xseccut->fill(8,weight);
	_h_ttdy_Mttc->fill(dy,weight); _h_ttdphi_Mttc->fill(dphi,weight);
	_h_ttpt_Mttc->fill(pt,weight); _h_topt_Mttc->fill(ptt,weight);
	_h_tty_Mttc->fill(rap,weight);
	if(dy>=0.0) {
	  _h_xseccut->fill(9,weight);
	  _h_ttdphi_Mttc_fw->fill(dphi,weight);
	  _h_ttpt_Mttc_fw->fill(pt,weight); _h_topt_Mttc_fw->fill(ptt,weight);
	  _h_tty_Mttc_fw->fill(rap,weight);
	} else {
	  _h_xseccut->fill(10,weight);
	  _h_ttdphi_Mttc_bw->fill(dphi,weight);
	  _h_ttpt_Mttc_bw->fill(pt,weight); _h_topt_Mttc_bw->fill(ptt,weight);
	  _h_tty_Mttc_bw->fill(rap,weight);
	}
      }

      //PT cut.
      if(pt<=50.0) {    //Sudakov region.
	_h_xseccut->fill(11,weight);
	_h_ttdy_ptc->fill(dy,weight); _h_ttdphi_ptc->fill(dphi,weight);
	_h_ttm_ptc->fill(mss,weight); _h_topt_ptc->fill(ptt,weight);
	_h_tty_ptc->fill(rap,weight);
	if(dy>=0.0) {
	  _h_xseccut->fill(12,weight);
	  _h_ttdphi_ptc_fw->fill(dphi,weight);
	  _h_ttm_ptc_fw->fill(mss,weight); _h_topt_ptc_fw->fill(ptt,weight);
	  _h_tty_ptc_fw->fill(rap,weight);
	} else {
	  _h_xseccut->fill(13,weight);
	  _h_ttdphi_ptc_bw->fill(dphi,weight);
	  _h_ttm_ptc_bw->fill(mss,weight); _h_topt_ptc_bw->fill(ptt,weight);
	  _h_tty_ptc_bw->fill(rap,weight);
	}
      } else {
	_h_xseccut->fill(14,weight);
	_h_ttdy_Ptc->fill(dy,weight); _h_ttdphi_Ptc->fill(dphi,weight);
	_h_ttm_Ptc->fill(mss,weight); _h_topt_Ptc->fill(ptt,weight);
	_h_tty_Ptc->fill(rap,weight);
	if(dy>=0.0) {
	  _h_xseccut->fill(15,weight);
	  _h_ttdphi_Ptc_fw->fill(dphi,weight);
	  _h_ttm_Ptc_fw->fill(mss,weight); _h_topt_Ptc_fw->fill(ptt,weight);
	  _h_tty_Ptc_fw->fill(rap,weight);
	} else {
	  _h_xseccut->fill(16,weight);
	  _h_ttdphi_Ptc_bw->fill(dphi,weight);
	  _h_ttm_Ptc_bw->fill(mss,weight); _h_topt_Ptc_bw->fill(ptt,weight);
	  _h_tty_Ptc_bw->fill(rap,weight);
	}
      }

    }


    /// Normalise histograms etc., after the run
    void finalize() {

      /// @todo Normalise, scale and otherwise manipulate histograms here

      // scale(_h_YYYY, crossSection()/sumOfWeights()); # norm to cross section
      // normalize(_h_YYYY); # normalize to unity

      AIDA::IHistogramFactory& hf=histogramFactory();
      IHistogram1D* num, * den;
      const string dir=histoDir();

      num=hf.subtract("/num", *_h_ttpt_fw, *_h_ttpt_bw);
      den=hf.add("/den", *_h_ttpt_fw, *_h_ttpt_bw);
      hf.divide(dir+"/pTttbar.asym", *num, *den);
      hf.destroy(num); hf.destroy(den);

      num=hf.subtract("/num", *_h_ttm_fw, *_h_ttm_bw);
      den=hf.add("/den", *_h_ttm_fw, *_h_ttm_bw);
      hf.divide(dir+"/mttbar.asym", *num, *den);
      hf.destroy(num); hf.destroy(den);

      num=hf.subtract("/num", *_h_tty_fw, *_h_tty_bw);
      den=hf.add("/den", *_h_tty_fw, *_h_tty_bw);
      hf.divide(dir+"/yttbar.asym", *num, *den);
      hf.destroy(num); hf.destroy(den);

      num=hf.subtract("/num", *_h_ttdy_fw, *_h_ttdy_bw);
      den=hf.add("/den", *_h_ttdy_fw, *_h_ttdy_bw);
      hf.divide(dir+"/dyttbar.asym", *num, *den);
      hf.destroy(num); hf.destroy(den);

      num=hf.subtract("/num", *_h_ttody_fw, *_h_ttody_bw);
      den=hf.add("/den", *_h_ttody_fw, *_h_ttody_bw);
      hf.divide(dir+"/moddyttbar.asym", *num, *den);
      hf.destroy(num); hf.destroy(den);

      num=hf.subtract("/num", *_h_ttdphi_fw, *_h_ttdphi_bw);
      den=hf.add("/den", *_h_ttdphi_fw, *_h_ttdphi_bw);
      hf.divide(dir+"/dphittbar.asym", *num, *den);
      hf.destroy(num); hf.destroy(den);

      num=hf.subtract("/num", *_h_topt_fw, *_h_topt_bw);
      den=hf.add("/den", *_h_topt_fw, *_h_topt_bw);
      hf.divide(dir+"/pTtop.asym", *num, *den);
      hf.destroy(num); hf.destroy(den);
      num=hf.subtract("/num", *_h_atpt_fw, *_h_atpt_bw);
      den=hf.add("/den", *_h_atpt_fw, *_h_atpt_bw);
      hf.divide(dir+"/pTatop.asym", *num, *den);
      hf.destroy(num); hf.destroy(den);

      num=hf.subtract("/num", *_h_toy_fw, *_h_toy_bw);
      den=hf.add("/den", *_h_toy_fw, *_h_toy_bw);
      hf.divide(dir+"/ytop.asym", *num, *den);
      hf.destroy(num); hf.destroy(den);
      num=hf.subtract("/num", *_h_aty_fw, *_h_aty_bw);
      den=hf.add("/den", *_h_aty_fw, *_h_aty_bw);
      hf.divide(dir+"/yatop.asym", *num, *den);
      hf.destroy(num); hf.destroy(den);

      //Mass cut.
      num=hf.subtract("/num", *_h_ttdphi_mttc_fw, *_h_ttdphi_mttc_bw);
      den=hf.add("/den", *_h_ttdphi_mttc_fw, *_h_ttdphi_mttc_bw);
      hf.divide(dir+"/lowMtt.dphittbar.asym", *num, *den);
      hf.destroy(num); hf.destroy(den);
      num=hf.subtract("/num", *_h_ttdphi_Mttc_fw, *_h_ttdphi_Mttc_bw);
      den=hf.add("/den", *_h_ttdphi_Mttc_fw, *_h_ttdphi_Mttc_bw);
      hf.divide(dir+"/highMtt.dphittbar.asym", *num, *den);
      hf.destroy(num); hf.destroy(den);

      num=hf.subtract("/num", *_h_ttpt_mttc_fw, *_h_ttpt_mttc_bw);
      den=hf.add("/den", *_h_ttpt_mttc_fw, *_h_ttpt_mttc_bw);
      hf.divide(dir+"/lowMtt.pTttbar.asym", *num, *den);
      hf.destroy(num); hf.destroy(den);
      num=hf.subtract("/num", *_h_ttpt_Mttc_fw, *_h_ttpt_Mttc_bw);
      den=hf.add("/den", *_h_ttpt_Mttc_fw, *_h_ttpt_Mttc_bw);
      hf.divide(dir+"/highMtt.pTttbar.asym", *num, *den);
      hf.destroy(num); hf.destroy(den);

      num=hf.subtract("/num", *_h_topt_mttc_fw, *_h_topt_mttc_bw);
      den=hf.add("/den", *_h_topt_mttc_fw, *_h_topt_mttc_bw);
      hf.divide(dir+"/lowMtt.pTtop.asym", *num, *den);
      hf.destroy(num); hf.destroy(den);
      num=hf.subtract("/num", *_h_topt_Mttc_fw, *_h_topt_Mttc_bw);
      den=hf.add("/den", *_h_topt_Mttc_fw, *_h_topt_Mttc_bw);
      hf.divide(dir+"/highMtt.pTtop.asym", *num, *den);
      hf.destroy(num); hf.destroy(den);

      num=hf.subtract("/num", *_h_tty_mttc_fw, *_h_tty_mttc_bw);
      den=hf.add("/den", *_h_tty_mttc_fw, *_h_tty_mttc_bw);
      hf.divide(dir+"/lowMtt.yttbar.asym", *num, *den);
      hf.destroy(num); hf.destroy(den);
      num=hf.subtract("/num", *_h_tty_Mttc_fw, *_h_tty_Mttc_bw);
      den=hf.add("/den", *_h_tty_Mttc_fw, *_h_tty_Mttc_bw);
      hf.divide(dir+"/highMtt.yttbar.asym", *num, *den);
      hf.destroy(num); hf.destroy(den);

      //PT cut.
      num=hf.subtract("/num", *_h_ttdphi_ptc_fw, *_h_ttdphi_ptc_bw);
      den=hf.add("/den", *_h_ttdphi_ptc_fw, *_h_ttdphi_ptc_bw);
      hf.divide(dir+"/z.lowPT.dphittbar.asym", *num, *den);
      hf.destroy(num); hf.destroy(den);
      num=hf.subtract("/num", *_h_ttdphi_Ptc_fw, *_h_ttdphi_Ptc_bw);
      den=hf.add("/den", *_h_ttdphi_Ptc_fw, *_h_ttdphi_Ptc_bw);
      hf.divide(dir+"/z.highPT.dphittbar.asym", *num, *den);
      hf.destroy(num); hf.destroy(den);

      num=hf.subtract("/num", *_h_ttm_ptc_fw, *_h_ttm_ptc_bw);
      den=hf.add("/den", *_h_ttm_ptc_fw, *_h_ttm_ptc_bw);
      hf.divide(dir+"/z.lowPT.mttbar.asym", *num, *den);
      hf.destroy(num); hf.destroy(den);
      num=hf.subtract("/num", *_h_ttm_Ptc_fw, *_h_ttm_Ptc_bw);
      den=hf.add("/den", *_h_ttm_Ptc_fw, *_h_ttm_Ptc_bw);
      hf.divide(dir+"/z.highPT.mttbar.asym", *num, *den);
      hf.destroy(num); hf.destroy(den);

      num=hf.subtract("/num", *_h_topt_ptc_fw, *_h_topt_ptc_bw);
      den=hf.add("/den", *_h_topt_ptc_fw, *_h_topt_ptc_bw);
      hf.divide(dir+"/z.lowPT.pTtop.asym", *num, *den);
      hf.destroy(num); hf.destroy(den);
      num=hf.subtract("/num", *_h_topt_Ptc_fw, *_h_topt_Ptc_bw);
      den=hf.add("/den", *_h_topt_Ptc_fw, *_h_topt_Ptc_bw);
      hf.divide(dir+"/z.highPT.pTtop.asym", *num, *den);
      hf.destroy(num); hf.destroy(den);

      num=hf.subtract("/num", *_h_tty_ptc_fw, *_h_tty_ptc_bw);
      den=hf.add("/den", *_h_tty_ptc_fw, *_h_tty_ptc_bw);
      hf.divide(dir+"/z.lowPT.yttbar.asym", *num, *den);
      hf.destroy(num); hf.destroy(den);
      num=hf.subtract("/num", *_h_tty_Ptc_fw, *_h_tty_Ptc_bw);
      den=hf.add("/den", *_h_tty_Ptc_fw, *_h_tty_Ptc_bw);
      hf.divide(dir+"/z.highPT.yttbar.asym", *num, *den);
      hf.destroy(num); hf.destroy(den);

      std::vector<double> sigma, sigmaerr;
      sigma.push_back(crossSection());
      sigmaerr.push_back(0);
      _h_xsectot->setCoordinate(1, sigma, sigmaerr);

      scale(_h_ttdy, crossSection()/sumOfWeights());
      scale(_h_ttdy_fw, crossSection()/sumOfWeights());
      scale(_h_ttdy_bw, crossSection()/sumOfWeights());
      scale(_h_ttody, crossSection()/sumOfWeights());
      scale(_h_ttody_fw, crossSection()/sumOfWeights());
      scale(_h_ttody_bw, crossSection()/sumOfWeights());
      scale(_h_ttdphi, crossSection()/sumOfWeights());
      scale(_h_ttdphi_fw, crossSection()/sumOfWeights());
      scale(_h_ttdphi_bw, crossSection()/sumOfWeights());
      scale(_h_ttpt, crossSection()/sumOfWeights());
      scale(_h_ttpt_fw, crossSection()/sumOfWeights());
      scale(_h_ttpt_bw, crossSection()/sumOfWeights());
      scale(_h_topt, crossSection()/sumOfWeights());
      scale(_h_topt_fw, crossSection()/sumOfWeights());
      scale(_h_topt_bw, crossSection()/sumOfWeights());
      scale(_h_atpt, crossSection()/sumOfWeights());
      scale(_h_atpt_fw, crossSection()/sumOfWeights());
      scale(_h_atpt_bw, crossSection()/sumOfWeights());
      scale(_h_tty, crossSection()/sumOfWeights());
      scale(_h_tty_fw, crossSection()/sumOfWeights());
      scale(_h_tty_bw, crossSection()/sumOfWeights());
      scale(_h_toy, crossSection()/sumOfWeights());
      scale(_h_toy_fw, crossSection()/sumOfWeights());
      scale(_h_toy_bw, crossSection()/sumOfWeights());
      scale(_h_aty, crossSection()/sumOfWeights());
      scale(_h_aty_fw, crossSection()/sumOfWeights());
      scale(_h_aty_bw, crossSection()/sumOfWeights());
      scale(_h_ttm, crossSection()/sumOfWeights());
      scale(_h_ttm_fw, crossSection()/sumOfWeights());
      scale(_h_ttm_bw, crossSection()/sumOfWeights());

      scale(_h_ttdy_mttc, crossSection()/sumOfWeights());
      scale(_h_ttdphi_mttc, crossSection()/sumOfWeights());
      scale(_h_ttpt_mttc, crossSection()/sumOfWeights());
      scale(_h_topt_mttc, crossSection()/sumOfWeights());
      scale(_h_tty_mttc, crossSection()/sumOfWeights());
      scale(_h_ttdphi_mttc_fw, crossSection()/sumOfWeights());
      scale(_h_ttpt_mttc_fw, crossSection()/sumOfWeights());
      scale(_h_topt_mttc_fw, crossSection()/sumOfWeights());
      scale(_h_tty_mttc_fw, crossSection()/sumOfWeights());
      scale(_h_ttdphi_mttc_bw, crossSection()/sumOfWeights());
      scale(_h_ttpt_mttc_bw, crossSection()/sumOfWeights());
      scale(_h_topt_mttc_bw, crossSection()/sumOfWeights());
      scale(_h_tty_mttc_bw, crossSection()/sumOfWeights());

      scale(_h_ttdy_Mttc, crossSection()/sumOfWeights());
      scale(_h_ttdphi_Mttc, crossSection()/sumOfWeights());
      scale(_h_ttpt_Mttc, crossSection()/sumOfWeights());
      scale(_h_topt_Mttc, crossSection()/sumOfWeights());
      scale(_h_tty_Mttc, crossSection()/sumOfWeights());
      scale(_h_ttdphi_Mttc_fw, crossSection()/sumOfWeights());
      scale(_h_ttpt_Mttc_fw, crossSection()/sumOfWeights());
      scale(_h_topt_Mttc_fw, crossSection()/sumOfWeights());
      scale(_h_tty_Mttc_fw, crossSection()/sumOfWeights());
      scale(_h_ttdphi_Mttc_bw, crossSection()/sumOfWeights());
      scale(_h_ttpt_Mttc_bw, crossSection()/sumOfWeights());
      scale(_h_topt_Mttc_bw, crossSection()/sumOfWeights());
      scale(_h_tty_Mttc_bw, crossSection()/sumOfWeights());

      scale(_h_ttdy_ptc, crossSection()/sumOfWeights());
      scale(_h_ttdphi_ptc, crossSection()/sumOfWeights());
      scale(_h_ttm_ptc, crossSection()/sumOfWeights());
      scale(_h_topt_ptc, crossSection()/sumOfWeights());
      scale(_h_tty_ptc, crossSection()/sumOfWeights());
      scale(_h_ttdphi_ptc_fw, crossSection()/sumOfWeights());
      scale(_h_ttm_ptc_fw, crossSection()/sumOfWeights());
      scale(_h_topt_ptc_fw, crossSection()/sumOfWeights());
      scale(_h_tty_ptc_fw, crossSection()/sumOfWeights());
      scale(_h_ttdphi_ptc_bw, crossSection()/sumOfWeights());
      scale(_h_ttm_ptc_bw, crossSection()/sumOfWeights());
      scale(_h_topt_ptc_bw, crossSection()/sumOfWeights());
      scale(_h_tty_ptc_bw, crossSection()/sumOfWeights());

      scale(_h_ttdy_Ptc, crossSection()/sumOfWeights());
      scale(_h_ttdphi_Ptc, crossSection()/sumOfWeights());
      scale(_h_ttm_Ptc, crossSection()/sumOfWeights());
      scale(_h_topt_Ptc, crossSection()/sumOfWeights());
      scale(_h_tty_Ptc, crossSection()/sumOfWeights());
      scale(_h_ttdphi_Ptc_fw, crossSection()/sumOfWeights());
      scale(_h_ttm_Ptc_fw, crossSection()/sumOfWeights());
      scale(_h_topt_Ptc_fw, crossSection()/sumOfWeights());
      scale(_h_tty_Ptc_fw, crossSection()/sumOfWeights());
      scale(_h_ttdphi_Ptc_bw, crossSection()/sumOfWeights());
      scale(_h_ttm_Ptc_bw, crossSection()/sumOfWeights());
      scale(_h_topt_Ptc_bw, crossSection()/sumOfWeights());
      scale(_h_tty_Ptc_bw, crossSection()/sumOfWeights());

      scale(_h_xseccut, crossSection()/sumOfWeights());


    }

    //@}


  private:

    // Data members like post-cuts event weight counters go here


  private:

    /// @name Histograms
    //@{
    //AIDA::IProfile1D *_h_XXXX;
    //AIDA::IHistogram1D *_h_YYYY;
    AIDA::IHistogram1D*  _h_ttdy;
    AIDA::IHistogram1D*  _h_ttdy_fw;
    AIDA::IHistogram1D*  _h_ttdy_bw;
    AIDA::IHistogram1D*  _h_ttody;
    AIDA::IHistogram1D*  _h_ttody_fw;
    AIDA::IHistogram1D*  _h_ttody_bw;
    AIDA::IHistogram1D*  _h_ttdphi;
    AIDA::IHistogram1D*  _h_ttdphi_fw;
    AIDA::IHistogram1D*  _h_ttdphi_bw;
    AIDA::IHistogram1D*  _h_ttpt;
    AIDA::IHistogram1D*  _h_ttpt_fw;
    AIDA::IHistogram1D*  _h_ttpt_bw;
    AIDA::IHistogram1D*  _h_topt;
    AIDA::IHistogram1D*  _h_topt_fw;
    AIDA::IHistogram1D*  _h_topt_bw;
    AIDA::IHistogram1D*  _h_atpt;
    AIDA::IHistogram1D*  _h_atpt_fw;
    AIDA::IHistogram1D*  _h_atpt_bw;
    AIDA::IHistogram1D*  _h_tty;
    AIDA::IHistogram1D*  _h_tty_fw;
    AIDA::IHistogram1D*  _h_tty_bw;
    AIDA::IHistogram1D*  _h_toy;
    AIDA::IHistogram1D*  _h_toy_fw;
    AIDA::IHistogram1D*  _h_toy_bw;
    AIDA::IHistogram1D*  _h_aty;
    AIDA::IHistogram1D*  _h_aty_fw;
    AIDA::IHistogram1D*  _h_aty_bw;
    AIDA::IHistogram1D*  _h_ttm;
    AIDA::IHistogram1D*  _h_ttm_fw;
    AIDA::IHistogram1D*  _h_ttm_bw;
    AIDA::IDataPointSet* _h_xsectot;
    AIDA::IHistogram1D*  _h_xseccut;
    AIDA::IHistogram1D*  _h_ttdy_mttc;
    AIDA::IHistogram1D*  _h_ttdphi_mttc;
    AIDA::IHistogram1D*  _h_ttpt_mttc;
    AIDA::IHistogram1D*  _h_topt_mttc;
    AIDA::IHistogram1D*  _h_tty_mttc;
    AIDA::IHistogram1D*  _h_ttdphi_mttc_fw;
    AIDA::IHistogram1D*  _h_ttpt_mttc_fw;
    AIDA::IHistogram1D*  _h_topt_mttc_fw;
    AIDA::IHistogram1D*  _h_tty_mttc_fw;
    AIDA::IHistogram1D*  _h_ttdphi_mttc_bw;
    AIDA::IHistogram1D*  _h_ttpt_mttc_bw;
    AIDA::IHistogram1D*  _h_topt_mttc_bw;
    AIDA::IHistogram1D*  _h_tty_mttc_bw;
    AIDA::IHistogram1D*  _h_ttdy_Mttc;
    AIDA::IHistogram1D*  _h_ttdphi_Mttc;
    AIDA::IHistogram1D*  _h_ttpt_Mttc;
    AIDA::IHistogram1D*  _h_topt_Mttc;
    AIDA::IHistogram1D*  _h_tty_Mttc;
    AIDA::IHistogram1D*  _h_ttdphi_Mttc_fw;
    AIDA::IHistogram1D*  _h_ttpt_Mttc_fw;
    AIDA::IHistogram1D*  _h_topt_Mttc_fw;
    AIDA::IHistogram1D*  _h_tty_Mttc_fw;
    AIDA::IHistogram1D*  _h_ttdphi_Mttc_bw;
    AIDA::IHistogram1D*  _h_ttpt_Mttc_bw;
    AIDA::IHistogram1D*  _h_topt_Mttc_bw;
    AIDA::IHistogram1D*  _h_tty_Mttc_bw;

    AIDA::IHistogram1D*  _h_ttdy_ptc;
    AIDA::IHistogram1D*  _h_ttdphi_ptc;
    AIDA::IHistogram1D*  _h_ttm_ptc;
    AIDA::IHistogram1D*  _h_topt_ptc;
    AIDA::IHistogram1D*  _h_tty_ptc;
    AIDA::IHistogram1D*  _h_ttdphi_ptc_fw;
    AIDA::IHistogram1D*  _h_ttm_ptc_fw;
    AIDA::IHistogram1D*  _h_topt_ptc_fw;
    AIDA::IHistogram1D*  _h_tty_ptc_fw;
    AIDA::IHistogram1D*  _h_ttdphi_ptc_bw;
    AIDA::IHistogram1D*  _h_ttm_ptc_bw;
    AIDA::IHistogram1D*  _h_topt_ptc_bw;
    AIDA::IHistogram1D*  _h_tty_ptc_bw;
    AIDA::IHistogram1D*  _h_ttdy_Ptc;
    AIDA::IHistogram1D*  _h_ttdphi_Ptc;
    AIDA::IHistogram1D*  _h_ttm_Ptc;
    AIDA::IHistogram1D*  _h_topt_Ptc;
    AIDA::IHistogram1D*  _h_tty_Ptc;
    AIDA::IHistogram1D*  _h_ttdphi_Ptc_fw;
    AIDA::IHistogram1D*  _h_ttm_Ptc_fw;
    AIDA::IHistogram1D*  _h_topt_Ptc_fw;
    AIDA::IHistogram1D*  _h_tty_Ptc_fw;
    AIDA::IHistogram1D*  _h_ttdphi_Ptc_bw;
    AIDA::IHistogram1D*  _h_ttm_Ptc_bw;
    AIDA::IHistogram1D*  _h_topt_Ptc_bw;
    AIDA::IHistogram1D*  _h_tty_Ptc_bw;
    //@}


  };



  // The hook for the plugin system
  DECLARE_RIVET_PLUGIN(MC_FBA_TTBAR);

}
