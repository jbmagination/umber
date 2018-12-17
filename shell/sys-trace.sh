#!/bin/dash
# some commands are supposed to fail
ab=2,4,8,20,80,100,200,400,1000,2000,4000,8000,10000,40000,100000
cf=10,40,800,20000

if [ "$2" = 2 ]
then
   ab=$ab,$cf
elif [ "$2" != 1 ]
then
   echo "synopsis: sys-trace.sh <language> <mask> <script>...

language:
- awk
- bash
- dash

mask:
   1: $ab
   2: $ab,
      $cf

note: if a file 'input.txt' is found, it will be used with Awk"
   exit 1
fi
de=$1
shift 2

for hk
do
   case $de in
   awk)
      if [ -f input.txt ]
      then
         strace -m "$ab" -o "$hk".log gawk -f "$hk" input.txt
      else
         strace -m "$ab" -o "$hk".log gawk -f "$hk"
      fi
      ;;
   bash)
      strace -m "$ab" -o "$hk".log bash "$hk"
      ;;
   dash)
      strace -m "$ab" -o "$hk".log dash "$hk"
   esac
   echo
   shift
   set "$@" "$hk".log
done

wc -l "$@"
