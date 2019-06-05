'use strict';
const gei = bb => document.getElementById(bb);

// slug is not required, but it will allow for history search
const slug = function(txt) {
   return txt.replace(/ ?[&,-] /g, '-')
   .replace(/[ /]/g, '-')
   .replace(/[%().’]/g, '')
   .replace(/\b(of|the|to) /gi, '')
   .toLowerCase();
};

const bandcamp = function(rec) {
   // case sensitive
   const aurl = new URL('https://bandcamp.com');
   aurl.hash = slug(rec[3]);
   aurl.searchParams.set('track', rec[2].split('/')[0]);
   // required when protocol is not "file:"
   aurl.searchParams.set('ref', '');
   // these are not required, but they look nicer
   aurl.searchParams.set('artwork', 'small');
   aurl.searchParams.set('size', 'large');
   const iurl = new URL('https://f4.bcbits.com');
   iurl.pathname = 'img/' + rec[2].split('/')[1] + '_16.jpg';
   return [aurl, iurl];
};

const fgr = function() {
   const tstamp = arguments[0];
   const year = arguments[1];
   const [site, url1, url2] = arguments[2].split('/');
   const title = arguments[3];
   const e_fu = document.createElement('figure');
   const e_a = document.createElement('a');
   const e_d1 = document.createElement('div');
   const e_i = document.createElement('img');
   const e_d2 = document.createElement('div');
   const e_fc = document.createElement('figcaption');

   // need this else we get SyntaxError: redeclaration of let link
   let link;
   switch (site) {
   case 'b':
      // case sensitive
      link = new URL('https://bandcamp.com/EmbeddedPlayer');
      link.hash = slug(title);
      link.searchParams.set('track', url1);
      // required when protocol is not "file:"
      link.searchParams.set('ref', '');
      // these are not required, but they look nicer
      link.searchParams.set('artwork', 'small');
      link.searchParams.set('size', 'large');
      e_i.src = 'https://f4.bcbits.com/img/' + url2 + '_16.jpg';
      break;
   case 'g':
      // we need the trailing slash to maintain HTTPS
      link = new URL('/umber/listen/', location);
      link.searchParams.set('v', tstamp);

      e_i.src = 'https://github.com/cup/umber/releases/download/' + url1 +
      '/image.jpg';

      break;
   case 's':
      link = new URL('https://w.soundcloud.com/player');
      link.hash = slug(title);
      link.searchParams.set('url', 'api.soundcloud.com/tracks/' + url1);
      // ignored on mobile
      link.searchParams.set('auto_play', true);
      // accepts "true" but not "1"
      link.searchParams.set('hide_related', true);
      // these are not required, but it looks nicer
      link.searchParams.set('show_comments', false);
      link.searchParams.set('visual', true);
      e_i.src = 'https://i1.sndcdn.com/artworks-' + url2 + '-t500x500.jpg';
      break;
   case 'v':
      // player.vimeo.com/video/101914072: this video cannot be played here
      link = new URL('https://vimeo.com/' + url1);
      link.hash = slug(title);
      link.searchParams.set('autoplay', 1);
      e_i.src = 'https://i.vimeocdn.com/video/' + url2 + '_1280x720.jpg';
      break;
   case 'y':
      // video unavailable: youtube.com/embed/4Dcoz65iKQM
      link = new URL('https://www.youtube.com/watch');
      link.searchParams.set('v', url1);
      link.hash = slug(title);

      e_i.src = 'https://i.ytimg.com/vi/' + link.searchParams.get('v') +
      '/sd1.jpg';
   }

   e_a.href = link.href;
   e_d2.textContent = title;

   e_fc.textContent = 'released ' + year +
   ' - posted ' + new Date(tstamp * 1000).toDateString();

   e_d1.append(e_i);
   e_a.append(e_d1, e_d2);
   e_fu.append(e_a, e_fc);
   return e_fu;
};

const step = 12;
const spar = new URLSearchParams(location.search);
const query = spar.get('q') || '';
const page = +spar.get('p') || 1;
const begin = (page - 1) * step;
const end = begin + step;

if (page == 1) {
   gei('newer').remove();
}
else {
   spar.set('p', page - 1);
   gei('newer').href = '?' + spar;
}

fetch('/umber/radio/assets/data.json').then(aa => aa.json()).then(bb => {
   // both sides of the test can contain uppercase on mobile
   const result = bb.filter(cc => RegExp(query, 'i').test(cc[1] + cc[3]));
   gei('figures').append(...result.slice(begin, end).map(dd => fgr(...dd)));

   if (result[end]) {
      spar.set('p', page + 1);
      gei('older').href = '?' + spar;
   }
   else {
      gei('older').remove();
   }
});
