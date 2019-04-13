#!/bin/dash -e
case $1 in
-i)
   mkdir -p /usr/share/umber
   ln -f -s "$PWD"/../assets/data.json /usr/share/umber
   ln -f -s "$PWD"/available.awk "$PWD"/release.sh /usr/bin
   ;;
-r)
   rm -f -r /usr/bin/available.awk /usr/bin/release.sh /usr/share/umber
   ;;
*)
   echo 'synopsis: setup.sh <operation>
operations:
   -i: install
   -r: remove'
esac
