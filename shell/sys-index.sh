#!/bin/dash -e
find -name .git -prune -o -type d -print |
while read each
do
   {
      echo '{% include nav.html %}'
      if [ -f "$each"/readme.md ]
      then
         echo '{% include_relative readme.md %}'
      fi
   } > "$each"/index.md
done
