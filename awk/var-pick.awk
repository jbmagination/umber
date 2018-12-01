#!/usr/bin/awk -f
BEGIN {
   ab = ARGV[1]
   delete ARGV[1]
   if (ab == 1)
   {
      split("a b c d e f g h k m n o p q r s t u v w x z", out)
   }
   else if (ab == 2 || ab == 3)
   {
      split("a b c d e f h k n o p q r s t v x z", good)
      bad["ar"] bad["bc"] bad["cc"] bad["cd"] bad["cp"] bad["dc"] bad["dd"]
      bad["df"] bad["do"] bad["ed"] bad["ex"] bad["fc"] bad["no"] bad["od"]
      bad["pr"] bad["ps"] bad["sh"] bad["tr"]
      for (ca = 1; ca in good; ca++)
      {
         for (dh = 1; dh in good; dh++)
         {
            if (ca == dh || (good[ca] good[dh]) in bad)
            {
               continue
            }
            out[++ef] = good[ca] good[dh]
         }
      }
   }
   else
   {
      print "var-pick.awk <1|2|3>"
      exit 1
   }
}
{
   for (ca in out)
   {
      if (index(tolower($0), out[ca]))
      {
         out[ca] = 0
      }
   }
}
END {
   for (ca = 1; ca in out; ca++)
   {
      if (!out[ca])
      {
         continue
      }
      split(out[ca], fs, //)
      if (ab == 2)
      {
         if (fs[1] in used || fs[2] in used)
         {
            continue
         }
         used[fs[1]]
         used[fs[2]]
      }
      if (ab == 3)
      {
         if (fs[1] in fir || fs[2] in sec)
         {
            continue
         }
         fir[fs[1]]
         sec[fs[2]]
      }
      print out[ca]
   }
}
