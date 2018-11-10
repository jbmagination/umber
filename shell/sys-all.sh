#!/bin/dash
# cant use "-e", might be running "grep"
if [ "$#" = 0 ]
then
   echo 'sys-all.sh <path> [command-line]'
   exit 1
fi
q=$(realpath "$1")
shift

for z in "$q"/*/
do
   cd "$z"
   printf '\33[1;36m%s\33[m\n' "$z"
   "$@"
done
