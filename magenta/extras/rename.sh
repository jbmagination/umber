#!/bin/dash -e
if [ "$#" != 1 ]
then   
   echo 'synopsis: rename.sh <action>
action:
- test
- run'   
   exit 1
fi

slug()
{
   awk '
   BEGIN {
      gsub(ARGV[2], "", ARGV[1])
      gsub(/[]().[\47]/, "", ARGV[1])
      gsub(/ ?[-&,] /, "-", ARGV[1])
      gsub(/ /, "-", ARGV[1])
      print tolower(ARGV[1]) ARGV[3]
   }
   ' "$@"
}

for q in *
do
   case $q in
   *.m4a)
      z=$(slug "$q" '\.m4a$' .m4a)
      ;;
   *.mp3)
      z=$(slug "$q" '\.mp3$' .mp3)
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

slug "$PWD"
