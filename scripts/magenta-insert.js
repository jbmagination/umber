'use strict';
document.querySelector('.watch-title-container').style.width = 'auto';
var dn = Math.floor(new Date / 1000);
/* needs to work in playlist view */
var vd = new URL(location).searchParams.get('v');
/* innerHTML leaves HTML entities. textContent destroys breaks. */
var dc = document.getElementById('eow-description').innerText;
var xc = document.querySelector('textarea');
if (!xc)
{
   xc = document.createElement('textarea');
   xc.cols = 50;
   xc.style.font = '2ex Consolas';
   /* this covers normal and playlist view */
   document.querySelector('#watch7-sidebar-contents').prepend(xc);
}
var songArtist;
/* dont combine this with other variable declarations as it will be temping to
alphabetize them. just because it has year doesnt mean its a "topic" video */
var extras = dc.split('\n').find(vu => vu.includes('·'));
if (extras)
{
   /* sometimes you will only have publication year,
   and sometimes you will only have release year */
   var year = dc.match(/\d{4}/)[0];
   var songArtist = extras.split(' / ')[0].split(' · ');
   var song = songArtist.shift();
   var artist = songArtist.join(' & ');
   xc.textContent = `[${dn}, ${year}, "${vd}", "${artist} - ${song}"],`;
}
else
{
   /*
   i was originally doing the current year, but then i would forget to change
   it. some non "topic" videos have parsed metadata in the description. i
   suppose we could add a 3rd case to account for those which would allow
   graceful degradation before we get to this point, but that is for another
   day.
   */
   songArtist = ytplayer.config.args.title;
   xc.textContent = `[${dn}, 0000, "${vd}", "${songArtist}"],`;
}
