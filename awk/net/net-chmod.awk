#!/usr/local/bin/velour -f
# no extension can be either one, so do not define it
BEGIN {
   q["awk"] = 100755
   q["bash_logout"] = 100644
   q["c"] = 100644
   q["conf"] = 100644
   q["css"] = 100644
   q["gitconfig"] = 100644
   q["gitignore"] = 100644
   q["h"] = 100644
   q["html"] = 100644
   q["ico"] = 100644
   q["imp"] = 100644
   q["ini"] = 100644
   q["inputrc"] = 100644
   q["jpg"] = 100644
   q["js"] = 100644
   q["json"] = 100644
   q["md"] = 100644
   q["profile"] = 100644
   q["rc"] = 100644
   q["sh"] = 100755
   q["tex"] = 100644
   q["ti"] = 100644
   q["txt"] = 100644
   q["woff2"] = 100644
   q["xml"] = 100644
   q["yml"] = 100644
   while ("git ls-files -s" | getline)
   {
      if ($1 != q[io_ext($NF)])
      {
         printf "chmod %s %s\n",
         $1 == 100644 ? "+x" : "-x", $NF
      }
   }
}
