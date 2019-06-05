'use strict';

const gei = bb => document.getElementById(bb);

// slug is not required, but it will allow for history search
const slug = txt => {
   return txt.replace(/ ?[&,-] /g, '-')
   .replace(/[ /]/g, '-')
   .replace(/[%().’]/g, '')
   .replace(/\b(of|the|to) /gi, '')
   .toLowerCase();
};

const fgr = vdeo => {
   const e_fu = document.createElement('figure');
   const e_a = document.createElement('a');
   const e_d1 = document.createElement('div');
   const e_i = document.createElement('img');
   const e_d2 = document.createElement('div');
   const e_fc = document.createElement('figcaption');
   const attr = vdeo[2].split('/');

   // need this else we get SyntaxError: redeclaration of let url
   let url;
   switch (attr.shift()) {
   case 'b':
      // case sensitive
      url = new URL('https://bandcamp.com/EmbeddedPlayer');
      url.hash = slug(vdeo[3]);
      url.searchParams.set('track', attr.shift());
      // required when protocol is not "file:"
      url.searchParams.set('ref', '');
      // these are not required, but they look nicer
      url.searchParams.set('artwork', 'small');
      url.searchParams.set('size', 'large');
      e_i.src = 'https://f4.bcbits.com/img/' + attr.shift() + '_16.jpg';
      break;
   case 'g':
      // we need the trailing slash to maintain HTTPS
      url = new URL('/umber/listen/', location);
      url.searchParams.set('v', vdeo[0]);

      e_i.src = 'https://github.com/cup/umber/releases/download/' +
      attr.shift() + '/image.jpg';

      break;
   case 's':
      url = new URL('https://w.soundcloud.com/player');
      url.hash = slug(vdeo[3]);
      url.searchParams.set('url', 'api.soundcloud.com/tracks/' + attr.shift());
      // ignored on mobile
      url.searchParams.set('auto_play', true);
      // accepts "true" but not "1"
      url.searchParams.set('hide_related', true);
      // these are not required, but it looks nicer
      url.searchParams.set('show_comments', false);
      url.searchParams.set('visual', true);

      e_i.src = 'https://i1.sndcdn.com/artworks-' + attr.shift() +
      '-t500x500.jpg';

      break;
   case 'v':
      // player.vimeo.com/video/101914072: this video cannot be played here
      url = new URL('https://vimeo.com/' + attr.shift());
      url.hash = slug(vdeo[3]);
      url.searchParams.set('autoplay', 1);

      e_i.src = 'https://i.vimeocdn.com/video/' + attr.shift() +
      '_1280x720.jpg';

      break;
   case 'y':
      // video unavailable: youtube.com/embed/4Dcoz65iKQM
      url = new URL('https://www.youtube.com/watch');
      url.searchParams.set('v', attr.shift());
      url.hash = slug(vdeo[3]);

      e_i.src = 'https://i.ytimg.com/vi/' + url.searchParams.get('v') +
      '/sd1.jpg';
   }

   e_a.href = url.href;
   e_d2.textContent = vdeo[3];

   e_fc.textContent = 'released ' + vdeo[1] +
   ' - posted ' + new Date(vdeo[0] * 1000).toDateString();

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
   gei('figures').append(...result.slice(begin, end).map(dd => fgr(dd)));

   if (result[end]) {
      spar.set('p', page + 1);
      gei('older').href = '?' + spar;
   }
   else {
      gei('older').remove();
   }
});
