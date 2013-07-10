#ifndef PYUSER_H
#define PYUSER_H

#include "HepMC/GenEvent.h"
#include <iostream>
#include <fstream>
#include <cstdlib>
#include <vector>
#include <string.h>
#include <algorithm>
#include "HepMC/IO_HEPEVT.h"
#include "HepMC/IO_HERWIG.h"
#include "HepMC/IO_GenEvent.h"
#include "HepMC/IO_AsciiParticles.h"
#include "HepMC/GenEvent.h"

extern "C" {
  extern struct {
    int NUP,IDPRUP,IDUP[500],ISTUP[500],MOTHUP[500][2],ICOLUP[500][2];
    double XWGTUP,SCALUP,AQEDUP,AQCDUP,PUP[500][5],VTIMUP[500],SPINUP[500];
  } hepeup_;
}


// filling HepMC weight container
void fill_eweight(HepMC::GenEvent*);
void fill_exsec(HepMC::GenEvent*);

#endif
