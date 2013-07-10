all: merge.exe

merge.exe: merge.cc
	g++ merge.cc -o merge.exe

clean:
	rm -f merge.exe

check: test1 test1f test2 test2f test3f test4 test5 test5f test6 test6f test7

# two profiles
test1:
	./merge.exe 0 data/profile-024.dat data/profile-5.dat test1.dat
	diff -u data/profile-merged.dat test1.dat

# same profiles, normal reaction is fail
test1f:
	! ./merge.exe 0 data/profile-5.dat data/profile-5.dat test1f.dat

# two histograms
test2:
	./merge.exe 0 data/histo-012345.dat data/histo-6.dat test2.dat
	diff -u data/histo-merged.dat test2.dat

# same histograms, fail
test2f:
	! ./merge.exe 0 data/histo-6.dat data/histo-6.dat test2f.dat

# different kinds of histograms, fail
test3f:
	! ./merge.exe 0 data/profile-024.dat data/histo-6.dat test3f.dat

# two DPS
test4:
	./merge.exe 0 data/dps-100k.dat data/dps-1M.dat test4.dat
	diff -u data/dps-merged.dat test4.dat

# ALPGEN_XSECT merge mode
test5:
	./merge.exe 1 data/alpgen-xs-0.dat data/alpgen-xs-1.dat data/alpgen-xs-2.dat test5.dat
	diff -u data/alpgen-xs-merged.dat test5.dat

# same histograms in ALPGEN_XSECT merge mode, fail
test5f:
	! ./merge.exe 1 data/alpgen-xs-1.dat data/alpgen-xs-2.dat data/alpgen-xs-1.dat test5f.dat

# ALPGEN_FIXED merge mode
test6:
	./merge.exe 2 data/alpgen-fix-2.dat data/alpgen-fix-3.dat test6.dat
	diff -u data/alpgen-fix-merged.dat test6.dat

# same histograms in ALPGEN_FIXED merge mode, fail
test6f:
	! ./merge.exe 2 data/alpgen-fix-2.dat data/alpgen-fix-2.dat test6f.dat

# histograms with missing PLOT section
test7:
	./merge.exe 0 data/noplot-1k.dat data/noplot-4M.dat test7.dat
	diff -u data/noplot-merged.dat test7.dat
