#!/bin/dash -e
if [ "$#" != 1 ]
then
   echo 'release.sh <song count>'
   exit 1
fi

count=$1
tagf=$(mktemp)
jsonf=$(mktemp)
album_id=$(awk '
BEGIN {
   srand()
   print srand()
}
')

echo 'ARTIST - ALBUM' > "$tagf"
while [ "$count" -gt 0 ]
do
   song_id=$(( album_id + count ))
   echo "$song_id: SONG" >> "$tagf"
   cat >> "$jsonf" <<eof
[$song_id, 0000, "gh_$album_id", "ARTIST - SONG"],
eof
   count=$(( count - 1 ))
done

"$EDITOR" "$tagf"
git tag -F "$tagf" "$album_id"
git push --tags

cat "$jsonf" - <<eof
1. add new JSON record
2. remove old JSON record
3. remove old local tag
4. add files to new release
5. remove old release
6. remove old remote tag
eof
