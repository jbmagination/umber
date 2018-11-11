#!/bin/dash -e
# we dont need ".." because github provide a "/" on every page

for q in */
do
   z=${q%/}
   if [ ! -d "$z" ]
   then
      continue
   fi
   printf -- '- [`%s`](%s)\n' "$q" "$z"
done

for q in *.md
do
   z=${q%.md}
   case $z in
   index|readme)
      continue
   esac
   printf -- '- [`%s`](%s)\n' "$q" "$z"
done

printf '\n%s\n' '{% include_relative readme.md %}'
