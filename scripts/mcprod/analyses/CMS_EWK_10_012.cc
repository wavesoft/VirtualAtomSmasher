// -*- C++ -*-
// AUTHOR:  Anil Singh (anil@cern.ch), Lovedeep Saini (lovedeep@cern.ch)

#include "Rivet/Analysis.hh"
#include "Rivet/RivetAIDA.hh"
#include "Rivet/Tools/Logging.hh"
#include "Rivet/Projections/FinalState.hh"
#include "Rivet/Projections/FastJets.hh"
#include "Rivet/Projections/VetoedFinalState.hh"
#include "Rivet/Projections/InvMassFinalState.hh"
#include "Rivet/Tools/ParticleIdUtils.hh"
#include "Rivet/Projections/LeadingParticlesFinalState.hh"


namespace Rivet {
  
  
  class CMS_EWK_10_012 : public Analysis {
  public:
    
    CMS_EWK_10_012()
      : Analysis("CMS_EWK_10_012")
    {
      setBeams(PROTON, PROTON);
      setNeedsCrossSection(true);
    }
    
    
    /// Book histograms and initialise projections before the run
    void init() {
      
      const FinalState fs(-5.0,5.0);
      addProjection(fs, "FS");
      
      // Zee
      LeadingParticlesFinalState ZeeFS(FinalState(-2.5,2.5, 0.)); 
      ZeeFS.addParticleIdPair(ELECTRON);
      addProjection(ZeeFS, "ZeeFS");
      // Zmm
      LeadingParticlesFinalState ZmmFS(FinalState(-2.4,2.4, 0.)); 
      ZmmFS.addParticleIdPair(MUON);
      addProjection(ZmmFS, "ZmmFS");
      
      // We-nu_e~
      LeadingParticlesFinalState WminusenuFS(FinalState(-2.5,2.5, 0.)); 
      WminusenuFS.addParticleId(ELECTRON).addParticleId(NU_EBAR);
      addProjection(WminusenuFS, "WminusenuFS");
      
      // We+nu_e
      LeadingParticlesFinalState WplusenuFS(FinalState(-2.5,2.5, 0.));
      WplusenuFS.addParticleId(POSITRON).addParticleId(NU_E);
      addProjection(WplusenuFS, "WplusenuFS");
      
      // Wm+nu_mu~
      LeadingParticlesFinalState WplusmunuFS(FinalState(-2.4,2.4, 0.));
      WplusmunuFS.addParticleId(ANTIMUON).addParticleId(NU_MU);
      addProjection(WplusmunuFS, "WplusmunuFS");
      
      // Wm-nu_mu
      LeadingParticlesFinalState WminusmunuFS(FinalState(-2.4,2.4, 0.));
      WminusmunuFS.addParticleId(MUON).addParticleId(NU_MUBAR);
      addProjection(WminusmunuFS, "WminusmunuFS");

// Remove neutrinos for isolation of final state particles      
      VetoedFinalState vfs(fs);
      vfs.vetoNeutrinos();
      vfs.addVetoOnThisFinalState(ZeeFS);
      vfs.addVetoOnThisFinalState(ZmmFS);
      vfs.addVetoOnThisFinalState(WminusenuFS);
      vfs.addVetoOnThisFinalState(WminusmunuFS);
      vfs.addVetoOnThisFinalState(WplusenuFS);
      vfs.addVetoOnThisFinalState(WplusmunuFS);
      addProjection(vfs, "VFS");


      addProjection(FastJets(vfs, FastJets::ANTIKT, 0.5), "Jets");
      
      _histNoverN0Welec = bookDataPointSet(1,1,1);   
      _histNoverNm1Welec = bookDataPointSet(2,1,1);   
      _histNoverN0Wmu = bookDataPointSet(3,1,1);
      _histNoverNm1Wmu = bookDataPointSet(4,1,1);   
      _histNoverN0Zelec = bookDataPointSet(5,1,1);   
      _histNoverNm1Zelec = bookDataPointSet(6,1,1);   
      _histNoverN0Zmu = bookDataPointSet(7,1,1);   
      _histNoverNm1Zmu = bookDataPointSet(8,1,1);   
      _histJetMultWelec  = bookHistogram1D("njetWenu", 5, -0.5, 4.5);
      _histJetMultWmu    = bookHistogram1D("njetWmunu", 5, -0.5, 4.5);
      _histJetMultZelec  = bookHistogram1D("njetZee", 5, -0.5, 4.5);
      _histJetMultZmu    = bookHistogram1D("njetZmumu", 5, -0.5, 4.5);
      
      _histJetMultWmuPlus = bookHistogram1D("njetWmuPlus", 5, -0.5, 4.5);
      _histJetMultWmuMinus = bookHistogram1D("njetWmuMinus", 5, -0.5, 4.5);
      _histJetMultWelPlus = bookHistogram1D("njetWePlus", 5, -0.5, 4.5);
      _histJetMultWelMinus = bookHistogram1D("njetWeMinus", 5, -0.5, 4.5);
      _histJetMultRatioWmuPlusMinus = bookDataPointSet(10, 1, 1);
      _histJetMultRatioWelPlusMinus = bookDataPointSet(9, 1, 1);
//      _histWZRatioelec = bookDataPointSet(11, 1, 1);
  //    _histWZRatiomu = bookDataPointSet(12, 1, 1);
      _histWZnormRatioelec = bookDataPointSet(11, 1, 1);
      _histWZnormRatiomu = bookDataPointSet(12, 1, 1);

    } 
      void GetPtEtaPhi(Particle p1, double& pt, double& eta,double& phi){
	pt = p1.momentum().pT();
	eta = p1.momentum().eta();
        phi = p1.momentum().phi();
	return;
      }

    
      bool ApplyZAcceptance(const LeadingParticlesFinalState& zFS, std::string lepton){
	const ParticleVector& Zdaughters = zFS.particlesByPt();
	double phi1 = -9999., phi2 = -9999.;
	double pt1 = -9999., pt2 = -9999.;
	double eta1 = -9999., eta2 = -9999.;
	GetPtEtaPhi(Zdaughters[0],pt1,eta1,phi1);
	GetPtEtaPhi(Zdaughters[1],pt2,eta2,phi2);
	bool isFid1 = false;
	bool isFid2 = false;
	if(lepton=="electron"){
	isFid1 = ((fabs(eta1)<1.4442)||((fabs(eta1)>1.566)&&(fabs(eta1)<2.5)));
	isFid2 = ((fabs(eta2)<1.4442)||((fabs(eta2)>1.566)&&(fabs(eta2)<2.5)));
	}
	if(lepton=="muon"){
	  isFid1 = ((fabs(eta1)<2.1));
	  isFid2 = ((fabs(eta2)<2.4));
  	}

	if( isFid1 && isFid2 && pt1>20 && pt2 >10){
	  const FourMomentum pmom = Zdaughters[0].momentum() + Zdaughters[1].momentum();
	  double mass = sqrt(pmom.invariant());
	  if (inRange(mass/GeV, 60.0, 120.0))
	    return true;
	  else return false;
	}
	else return false;
      }
      
