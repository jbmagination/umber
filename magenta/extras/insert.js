'use strict';
/* needs to work in playlist view */
var vd = new URL(location).searchParams.get('v');

/* innerHTML leaves HTML entities. textContent destroys breaks. */
var dc = document.getElementById('eow-description').innerText;

/* dont combine this with other variable declarations as it will be temping to
alphabetize them. just because it has year doesnt mean its a "topic" video */
var extras = dc.split('\n').find(ae => ae.includes('·'));

var dn = Math.floor(new Date / 1000);

var xc = document.createElement('textarea');
xc.cols = 70;
xc.style.font = 'medium Consolas';
xc.style.position = 'fixed';
xc.style.right = 0;
xc.style.top = '50px';
xc.style.zIndex = 6;
document.body.append(xc);

if (extras)
{
   var entry = extras.split(' · ');

   /* this needs to be before artist */
   var song = entry.shift();
   var artist = entry.join(' & ');

   /* sometimes you will only have publication year,
   and sometimes you will only have release year */
   var year = dc.match(/\d{4}/)[0];
   xc.textContent = `[${dn}, ${year}, "${vd}", "${artist} - ${song}"],`;
}
else
{
   var entry = ytplayer.config.args.title;

   /* i was originally doing the current year, but then i would forget to
   change it. some non "topic" videos have parsed metadata in the description.
   i suppose we could add a 3rd case to account for those which would allow
   graceful degradation before we get to this point, but that is for another
   day. */
   xc.textContent = `[${dn}, 0000, "${vd}", "${entry}"],`;
}
