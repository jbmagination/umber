'use strict';
/* needs to work in playlist view */
var vdeo = document.querySelector('[itemprop="videoId"]').content;

/* innerHTML leaves HTML entities. textContent destroys breaks. */
var dscr = document.getElementById('eow-description').innerText;

/* dont combine this with other variable declarations as it will be temping to
alphabetize them. just because it has year doesnt mean its a "topic" video */
var extras = dscr.split('\n').find(ae => ae.includes('·'));

var tmsp = Math.floor(new Date / 1000);

var txar = document.createElement('textarea');
txar.cols = 70;
txar.style.font = 'medium Consolas';
txar.style.position = 'fixed';
txar.style.right = 0;
txar.style.top = '50px';
txar.style.zIndex = 6;
document.body.append(txar);

if (extras)
{
   var entry = extras.split(' · ');

   /* this needs to be before artist */
   var song = entry.shift();
   var artist = entry.join(' & ');

   /* sometimes you will only have publication year,
   and sometimes you will only have release year */
   var year = dscr.match(/\d{4}/)[0];
   txar.textContent = `[${tmsp}, ${year}, "${vdeo}", "${artist} - ${song}"],`;
}
else
{
   var entry = ytplayer.config.args.title;

   /* i was originally doing the current year, but then i would forget to
   change it. some non "topic" videos have parsed metadata in the description.
   i suppose we could add a 3rd case to account for those which would allow
   graceful degradation before we get to this point, but that is for another
   day. */
   txar.textContent = `[${tmsp}, 0000, "${vdeo}", "${entry}"],`;
}
