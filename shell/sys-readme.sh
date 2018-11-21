#!/bin/dash -e
find -name .git -prune -o -type d -print |
while read each
do
   echo "$each"
   >> "$each"/readme.md
done
