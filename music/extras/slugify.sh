#!/bin/dash -e
if [ "$#" != 1 ]
then
   echo 'synopsis: slugify.sh <action>
action:
- test
- run'
   exit 1
fi

slugify()
{
   awk '
   BEGIN {
      gsub(ARGV[2], "", ARGV[1])
      gsub(/[]().[_+\47]/, "", ARGV[1])
      gsub(/ ?[&,-] /, "-", ARGV[1])
      gsub(/ +/, "-", ARGV[1])
      print tolower(ARGV[1]) ARGV[3]
   }
   ' "$@"
}

for q in *
do
   case $q in
   *.m4a)
      z=$(slugify "$q" '\.m4a$' .m4a)
      ;;
   *.mp3)
      z=$(slugify "$q" '\.mp3$' .mp3)
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

slugify "$PWD"
