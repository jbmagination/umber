#!/bin/dash -e
: 'if we have a match that means:
- our pattern is vague
- we need to add to an existing album
if our pattern is vague - we just need to rerun with a better pattern
if our pattern is fine - we need to "git tag -f"
on first run we provide a pattern
on second run we provide a tag'
tagf=$(mktemp)

tstamp=$(awk '
BEGIN {
   srand()
   print srand()
}
')

song_id=$(( tstamp + 1 ))

case $# in
1)
   apat=$1
   album_id=$tstamp

   if git tag -n1 | grep -i -- "$apat"
   then
      exit 1
   fi
   {
      echo 'ARTIST - ALBUM'
      echo
      echo "$song_id: SONG"
   } > "$tagf"
;;
2)
   album_id=$2
   {
      git tag -l --format='%(contents:subject)' "$album_id"
      echo
      echo "$song_id: SONG"
      git tag -l --format='%(contents:body)' "$album_id"
   } > "$tagf"
;;
*)
   echo 'release.sh [-f] <target>

target:
- album pattern
- existing tag, include "-f"'
   exit 1
esac

"$EDITOR" "$tagf"
git tag -f -F "$tagf" "$album_id"
git push -f --tags

cat <<eof

[$song_id, 0000, "g/$album_id", "ARTIST - SONG"],

1. add new JSON record
2. add "$song_id" and "image.jpg" to new release
eof
