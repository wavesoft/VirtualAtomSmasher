rm -f config.mk file

echo CXX=g++ > config.mk
echo FC = gfortran >> config.mk
echo FFLAGS = -O2 -fno-automatic -fno-backslash -ffast-math >> config.mk
echo CFLAGS = -O2 >> config.mk
echo CXXFLAGS = -O2 -ansi -pedantic -W -Wall >> config.mk
echo PYTHIA6LOCATION = $MCGENERATORS/$generatorPS/$versionPS/$LCG_PLATFORM/lib >> config.mk
echo ALPGENINSTALLED = $MCGENERATORS/$generatorME/$versionME/share >> config.mk
echo ALPGENLIBS = $MCGENERATORS/$generatorME/$versionME/$LCG_PLATFORM/lib/archive >> config.mk
echo HEPMC = $HEPMC >> config.mk
