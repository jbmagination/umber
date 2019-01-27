#!/bin/dash -e
case $1 in
-i)
   mkdir -p /usr/share/magenta
   ln -f -s "$PWD"/../assets/data.json /usr/share/magenta
   ln -f -s "$PWD"/available.awk "$PWD"/slugify.sh "$PWD"/yellow.sh /usr/bin
   ;;
-r)
   cd /usr
   rm -f -r bin/available.awk bin/slugify.sh bin/yellow.sh share/magenta
   ;;
*)
   echo 'synopsis: setup.sh <operation>
operations:
   -i: install
   -r: remove'
esac
