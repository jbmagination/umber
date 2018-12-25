'use strict';
function fgr(vid)
{
   let ae = document.createElement('a');
   let fce = document.createElement('figcaption');
   let fge = document.createElement('figure');
   let ie = document.createElement('img');
   let url;

   let py = vid[2].split(',');
   switch (py[0]) {
   case 'b':
      ie.src = 'https://f4.bcbits.com/img/' + py[2] + '.jpg';
      // case sensitive
      url = new URL('https://bandcamp.com/EmbeddedPlayer');
      url.searchParams.set('track', py[1]);
      // required when protocol is not "file:"
      url.searchParams.set('ref', '');
      // these are not required, but they look nicer
      url.searchParams.set('artwork', 'small');
      url.searchParams.set('size', 'large');
      break;
   case 'r':
      ie.src = 'https://i.redd.it/' + py[2] + '.jpg';
      url = new URL('https://www.reddit.com/mediaembed/' + py[1]);
      break;
   case 's':
      ie.src = 'https://i1.sndcdn.com/artworks-' + py[2] + '-t500x500.jpg';
      url = new URL('https://w.soundcloud.com/player');
      url.searchParams.set('url', 'api.soundcloud.com/tracks/' + py[1]);
      // ignored on mobile
      url.searchParams.set('auto_play', true);
      // accepts "true" but not "1"
      url.searchParams.set('hide_related', true);
      // these are not required, but it looks nicer
      url.searchParams.set('show_comments', false);
      url.searchParams.set('visual', true);
      break;
   case 'v':
      ie.src = 'https://i.vimeocdn.com/video/' + py[2] + '_1280x720.jpg';
      // player.vimeo.com/video/101914072: this video cannot be played here
      url = new URL('https://vimeo.com/' + py[1]);
      url.searchParams.set('autoplay', 1);
      break;
   default:
      ie.src = 'https://i.ytimg.com/vi/' + py[0] + '/';
      if (py[1])
      {
         ie.src += py[1] + '.jpg';
      }
      else
      {
         ie.src += 'maxresdefault.jpg';
      }
      // video unavailable: youtube.com/embed/4Dcoz65iKQM
      url = new URL('https://www.youtube.com/watch?v=' + py[0]);
   }
   // slug is not required, but it will allow for history search
   url.hash = [
      [/\b(to|the) /gi, ''],
      [/ ?[&,-] /g, '-'],
      [/[ /]/g, '-'],
      [/[%().]/g, '']
   ].reduce((x, z) => x.replace(...z), vid[3]).toLowerCase();
   ae.href = url.href;
   fce.textContent = vid[3] + ' (' + vid[1] + ')';
   ae.append(ie);
   fge.append(fce, ae);
   return fge;
}
async function main()
{
   let step = 12;
   let urlsp = new URLSearchParams(location.search);

   let page = +urlsp.get('p') || 1;
   let query = urlsp.get('q') || '';

   let begin = (page - 1) * step;
   let end = begin + step;

   // both sides of the test can contain uppercase on mobile
   let result = (await (await fetch('mauve.json')).json()).filter(
      z => RegExp(query, 'i').test(z[1] + z[3])
   );
   document.getElementById('figures').append(
      ...result.slice(begin, end).map(z => fgr(z))
   );
   if (page == 1)
   {
      document.getElementById('prev').style.display = 'none';
   }
   else
   {
      urlsp.set('p', page - 1);
      document.getElementById('prev').href = '?' + urlsp.toString();
   }
   if (result[end])
   {
      urlsp.set('p', page + 1);
      document.getElementById('next').href = '?' + urlsp.toString();
   }
   else
   {
      document.getElementById('next').style.display = 'none';
   }
}
main();