      bool ApplyWAcceptance(const LeadingParticlesFinalState& wFS,std::string lepton){
        const ParticleVector& Wdaughters = wFS.particles();
        double phi1 = -9999.;
        double pt1 = -9999.;
        double eta1 = -9999.;

	Particle lep;
	Particle neut;
	int lepIndex = GetLeptonIndex(wFS);
	lep = Wdaughters[lepIndex];
	if(lepIndex==0) neut = Wdaughters[lepIndex+1];
	else if(lepIndex==1) neut = Wdaughters[lepIndex-1];
        GetPtEtaPhi(Wdaughters[lepIndex],pt1,eta1,phi1);
        bool isFid = false;
        if(lepton=="electron")isFid = (((fabs(eta1)<1.4442)||((fabs(eta1)>1.566)&&(fabs(eta1)<2.5))) && pt1>20);
        if(lepton=="muon") isFid = ((fabs(eta1)<2.1) && pt1>20);
        if(!isFid)return false;
//	double mt=sqrt(2.0*lep.momentum().pT()*neut.momentum().Et()*(1.0-cos(lep.momentum().phi()-neut.momentum().phi())));
	//if (mt<20)return false;
	return true;
  
}

//pdgid
// e- 11, nue 12, mu- 13, numu 14
//why this GetLeptonIndex function?
//Wdaughters[0] has -ve pdgid and Wdaughters[1] has +ve one
//in order to apply acceptance cut on lepton, we want to know its id 
//if Wdaughters[0] is lepton, we say order1 is true and return 0 as lepton index
//if Wdaughters[1] is lepton, we say order2 is true and return 1 
//now, if lepIndex is 0, means neutrino is at position 1, else if lepIndex is 1, neut. is at 0-position 
//so, lepIndex is giving the lepton - Index and we use GetPtEtaPhi() to acess pt,eta,phi of lepton and apply acceptance cuts 
//an example of Wdaughter's prop. [pdgid1: -12 (pt1)16.0846 , pdgid2: 11 (pt2)11.181]
      const int GetLeptonIndex(const LeadingParticlesFinalState& wFS){
	const ParticleVector& Wdaughters = wFS.particles();
	double pdgId1 = fabs(Wdaughters[0].pdgId());
	double pdgId2 = fabs(Wdaughters[1].pdgId());
        //cout<<"pdgid1: "<<Wdaughters[0].pdgId()<<" (pt1)"<<Wdaughters[0].momentum().pT()
	//<<" , pdgid2: "<<Wdaughters[1].pdgId()<<" (pt2)"<<Wdaughters[1].momentum().pT()<<endl;
	bool order1 = ((pdgId1==11&&pdgId2==12)||(pdgId1==13&&pdgId2==14));
	bool order2 = ((pdgId1==12&&pdgId2==11)||(pdgId1==14&&pdgId2==13));
	if(order1 && !order2) return 0;
	else if(order2 && !order1)return 1;
	else return -99999;
      }

    
    void Fill(AIDA::IHistogram1D*& _histJetMult, const double& weight, std::vector<FourMomentum>& finaljet_list){
      _histJetMult->fill(0, weight);
      for (size_t i=0 ; i<finaljet_list.size() ; ++i) {
        if (i==6) break;
        _histJetMult->fill(i+1, weight);  // inclusive
      }
    }  
    
