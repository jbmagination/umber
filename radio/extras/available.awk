#!/usr/bin/awk -f
BEGIN {
   if (ARGC != 2) {
      print "available.awk <artist>"
      exit 1
   }

   while (getline aa < "/usr/local/share/umber/data.json" > 0) {
      split(aa, bb, "\"")

      if (tolower(bb[4]) ~ ARGV[1]) {
         ee = "GOOD"
         sub("^y/", "", bb[2])

         while ("curl -s https://www.youtube.com/watch?v=" bb[2] | getline aa) {
            if (index(aa, "uploader has not made this video available") ||
            index(aa, "video is no longer available") ||
            index(aa, "video is not available") ||
            index(aa, "video is only available to Music Premium") ||
            index(aa, "video is unlisted")) {
               ee = "BAD"
            }
         }
         print ee, bb[4]
      }
   }
}
