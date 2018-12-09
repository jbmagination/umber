#!/bin/dash
# some commands are supposed to fail
q=2,4,8,20,80,100,200,400,1000,2000,4000,8000,10000,40000,100000
v=10,40,800,20000

if [ "$1" = 2 ]
then
   q=$q,$v
elif [ "$1" != 1 ]
then
   echo "synopsis: sys-trace.sh <mask> <file>...
mask:
   1: $q
   2: $q,
      $v"
   exit 1
fi
shift

for z
do
   case ${z##*.} in
   awk)
      strace -m "$q" -o "$z".log gawk -f "$z"
      ;;
   sh)
      strace -m "$q" -o "$z".log dash "$z"
   esac
   echo
   shift
   set "$@" "$z".log
done

wc -l "$@"
