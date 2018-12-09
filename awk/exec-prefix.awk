#!/usr/local/bin/velour -f
BEGIN {
   if (ARGC != 3)
   {
      print a_create("synopsis: exec-prefix.awk <machine> <compiler>", "",
      "machine:", "- cygwin", "- mingw32", "", "compiler:", "- g++", "- gcc",
      "", "packages:", "- gcc-core", "- gcc-g++", "- mingw64-x86_64-gcc-core",
      "- mingw64-x86_64-gcc-g++")
     exit 1
   }
   FS = "[ =\"]+"
   if (ARGV[1] == "cygwin" && ARGV[2] == "g++")
   {
      ab = "x86_64-pc-cygwin-g++ -x c++"
   }
   if (ARGV[1] == "cygwin" && ARGV[2] == "gcc")
   {
      ab = "x86_64-pc-cygwin-gcc -x c"
   }
   if (ARGV[1] == "mingw32" && ARGV[2] == "g++")
   {
      ab = "x86_64-w64-mingw32-g++ -x c++"
   }
   if (ARGV[1] == "mingw32" && ARGV[2] == "gcc")
   {
      ab = "x86_64-w64-mingw32-gcc -x c"
   }
   while (ab " -E -v /dev/null 2>&1" | getline)
   {
      # include
      if (/^ [^ ]+$/)
      {
         a_push(ce, $0)
      }
      # include
      if ($2 == "nonexistent")
      {
         a_push(ce, $4)
      }
      # lib
      if ($1 == "LIBRARY_PATH")
      {
         if (index($2, ";"))
         {
            split($2, dh, /;/)
         }
         else
         {
            split($2, dh, /:/)
         }
         a_concat(ce, dh)
      }
   }
   while ("realpath -m " a_join(ce, " ") | getline)
   {
      if ($0 in fk == 0)
      {
         print
         fk[$0]
      }
   }
}
