#!/usr/local/bin/velour -f
BEGIN {
   if (ARGC != 5)
   {
      print "tryst.awk <from name> <user> <recipient> <URL>"
      exit 1
   }
   nam = ARGV[1]
   usr = ARGV[2]
   rcp = ARGV[3]
   url = ARGV[4]
   FS = OFS = ": "
   "mktemp /tmp/XXX" | getline uf
   while ("curl " k_se(url) | getline)
   {
      NR++
      if (body)
      {
         if (NR == body)
         {
            printf "On %s, %s wrote:\n", xr[1], zu[1] > uf
         }
         # need to account for empty lines and quoted lines
         print (/^[^>]/ ? "> " : ">") $0 > uf
      }
      else if ($1 == "Date")
      {
         s_split($2, xr, " [-+]")
      }
      else if ($1 == "From")
      {
         s_split($2, zu, " <")
         $2 = nam
         print > uf
         print "To", rcp > uf
      }
      else if ($1 == "Subject")
      {
         if ($2 != "Re")
         {
            $2 = "Re: " $2
         }
         print > uf
      }
      else if (s_downcase($1) == "message-id")
      {
         $1 = "References"
         print > uf
      }
      else if (!$0)
      {
         body = NR + 1
         print "Content-Type: text/plain; charset=utf8; format=flowed" > uf
         print "User-Agent: Tryst/2.8.0 (github.com/cup/umber#tryst)" > uf
         print > uf
      }
   }
   a_new(xr, ENVIRON["EDITOR"], uf)
   kv_trace(xr)
   a_new(xr, "curl", "-u", usr, "--mail-from", usr "@gmail.com",
   "--mail-rcpt", rcp, "--upload-file", uf, "smtps://smtp.gmail.com")
   kv_trace(xr)
}
