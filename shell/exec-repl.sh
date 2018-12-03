#!/bin/dash -e
case $1 in
perl)
   shift
   perl -n -E 'say "=> ", eval' - "$@"
   ;;
php)
   shift
   exec php -r '
   while ($_q = fgets(STDIN))
   {
      print "=> " . var_export(eval("return " . $_q), 1) . "\n";
   }
   ' "$@"
   ;;
*)
   echo 'synopsis: exec-repl.sh <language> [arguments]

language:
- perl
- php'
   exit 1
esac
