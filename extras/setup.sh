#!/bin/dash -e
case $1 in
-i)
   mkdir -p /usr/share/umber
   ln -f -s "$PWD"/../radio/assets/data.json /usr/share/umber
   ln -f -s "$PWD"/available.awk /usr/bin
   ;;
-r)
   rm -f -r /usr/bin/available.awk /usr/share/umber
   ;;
*)
   echo 'synopsis: setup.sh <operation>
operations:
   -i: install
   -r: remove'
esac
