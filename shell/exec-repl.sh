#!/bin/dash -e
if [ "$#" = 0 ]
then
   echo 'synopsis: exec-repl.sh <language> [arguments]

language:
- perl
- php
- python
- ruby'
   exit 1
fi
z=$1
shift

case $z in
pl|perl)
   exec perl -e '
   use English;
   use feature say;
   use open qw(:std :utf8);
   $LIST_SEPARATOR = "\n";
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
py|python)
   exec python3 -i - "$@"
   ;;
rb|ruby)
   exec ruby -r ripl -e Ripl::Runner.run - "$@"
esac
