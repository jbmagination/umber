#!/bin/dash -e
if [ "$#" != 1 ]
then   
   echo 'synopsis: rename.sh <action>
action:
- test
- run'   
   exit 1
fi

for q in *
do
   case $q in
   *.mp3)
      z=$(awk '
      BEGIN {
         gsub(/\.mp3$/, "", ARGV[1])
         gsub(/[().\47]/, "", ARGV[1])
         gsub(/, /, "-", ARGV[1])
         gsub(/ /, "-", ARGV[1])
         print tolower(ARGV[1]) ".mp3"
      }
      ' "$q")
      ;;
   *.jpg)
      z=image.jpg
      ;;
   *)
      continue
   esac

   case $1 in
   test)
      echo "$z"
      ;;
   run)
      mv "$q" "$z"
   esac
done