    void FillNoverNm1(AIDA::IHistogram1D*& _histJetMult,AIDA::IDataPointSet* _histNoverNm1){
      std::vector<double> y, yerr;
      for (int i=0; i<_histJetMult->axis().bins()-1; i++) {
        double val = 0.;
        double err = 0.;
        if (!(fuzzyEquals(_histJetMult->binHeight(i), 0) || fuzzyEquals(_histJetMult->binHeight(i+1), 0))) {
          val = _histJetMult->binHeight(i+1) / _histJetMult->binHeight(i);
          err = val * sqrt(  pow(_histJetMult->binError(i+1)/_histJetMult->binHeight(i+1), 2)
			     + pow(_histJetMult->binError(i)  /_histJetMult->binHeight(i)  , 2) );
        }
        y.push_back(val);
        yerr.push_back(err);
      }
      _histNoverNm1->setCoordinate(1, y, yerr);
    }    
    void FillNoverN0(AIDA::IHistogram1D*& _histJetMult,AIDA::IDataPointSet* _histNoverN0){
      std::vector<double> y, yerr;
      for (int i=0; i<_histJetMult->axis().bins()-1; i++) {
        double val = 0.;
        double err = 0.;
        if (!(fuzzyEquals(_histJetMult->binHeight(0), 0) || fuzzyEquals(_histJetMult->binHeight(i+1), 0))) {
          val = _histJetMult->binHeight(i+1) / _histJetMult->binHeight(0);
          err = val * sqrt(  pow(_histJetMult->binError(i+1)/_histJetMult->binHeight(i+1), 2)
			     + pow(_histJetMult->binError(0)  /_histJetMult->binHeight(0)  , 2) );
        }
        y.push_back(val);
        yerr.push_back(err);
      }
      _histNoverN0->setCoordinate(1, y, yerr);
    }    
    

