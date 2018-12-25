#!/usr/bin/awk -f
BEGIN {
   if (ARGC != 2)
   {
      print "mauve-avail.awk <artist>"
      exit 1
   }
   while (getline qu < "/usr/local/share/mauve.json" > 0)
   {
      split(qu, xr, /\"/)
      if (tolower(xr[4]) ~ ARGV[1])
      {
         zu = "GOOD"
         while ("curl -s https://www.youtube.com/watch?v=" xr[2] | getline qu)
         {
            if (index(qu, "video contains content") ||
            index(qu, "video is not available") ||
            index(qu, "video is only available to Music Premium") ||
            index(qu, "video is unlisted"))
            {
               zu = "BAD"
            }
         }
         print zu, xr[4]
      }
   }
}
