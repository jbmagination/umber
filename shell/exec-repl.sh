#!/bin/dash -e
z=$1
shift

case $z in
perl)
   perl -E '
   while (<STDIN>)
   {
      say "=> ", eval
   }
   ' "$@"
   ;;
php)
   exec php -r '
   while ($_q = fgets(STDIN))
   {
      print "=> " . var_export(eval("return " . $_q), 1) . "\n";
   }
   ' "$@"
   ;;
python)
   python3 -i - "$@"
   ;;
ruby)
   ripl - "$@"
   ;;
*)
   echo 'synopsis: exec-repl.sh <language> [arguments]

language:
- perl
- php
- python
- ruby'
   exit 1
esac
