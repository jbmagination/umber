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
perl)
   exec perl -E '
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
   exec python3 -i - "$@"
   ;;
ruby)
   exec ruby -r ripl -e Ripl::Runner.run - "$@"
esac
