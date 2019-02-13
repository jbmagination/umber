#!/bin/dash -e
case $1 in
-i)
   mkdir -p /usr/share/mauve
   ln -f -s "$PWD"/../assets/1.json /usr/share/mauve
   ln -f -s "$PWD"/available.awk /usr/bin
   ;;
-r)
   rm -f -r /usr/bin/available.awk /usr/share/mauve
   ;;
*)
   echo 'synopsis: setup.sh <operation>
operations:
   -i: install
   -r: remove'
esac
