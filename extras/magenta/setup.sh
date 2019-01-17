#!/bin/dash -e
case $1 in
-i)
   ln -f -s "$PWD"/magenta-yellow.sh "$PWD"/magenta-avail.sh /usr/local/bin
   ln -f -s "$PWD"/../docs/magenta.json /usr/local/share
   ;;
-r)
   rm -f /usr/local/bin/yellow.sh
   ;;
*)
   echo 'synopsis: setup.sh <operation>
operations:
   -i: install
   -r: remove'
esac
