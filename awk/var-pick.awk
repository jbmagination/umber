#!/usr/bin/awk -f
BEGIN {
   ab = ARGV[1]
   delete ARGV[1]
   if (ab == 1)
   {
      split("a b c d e f g h k m n o p q r s t u v w x z", out)
   }
   else if (ab == 2)
   {
      split("a b c d e f h k n o p q r s t v x z", good)
      bad["ar"] bad["bc"] bad["cc"] bad["cd"] bad["cp"] bad["dc"] bad["dd"]
      bad["df"] bad["do"] bad["ed"] bad["ex"] bad["fc"] bad["od"] bad["pr"]
      bad["ps"] bad["sh"] bad["tr"]
      for (bd = 1; bd in good; bd++)
      {
         for (ca = 1; ca in good; ca++)
         {
            if (bd == ca || (good[bd] good[ca]) in bad)
            {
               continue
            }
            out[++dh] = good[bd] good[ca]
         }
      }
   }
   else
   {
      print "var-pick.awk <1|2>"
      exit 1
   }
}
{
   for (bd in out)
   {
      if (index(tolower($0), out[bd]))
      {
         out[bd] = 0
      }
   }
}
END {
   for (bd = 1; bd in out; bd++)
   {
      if (!out[bd])
      {
         continue
      }
      if (ab == 2)
      {
         split(out[bd], fs, //)
         if (fs[1] in fir || fs[2] in sec)
         {
            continue
         }
         fir[fs[1]]
         sec[fs[2]]
      }
      print out[bd]
   }
}
