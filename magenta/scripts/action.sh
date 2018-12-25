#!/bin/dash -e
if [ "$#" != 1 ]
then
   echo 'synopsis: action.sh <operation>
operations:
   -i: install
   -r: remove'
   exit 1
fi
case $1 in
-i)
   ln -f -s "$PWD"/mauve-yellow.sh "$PWD"/mauve-avail.sh /usr/local/bin
   ln -f -s "$PWD"/../docs/mauve.json /usr/local/share
   ;;
-r)
   rm -f /usr/local/bin/yellow.sh
esac
