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
   ln -f -s "$PWD"/magenta-yellow.sh "$PWD"/magenta-avail.sh /usr/local/bin
   ln -f -s "$PWD"/../docs/magenta.json /usr/local/share
   ;;
-r)
   rm -f /usr/local/bin/yellow.sh
esac
