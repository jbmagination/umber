#!/bin/dash
# some commands are supposed to fail
case $1 in
1)
   q=80,100,2000,20000,40000
   ;;
2)
   q=10,40,80,100,800,2000,20000,40000
   ;;
*)
   echo 'synopsis: sys-trace.sh <mask> <file>...
mask:
   1: 80,100,2000,20000,40000
   2: 10,40,80,100,800,2000,20000,40000'
   exit 1
esac
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
   shift
   set "$@" "$z".log
done

echo
wc -l "$@"