    void FillWZRatioHistogramSet(  AIDA::IHistogram1D*& _histJetMult1,AIDA::IHistogram1D*& _histJetMult2, AIDA::IDataPointSet* _histJetMultRatio12){ 
      std::vector<double> yval, yerr;
      std::vector<double> xval, xerr;
       for (int i = 0; i < 4; ++i) {
        xval.push_back(i);
        xerr.push_back(.5);
        double ratioWZ = 0;
        double errWZ = 0.;
        if (_histJetMult2->binHeight(i) > 0.)
          ratioWZ = _histJetMult1->binHeight(i)/_histJetMult2->binHeight(i);
       double errZ = 0;
        if(_histJetMult2->binHeight(i) > 0.){
          double delMult = _histJetMult2->binError(i);
          double mult = _histJetMult2->binHeight(i);
          errZ = delMult/mult;
        }
        double errW = 0;
        if(_histJetMult1->binHeight(i) > 0.){
          double delMult = _histJetMult1->binError(i);
          double mult = _histJetMult1->binHeight(i);
          errW = delMult/mult;
        }
        errWZ = std::sqrt(std::pow(errW,2)+std::pow(errZ,2));
        yval.push_back(ratioWZ);
        yerr.push_back(ratioWZ*errWZ);
	}
        _histJetMultRatio12->setCoordinate(0,xval,xerr);
        _histJetMultRatio12->setCoordinate(1,yval,yerr);
	
      }


    void FillWZnormRatioHistogramSet( AIDA::IHistogram1D* _histJetMult1,AIDA::IHistogram1D* _histJetMult2, AIDA::IDataPointSet* _histJetMultRatio12 ){
      std::vector<double> Wyval, Wyerr;
      for (int i=0; i<_histJetMult1->axis().bins()-1; i++) {
        double val = 0.;
        double err = 0.;
        if (!(fuzzyEquals(_histJetMult1->binHeight(0), 0) || fuzzyEquals(_histJetMult1->binHeight(i+1), 0))) {
          val = _histJetMult1->binHeight(i+1) / _histJetMult1->binHeight(0);
          err = val * sqrt(  pow(_histJetMult1->binError(i+1)/_histJetMult1->binHeight(i+1), 2)
                             + pow(_histJetMult1->binError(0)  /_histJetMult1->binHeight(0)  , 2) );
        }
        Wyval.push_back(val);
        Wyerr.push_back(err);
      }
     std::vector<double> Zyval, Zyerr;
      for (int i=0; i<_histJetMult2->axis().bins()-1; i++) {
        double val = 0.;
        double err = 0.;
        if (!(fuzzyEquals(_histJetMult2->binHeight(0), 0) || fuzzyEquals(_histJetMult2->binHeight(i+1), 0))) {
          val = _histJetMult2->binHeight(i+1) / _histJetMult2->binHeight(0);
          err = val * sqrt(  pow(_histJetMult2->binError(i+1)/_histJetMult2->binHeight(i+1), 2)
                             + pow(_histJetMult2->binError(0)  /_histJetMult2->binHeight(0)  , 2) );
        }
        Zyval.push_back(val);
        Zyerr.push_back(err);
      }

       for (int i = 0; i < 4; ++i) {
        std::vector<double> xval; xval.push_back(i);
        std::vector<double> xerr; xerr.push_back(.5);
        double ratioWZ = 0;
        double errWZ = 0.;
        if (Zyval[i] > 0.)
          ratioWZ = Wyval[i]/Zyval[i];
       double errZ = 0;
        if(Zyval[i] > 0.)
          errZ = Zyerr[i]/Zyval[i];
        double errW = 0;
        if(Wyval[i] > 0.)
          errW = Wyerr[i]/Wyval[i];
        
        errWZ = std::sqrt(std::pow(errW,2)+std::pow(errZ,2));
        std::vector<double> yval;yval.push_back(ratioWZ);
        std::vector<double> yerr;yerr.push_back(ratioWZ*errWZ);
        _histJetMultRatio12->setCoordinate(0,xval,xerr);
        _histJetMultRatio12->setCoordinate(1,yval,yerr);
        }

      }


 
    void FillChargeAssymHistogramSet(  AIDA::IHistogram1D*& _histJetMult1,AIDA::IHistogram1D*& _histJetMult2, AIDA::IDataPointSet* _histJetMultRatio12 ){
      std::vector<double> yval, yerr;
      std::vector<double> xval, xerr;
      for (int i = 0; i < 4; ++i) {
        xval.push_back(i);
        xerr.push_back(.5);
        double ratio = 0;
        double err = 0.;
        double num = _histJetMult1->binHeight(i)-_histJetMult2->binHeight(i);
	double den = _histJetMult1->binHeight(i)+_histJetMult2->binHeight(i);
	double errNum = 0;
	errNum = std::pow(_histJetMult1->binError(i),2)+std::pow(_histJetMult2->binError(i),2);
	double errDen = 0;
	errDen = std::pow(_histJetMult1->binError(i),2)+std::pow(_histJetMult2->binError(i),2); 
	
        if (den)ratio = num/den;
	
        if(num)
	  errNum = errNum/(num*num); 
        if(den)
	  errDen = errDen/(den*den);
	
        err = std::sqrt(errDen+errNum);
	if(!(err==err))err=0;
        yval.push_back(ratio);
        yerr.push_back(ratio*err);
        }
      _histJetMultRatio12->setCoordinate(0,xval,xerr);
      _histJetMultRatio12->setCoordinate(1,yval,yerr);
    }
    
  
   
