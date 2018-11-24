#!/usr/local/bin/velour -f
# no extension can be either one, so do not define it
BEGIN {
   q["bash_logout"] = q["c"] = q["conf"] = q["css"] = q["gitconfig"] = 100644
   q["gitignore"] = q["h"] = q["html"] = q["ico"] = q["imp"] = 100644
   q["ini"] = q["inputrc"] = q["jpg"] = q["js"] = q["json"] = q["md"] = 100644
   q["profile"] = q["rc"] = q["tex"] = q["ti"] = q["txt"] = 100644
   q["woff2"] = q["xml"] = q["yml"] = 100644
   q["awk"] = q["sh"] = 100755
   while ("git ls-files -s" | getline)
   {
      if ($1 != q[io_ext($NF)])
      {
         printf "git update-index --chmod=%s %s\n",
         $1 == 100644 ? "+x" : "+x", $NF
      }
   }
}
