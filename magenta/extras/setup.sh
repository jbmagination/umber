#!/bin/dash -e
case $1 in
-i)
   ln -f -s "$PWD"/yellow.sh /usr/local/bin
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