    void analyze(const Event& event) {
      //some flag definitions.
      bool isZmm =false;
      bool isZee =false;
      bool isWmnMinus =false;
      bool isWmnPlus  =false;
      bool isWenMinus =false;
      bool isWenPlus  =false;
      bool isWmn =false;
      bool isWen =false;
      
      const double weight = event.weight();
      const LeadingParticlesFinalState& ZeeFS = applyProjection<LeadingParticlesFinalState>(event, "ZeeFS");
      const LeadingParticlesFinalState& ZmmFS = applyProjection<LeadingParticlesFinalState>(event, "ZmmFS");
      const LeadingParticlesFinalState& WminusenuFS = applyProjection<LeadingParticlesFinalState>(event, "WminusenuFS");
      const LeadingParticlesFinalState& WplusenuFS = applyProjection<LeadingParticlesFinalState>(event, "WplusenuFS");
      const LeadingParticlesFinalState& WminusmunuFS = applyProjection<LeadingParticlesFinalState>(event, "WminusmunuFS");
      const LeadingParticlesFinalState& WplusmunuFS = applyProjection<LeadingParticlesFinalState>(event, "WplusmunuFS");
      
      bool boolZ= (ZeeFS.particles().size()>1 && ZmmFS.empty()) || (ZmmFS.particles().size()>1 && ZeeFS.empty()); 
      bool boolW=(!WminusenuFS.empty() || !WplusenuFS.empty() || !WminusmunuFS.empty() || !WplusmunuFS.empty());
      double phi1 = -9999., phi2 = -9999.;
      double pt1 = -9999., pt2 = -9999.;
      double eta1 = -9999., eta2 = -9999.;

  const ParticleVector& ZeeDaus  = ZeeFS.particlesByPt();
  const ParticleVector& ZmmDaus = ZmmFS.particlesByPt();

  if(boolZ){
        //cout<<"Z"<<endl;
    if(ZeeDaus.size()==2 && ZmmDaus.size()<2){
      isZee = ApplyZAcceptance(ZeeFS,"electron");
	GetPtEtaPhi(ZeeDaus[0],pt1,eta1,phi1);
	GetPtEtaPhi(ZeeDaus[1],pt2,eta2,phi2);
    }
    if(ZmmDaus.size()==2 && ZeeDaus.size()<2){
      isZmm = ApplyZAcceptance(ZmmFS,"muon");
    }
  }
  else if(boolW)
    {
      //cout<<"W"<<endl;
      bool boolWenMinus=WplusenuFS.empty() && WplusmunuFS.empty() && WminusmunuFS.empty() ;
      bool boolWenPlus=WminusenuFS.empty() && WplusmunuFS.empty() && WminusmunuFS.empty() ;
      bool boolWmnMinus=WplusenuFS.empty() && WplusmunuFS.empty() && WminusenuFS.empty() ;
      bool boolWmnPlus=WplusenuFS.empty() && WminusenuFS.empty() && WminusmunuFS.empty() ;
      
      if (WminusenuFS.particles().size() == 2 && boolWenMinus ){
	isWenMinus = ApplyWAcceptance(WminusenuFS,"electron");
	int lep = GetLeptonIndex(WminusenuFS);
	const ParticleVector& Wdaughters = WminusenuFS.particles();
        GetPtEtaPhi(Wdaughters[lep],pt1,eta1,phi1);
      }
      
      else if (WplusenuFS.particles().size() == 2 && boolWenPlus) {
	isWenPlus=ApplyWAcceptance(WplusenuFS,"electron");   
	int lep = GetLeptonIndex(WplusenuFS);
	const ParticleVector& Wdaughters = WplusenuFS.particles();
        GetPtEtaPhi(Wdaughters[lep],pt1,eta1,phi1);
      }
      
      else if (WminusmunuFS.particles().size() == 2 && boolWmnMinus) {
	isWmnMinus=ApplyWAcceptance(WminusmunuFS,"muon");
	int lep = GetLeptonIndex(WminusmunuFS);
	const ParticleVector& Wdaughters = WminusmunuFS.particles();
	GetPtEtaPhi(Wdaughters[lep],pt1,eta1,phi1);
      }
      
      else if (WplusmunuFS.particles().size() == 2 && boolWmnPlus) {
	isWmnPlus=ApplyWAcceptance(WplusmunuFS,"muon");
	int lep = GetLeptonIndex(WplusmunuFS);
	const ParticleVector& Wdaughters = WplusmunuFS.particles();
	GetPtEtaPhi(Wdaughters[lep],pt1,eta1,phi1);
      }
      
      if(isWenMinus||isWenPlus)isWen = true;
      if(isWmnMinus||isWmnPlus)isWmn = true;
      
    }
     
      if(!(isZmm||isZee||isWmnPlus || isWenPlus||isWenMinus||isWmnMinus))vetoEvent;
      
      
      //Obtain the jets.
      vector<FourMomentum> finaljet_list;
      foreach (const Jet& j, applyProjection<FastJets>(event, "Jets").jetsByPt(30.0*GeV)) {
	const double jeta = j.momentum().eta();
	const double jphi = j.momentum().phi();
	const double jpt = j.momentum().pT();
	if (fabs(jeta) < 2.4) 
	  if(jpt>30){
	    if(isZee){
	      if (deltaR(eta1, phi1, jeta, jphi) > 0.3 && deltaR(eta2, phi2, jeta, jphi) > 0.3)
		finaljet_list.push_back(j.momentum());
	      continue;
	    }
	    else if( isWenPlus||isWenMinus ){
	      if (deltaR(eta1, phi1, jeta, jphi) > 0.3)
		finaljet_list.push_back(j.momentum());
	      continue;
	    }
	    
	    else  finaljet_list.push_back(j.momentum());
	  }
      }
      
      //Multiplicity plots.	
      //      if(isWen)Fill(_histJetMultWelec, weight, finaljet_list);
      if(isWenPlus || isWenMinus)Fill(_histJetMultWelec, weight, finaljet_list);
      //      if(isWmn)Fill(_histJetMultWmu, weight, finaljet_list);
      if(isWmnPlus || isWmnMinus)Fill(_histJetMultWmu, weight, finaljet_list);
      if(isWmnPlus)Fill(_histJetMultWmuPlus, weight, finaljet_list);
      if(isWmnMinus)Fill(_histJetMultWmuMinus, weight, finaljet_list);
      if(isWenPlus)Fill(_histJetMultWelPlus, weight, finaljet_list);
      if(isWenMinus)Fill(_histJetMultWelMinus, weight, finaljet_list);
      if(isZee)Fill(_histJetMultZelec, weight, finaljet_list);
      if(isZmm)Fill(_histJetMultZmu, weight, finaljet_list);
      
    }   
    
