#!/bin/bash

# this script attach plot description data from Rivet data directory
#   rivet-config --datadir
#   (files *.plot)

fname="$1"

if [[ "$fname" == "" ]] ; then
  echo "ERROR: missing file name"
  exit 1
fi

if grep -q "# BEGIN PLOT" $fname ; then
  echo "ERROR: file $fname already completed"
  exit 1
fi

# attach "PLOT" section:
histo=$(cat $fname | grep -m 1 AidaPath | cut -d = -f 2)
analyse=$(echo $histo | cut -d / -f 2)
data="$(rivet-config --datadir) $RIVET_ANALYSIS_PATH"

#echo "fname = $fname"
#echo "histo = $histo"
#echo "analyse = $analyse"
#echo "data = $data"

find $data -type f -name "$analyse.plot" | head -n 1 | xargs cat | sed "s,^##,#,g" | grep -A 100 "$histo" | sed -n "1,/^# END PLOT/ p" >> $fname
