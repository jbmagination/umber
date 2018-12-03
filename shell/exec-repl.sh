#!/bin/dash
exec php -r '
while ($_q = fgets(STDIN))
{
   print "=> " . var_export(eval("return " . $_q), 1) . "\n";
}
' "$@"