    /// Normalise histograms etc., after the run
    void finalize() {
      FillNoverNm1(_histJetMultWelec,_histNoverNm1Welec);
      FillNoverN0(_histJetMultWelec,_histNoverN0Welec);
      FillNoverNm1(_histJetMultWmu,_histNoverNm1Wmu);
      FillNoverN0(_histJetMultWmu,_histNoverN0Wmu);
      FillNoverNm1(_histJetMultZelec,_histNoverNm1Zelec);
      FillNoverN0(_histJetMultZelec,_histNoverN0Zelec);
      FillNoverNm1(_histJetMultZmu,_histNoverNm1Zmu);
      FillNoverN0(_histJetMultZmu,_histNoverN0Zmu);
      FillChargeAssymHistogramSet(_histJetMultWmuPlus,_histJetMultWmuMinus, _histJetMultRatioWmuPlusMinus);
      FillChargeAssymHistogramSet(_histJetMultWelPlus,_histJetMultWelMinus, _histJetMultRatioWelPlusMinus);
//      FillWZRatioHistogramSet(_histJetMultWelec, _histJetMultZelec,_histWZRatioelec);
  //    FillWZRatioHistogramSet(_histJetMultWmu, _histJetMultZmu,_histWZRatiomu);
      FillWZnormRatioHistogramSet(_histJetMultWelec, _histJetMultZelec,_histWZnormRatioelec);
      FillWZnormRatioHistogramSet(_histJetMultWmu, _histJetMultZmu,_histWZnormRatiomu);
AIDA::IHistogramFactory& hf = histogramFactory();
hf.destroy(_histJetMultWelec);
hf.destroy(_histJetMultWmu);
hf.destroy(_histJetMultWelMinus);
hf.destroy(_histJetMultWmuMinus);
hf.destroy(_histJetMultWelPlus);
hf.destroy(_histJetMultWmuPlus);
hf.destroy(_histJetMultZelec);
hf.destroy(_histJetMultZmu);

    }

