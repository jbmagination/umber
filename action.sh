#!/bin/dash -e
if [ "$#" != 1 ]
then
   echo 'synopsis: action.sh <operation>
operations:
   -i: install
   -r: remove'
   exit 1
fi
case $1 in
-i)
   find "$PWD"/awk "$PWD"/shell -executable -type f \
   -exec ln -f -s -t /usr/local/bin {} +
   ;;
-r)
   find /usr/local/bin -lname "$PWD/*" -delete -print
esac
