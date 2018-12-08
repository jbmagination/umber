#!/usr/local/bin/velour -f
function tg(mix,   ab, cf)
{
   for (ab = 100; ab >= 1; ab /= 10)
   {
      a_push(cf, m_div(mix, ab))
      mix %= ab
   }
   return a_join(cf, ".")
}
BEGIN {
   if (k_system("[ -d .git ]"))
   {
      print a_create("local:", "   1: commit program change",
      "   2: commit version change", "   3: tag new version", "", "remote:",
      "   1: push commits", "   2: push release")
      exit 1
   }
   "git mktree </dev/null" | getline dh
   "git for-each-ref --sort -refname" | getline
   ek = $1
   np = s_gsub($3, "[^[:digit:]]", "")
   while ("git diff-tree --numstat " dh " " ek | getline)
   {
      if (!/license/)
      {
         oq += $1
      }
   }
   while ("git diff-tree --numstat " ek " @" | getline)
   {
      if (!/license/)
      {
         rv[1] += $1
         rv[2] += $2
      }
   }
   sx = a_max(rv) / oq * 100
   tz = sx < 100 ? sx < 10 ? 1 : 10 : 100
   printf "old tag = %s\n", tg(np)
   printf "old tag lines = %d\n", oq
   printf "new tag insertions = %d\n", rv[1]
   printf "new tag deletions = %d\n", rv[2]
   printf "\33[1;33m%d/%d = %d%\33[m\n", a_max(rv), oq, sx
   printf "new tag = %s\n", tg(tz * m_div(tz + np, tz))
}