  private:
    
    AIDA::IHistogram1D*  _histJetMultWelec;
    AIDA::IDataPointSet* _histNoverNm1Welec;          // n/(n-1)
    AIDA::IDataPointSet* _histNoverN0Welec;          // n/n(0)
    
    AIDA::IHistogram1D*  _histJetMultWmu;
    AIDA::IDataPointSet* _histNoverNm1Wmu;          // n/(n-1)
    AIDA::IDataPointSet* _histNoverN0Wmu;          // n/n(0)

    AIDA::IHistogram1D*  _histJetMultWelMinus;
    AIDA::IHistogram1D*  _histJetMultWelPlus;
    AIDA::IDataPointSet* _histJetMultRatioWelPlusMinus;
    
    AIDA::IHistogram1D*  _histJetMultWmuMinus;
    AIDA::IHistogram1D*  _histJetMultWmuPlus;
    AIDA::IDataPointSet* _histJetMultRatioWmuPlusMinus;
   
    AIDA::IHistogram1D*  _histJetMultZelec;
    AIDA::IDataPointSet* _histNoverNm1Zelec;          // n/(n-1)
    AIDA::IDataPointSet* _histNoverN0Zelec;          // n/n(0)

    AIDA::IHistogram1D*  _histJetMultZmu;
    AIDA::IDataPointSet* _histNoverNm1Zmu;          // n/(n-1)
    AIDA::IDataPointSet* _histNoverN0Zmu;          // n/n(0)

//    AIDA::IDataPointSet* _histWZRatioelec;
//    AIDA::IDataPointSet* _histWZRatiomu;
    AIDA::IDataPointSet* _histWZnormRatioelec;
    AIDA::IDataPointSet* _histWZnormRatiomu;

  };
  
  AnalysisBuilder<CMS_EWK_10_012> plugin_CMS_EWK_10_012;
  
 
}

