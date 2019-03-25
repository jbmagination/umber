#!/usr/bin/awk -f
BEGIN {
   if (ARGC != 2)
   {
      print "available.awk <artist>"
      exit 1
   }
   while (getline ac < "/usr/share/umber/data.json" > 0)
   {
      split(ac, bd, /\"/)
      if (tolower(bd[4]) ~ ARGV[1])
      {
         ef = "GOOD"
         while ("curl -s https://www.youtube.com/watch?v=" bd[2] | getline ac)
         {
            if (index(ac, "video contains content") ||
            index(ac, "video is not available") ||
            index(ac, "video is only available to Music Premium") ||
            index(ac, "video is unlisted"))
            {
               ef = "BAD"
            }
         }
         print ef, bd[4]
      }
   }
}
