#!/bin/dash
# some commands are supposed to fail
if [ "$#" = 0 ]
then
   echo 'sys-trace.sh <file>...'
   exit 1
fi

for each
do
   strace -m 80,100,2000,20000,40000 -o /tmp/"$each".log gawk -f "$each"
   shift
   set "$@" "$each".log
done

wc -l "$@"
