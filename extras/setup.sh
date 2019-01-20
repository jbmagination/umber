#!/bin/dash -e
case $1 in
-i)
   mkdir -p /usr/local/share/mauve
   ln -f -s "$PWD"/../assets/data.json /usr/local/share/mauve
   ln -f -s "$PWD"/available.awk /usr/local/bin
   ;;
-r)
   cd /usr/local
   rm -f -r bin/available.awk share/mauve
   ;;
*)
   echo 'synopsis: setup.sh <operation>
operations:
   -i: install
   -r: remove'
esac
