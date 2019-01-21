#!/bin/dash -e
case $1 in
-i)
   mkdir -p /usr/local/share/magenta
   ln -f -s "$PWD"/../assets/data.json /usr/local/share/magenta
   ln -f -s "$PWD"/available.awk "$PWD"/rename.sh "$PWD"/yellow.sh \
   /usr/local/bin
   ;;
-r)
   cd /usr/local
   rm -f -r bin/available.awk bin/rename.sh bin/yellow.sh share/magenta
   ;;
*)
   echo 'synopsis: setup.sh <operation>
operations:
   -i: install
   -r: remove'
esac
