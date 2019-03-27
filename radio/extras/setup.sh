#!/bin/dash -e
case $1 in
-i)
   ln -f -s "$PWD"/slugify.sh /usr/local/bin
   ;;
-r)
   rm -f /usr/local/bin/slugify.sh
   ;;
*)
   echo 'synopsis: setup.sh <operation>
operations:
   -i: install
   -r: remove'
esac
