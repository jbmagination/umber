#!/usr/bin/awk -f
# FIXME: single letter variables
BEGIN {
   split("a b c d e f h k n o p q r s t v x z", good)
   bad["ar"] bad["bc"] bad["cc"] bad["cd"] bad["cp"] bad["dc"] bad["dd"]
   bad["df"] bad["do"] bad["ed"] bad["ex"] bad["fc"] bad["od"] bad["pr"]
   bad["ps"] bad["sh"] bad["tr"]
   for (one = 1; one in good; one++)
   {
      for (two = 1; two in good; two++)
      {
         if (one == two || (good[one] good[two]) in bad)
         {
            continue
         }
         out[++thr] = good[one] good[two]
      }
   }
}
{
   for (one in out)
   {
      if (index(tolower($0), out[one]))
      {
         out[one] = 0
      }
   }
}
END {
   for (one = 1; one in out; one++)
   {
      if (!out[one])
      {
         continue
      }
      split(out[one], fs, //)
      if (fs[1] in fir || fs[2] in sec)
      {
         continue
      }
      fir[fs[1]]
      sec[fs[2]]
      print out[one]
   }
}
