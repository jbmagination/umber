'use strict';

function slug(txt)
{
   // slug is not required, but it will allow for history search
   return [
      [/\b(to|the) /gi, ''],
      [/ ?[&,-] /g, '-'],
      [/[ /]/g, '-'],
      [/[%().]/g, '']
   ].reduce((af, bd) => af.replace(...bd), txt).toLowerCase();
}

function fgr(vid)
{
   let ae = document.createElement('a');
   let fce = document.createElement('figcaption');
   let fge = document.createElement('figure');
   let ie = document.createElement('img');
   let url;

   let attr = vid[2].split('/');
   switch (attr[0]) {
   case 'b':
      ie.src = 'https://f4.bcbits.com/img/' + attr[2] + '.jpg';
      // case sensitive
      url = new URL('https://bandcamp.com/EmbeddedPlayer');
      url.hash = slug(vid[3]);
      url.searchParams.set('track', attr[1]);
      // required when protocol is not "file:"
      url.searchParams.set('ref', '');
      // these are not required, but they look nicer
      url.searchParams.set('artwork', 'small');
      url.searchParams.set('size', 'large');
      break;
   case 'g':
      ie.src = 'https://github.com/cup/mauve/releases/download/' +
      attr[1] + '/image.jpg';
      // we need the trailing slash to maintain HTTPS
      url = new URL(location.origin + '/mauve/watch/');
      url.searchParams.set('v', vid[0]);
      break;
   case 'r':
      ie.src = 'https://i.redd.it/' + attr[2] + '.jpg';
      url = new URL(location.origin + '/mauve/watch/');
      url.searchParams.set('v', vid[0]);
      break;
   case 's':
      ie.src = 'https://i1.sndcdn.com/artworks-' + attr[2] + '-t500x500.jpg';
      url = new URL('https://w.soundcloud.com/player');
      url.hash = slug(vid[3]);
      url.searchParams.set('url', 'api.soundcloud.com/tracks/' + attr[1]);
      // ignored on mobile
      url.searchParams.set('auto_play', true);
      // accepts "true" but not "1"
      url.searchParams.set('hide_related', true);
      // these are not required, but it looks nicer
      url.searchParams.set('show_comments', false);
      url.searchParams.set('visual', true);
      break;
   case 'v':
      ie.src = 'https://i.vimeocdn.com/video/' + attr[2] + '_1280x720.jpg';
      // player.vimeo.com/video/101914072: this video cannot be played here
      url = new URL('https://vimeo.com/' + attr[1]);
      url.hash = slug(vid[3]);
      url.searchParams.set('autoplay', 1);
      break;
   default:
      ie.src = 'https://i.ytimg.com/vi/' + attr[0] + '/';
      if (attr[1])
      {
         ie.src += attr[1] + '.jpg';
      }
      else
      {
         ie.src += 'maxresdefault.jpg';
      }
      // video unavailable: youtube.com/embed/4Dcoz65iKQM
      url = new URL('https://www.youtube.com/watch?v=' + attr[0]);
      url.hash = slug(vid[3]);
   }
   ae.href = url.href;
   fce.textContent = vid[3] + ' (' + vid[1] + ')';
   ae.append(ie);
   fge.append(fce, ae);
   return fge;
}
async function main()
{
   let step = 12;
   let urlp = new URLSearchParams(location.search);

   let page = +urlp.get('p') || 1;
   let query = urlp.get('q') || '';

   let begin = (page - 1) * step;
   let end = begin + step;

   // both sides of the test can contain uppercase on mobile
   let result = (await (
      await fetch('/mauve/magenta/assets/data.json')
   ).json()).filter(af => RegExp(query, 'i').test(af[1] + af[3]));
   document.getElementById('figures').append(
      ...result.slice(begin, end).map(af => fgr(af))
   );
   if (page == 1)
   {
      document.getElementById('prev').style.display = 'none';
   }
   else
   {
      urlp.set('p', page - 1);
      document.getElementById('prev').href = '?' + urlp.toString();
   }
   if (result[end])
   {
      urlp.set('p', page + 1);
      document.getElementById('next').href = '?' + urlp.toString();
   }
   else
   {
      document.getElementById('next').style.display = 'none';
   }
}

main();
