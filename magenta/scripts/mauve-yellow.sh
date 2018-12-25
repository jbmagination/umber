#!/bin/dash -e
if [ "$#" != 2 ]
then
   echo 'mauve-yellow.sh <directory> <letter>'
   exit 1
fi
dr=$1
lt=$2

case $lt in
a|b|c)
   fe=yellow-a-c.yml
   ;;
d|e|f|g)
   fe=yellow-d-g.yml
   ;;
h|i|j|k|l|m|n|o|p|q)
   fe=yellow-h-q.yml
   ;;
r|s|t|u|v|w|x|y|z)
   fe=yellow-r-z.yml
esac

cd "$dr"
# need at least 6 chars to be unique, which is 5+1
exec git blame --color-by-age --abbrev=5 --date=relative "$fe"
