#include "pyuser++.h"
#include "pythia_external.h"

int main() 
{ 
  std::vector<std::string> topygive;
  topygive.push_back("MSTP(143)=1"); //enable PYVETO operation:
  //Pythia params can/could be pushed.back here
  // ... 
  // parse strings of Pythia commands
  const char* temp_pygive_cstr;
  for (std::vector<std::string>::iterator it = topygive.begin(); it != topygive.end(); it++)
    {
      temp_pygive_cstr=(*it).c_str();
      pygive_(temp_pygive_cstr,strlen(temp_pygive_cstr));     
    }  
  //---------------------------------------------------------------------------------------------
  //Pythia initialization, 
  //all Pytiha parameters should be set before the PYINIT call
  std::string m_frame  = "USER";
  std::string m_beam   = "";
  std::string m_target = "";
  double winval=0.;
  const char* frame = m_frame.c_str();
  const char* beam = m_beam.c_str();
  const char* target = m_target.c_str();
  pyinit_(frame,beam,target,&winval,strlen(frame),strlen(beam),strlen(target));
  //---------------------------------------------------------------------------------------------
  int n_events=0;
  //HepMC specific setup
  HepMC::IO_HEPEVT hepevtio;
  HepMC::GenEvent* evt;
 
  {//begin scope of ascii_io
    HepMC::IO_GenEvent ascii_io("Alpgen_Pythia.HepMC",std::ios::out);

    while (true)
      {
	n_events++;
	// generate next event 
	pyevnt_(); 
	// get the HEPEVT record of the event
	int pyhepc_mode=1;
	pyhepc_(&pyhepc_mode);
	//ALSFIN: NUP=0 in the event means the end of file
	if (hepeup_.NUP==0)
	  {
	    std::cout<<"end of ER after "<<n_events-1<<" events."<<std::endl;
	    break;
	  }
	// get the HEPMC record of the event
	evt = hepevtio.read_next_event();

	if (!(evt->is_valid())) 
	  {
	    std::cout<<"got invalid HepMC event after "<<n_events<<" events."<<std::endl;
	    std::cout<<"exit the generation loop now. "<<std::endl;
	    break;
	  }
	else
	  {
	    if (n_events==1)
	      {
		// print the 1st event to the screen
		std::cout<<"-----------------------------------------------------------------------------"<<std::endl;
		std::cout<<" Listing the Pythia event # "<<n_events<<" in Pythia internal PYJETS format:   "<<std::endl;
		int pylist_mode=1;
		pylist_(&pylist_mode);
		
		std::cout<<" Listing the Pythia event # "<<n_events<<" in HepMC format:   "<<std::endl;
		evt->print();
	      }
	    // dump ascii
	    ascii_io<<evt;
	  }
	// all done, delete event
	delete evt;
      }
  } // end scope of ascii_io
  
  //---------------------------------------------------------------------------------------------
  // event generation done, print statistics
  int pystat_mode=1;
  pystat_(&pystat_mode);
  //---------------------------------------------------------------------------------------------
  //_____________________________________________________________________________________________
  
  return 0;
}
