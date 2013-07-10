#!/bin/bash

# generate Alpgen unweighted events using alpgen scripts from $3
# and put results to the current directory
# params:
# $1=path to alpgen installation (in GENSER)
# $2=Alpgen params file 
# $3=dir with alpgen utils and scripts (param. file parsing, filters, pdflinks)
#-----------------------------------------------------------------------------------------
# body

tmp_alpdir=$1
tmp_params=$2
tmp_alptools=$3

# Alpgen steering utils and params
source $tmp_alptools/utils_alp/section.sh

# Alpgen process string
alpproc=$(section $tmp_params process)

tmp_alpsrc=$tmp_alpdir/../share/alpgen-author

# get and configure weighted events level filter,
# filter implem: alpgen/mcrun_alp/filters/${alpproc}usr_FILTERNAME.f

rm -f tmp_filtfile.txt
section $tmp_params filter > tmp_filtfile.txt

if [[ "$(cat tmp_filtfile.txt | wc -l)" != "0" ]] ; then
    exec<tmp_filtfile.txt
    # fetch the filter
    read line
    tmp_fname=$(echo $line | sed 's,  *, ,g' | cut -d ' ' -f 2)
    echo "Using filter $tmp_fname"
    
    cp $tmp_alptools/mcrun_alp/filters/${alpproc}usr_${tmp_fname}.f ${alpproc}usr.f
    # collect filter values:
    while read line ; do
	tmp_param=$(echo $line | sed 's,  *, ,g' | cut -d ' ' -f 1) 
	tmp_val=$(echo $line | sed 's,  *, ,g' | cut -d ' ' -f 2)
	sed -e "s,%${tmp_param}%,${tmp_val}," -i ${alpproc}usr.f
    done
else
    # no filter, use Alpgen default usr file
    cp ${tmp_alpsrc}/${alpproc}work/${alpproc}usr.f .   
fi

# make links to the included files:
ln -s ${tmp_alpsrc}/${alpproc}work/${alpproc}.inc ${alpproc}.inc
ln -s ${tmp_alpsrc}/alplib/alpgen.inc alpgen.inc

# enable using non-default pdf-s:
cp ${tmp_alpsrc}/alplib/pdfdat/pdflnk .
sed -e "s,\.\.,${tmp_alpsrc}," -i pdflnk
./pdflnk

# make alpgen executable for event generation:
ln -s $tmp_alptools/mcrun_alp/Makefile
make gen prc=$alpproc ALPGEN=$tmp_alpdir

if [[ "$?" != "0" ]] ; then
  echo "ERROR: fail to compile alpgen wrapper code"
  exit 1
fi

# weighted events
section $tmp_params genwgt | ./${alpproc}gen.exe

# unweighted events
section $tmp_params genuwgt | ./${alpproc}gen.exe

