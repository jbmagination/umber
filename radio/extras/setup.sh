#!/bin/dash -e
aa=$PWD

case $1 in
-i)
   cd /usr/local/bin
   ln -f -s "$aa"/available.awk
   ln -f -s "$aa"/release.sh
   mkdir -p /usr/local/share/umber
   cd /usr/local/share/umber
   ln -f -s "$aa"/../assets/data.json
   ;;
-r)
   cd /usr/local/bin
   rm -f available.awk
   rm -f release.sh
   cd /usr/local/share
   rm -f -r umber
   ;;
*)
   echo 'synopsis: setup.sh <operation>
operations:
   -i: install
   -r: remove'
esac
