'use strict';
const gei = bb => document.getElementById(bb);

/* slug is not required, but it will allow for history search. make sure
pattern "1" is replaced before pattern "2". */
const slug = function(txt) {
   return txt.replace(/ ?[&,-] /g, '-')
   .replace(/\b(of|the|to) /gi, '') // 1
   .replace(/[ /]/g, '-') // 2
   .replace(/[%().’]/g, '')
   .toLowerCase();
};

const bandcamp = function(song) {
   const aurl = new URL('https://bandcamp.com');
   // case sensitive
   aurl.pathname = 'EmbeddedPlayer';
   aurl.hash = slug(song.title);
   aurl.searchParams.set('track', song.url1);
   // required when protocol is not "file:"
   aurl.searchParams.set('ref', '');
   // these are not required, but they look nicer
   aurl.searchParams.set('artwork', 'small');
   aurl.searchParams.set('size', 'large');
   const iurl = new URL('https://f4.bcbits.com');
   iurl.pathname = 'img/' + song.url2 + '_16.jpg';
   return [aurl, iurl];
};

const github = function(song) {
   const aurl = new URL('https://cup.github.io');
   aurl.pathname =  'umber/listen';
   aurl.searchParams.set('v', song.post);
   const iurl = new URL('https://github.com');
   iurl.pathname = 'cup/umber/releases/download/' + song.url1 + '/image.jpg';
   return [aurl, iurl];
};

const soundcloud = function(song) {
   const aurl = new URL('https://w.soundcloud.com');
   aurl.pathname = 'player';
   aurl.hash = slug(song.title);
   aurl.searchParams.set('url', 'api.soundcloud.com/tracks/' + song.url1);
   // ignored on mobile
   aurl.searchParams.set('auto_play', true);
   // accepts "true" but not "1"
   aurl.searchParams.set('hide_related', true);
   // these are not required, but it looks nicer
   aurl.searchParams.set('show_comments', false);
   aurl.searchParams.set('visual', true);
   const iurl = new URL('https://i1.sndcdn.com');
   iurl.pathname =  'artworks-' + song.url2 + '-t500x500.jpg';
   return [aurl, iurl];
};

const vimeo = function(song) {
   // player.vimeo.com/video/101914072: this video cannot be played here
   const aurl = new URL('https://vimeo.com');
   aurl.pathname = song.url1;
   aurl.hash = slug(song.title);
   aurl.searchParams.set('autoplay', 1);
   const iurl = new URL('https://i.vimeocdn.com');
   iurl.pathname = 'video/' + song.url2 + '_1280x720.jpg';
   return [aurl, iurl];
};

const youtube = function(song) {
   const aurl = new URL('https://www.youtube.com');
   // video unavailable: youtube.com/embed/4Dcoz65iKQM
   aurl.pathname = 'watch';
   aurl.searchParams.set('v', song.url1);
   aurl.hash = slug(song.title);
   const iurl = new URL('https://i.ytimg.com');
   iurl.pathname = 'vi/' + song.url1 + '/sd1.jpg';
   return [aurl, iurl];
};

const select = function(song) {
   switch (song.site) {
   case 'b':
      return bandcamp(song);
   case 'g':
      return github(song);
   case 's':
      return soundcloud(song);
   case 'v':
      return vimeo(song);
   case 'y':
      return youtube(song);
   }
};

const fgr = function() {
   const e_a = document.createElement('a');
   const e_d1 = document.createElement('div');
   const e_d2 = document.createElement('div');
   const e_fc = document.createElement('figcaption');
   const e_fu = document.createElement('figure');
   const e_i = document.createElement('img');
   const song = {};
   song.post = arguments[0];
   song.rel = arguments[1];
   [song.site, song.url1, song.url2] = arguments[2].split('/');
   song.title = arguments[3];
   [e_a.href, e_i.src] = select(song);
   e_d2.textContent = song.title;

   e_fc.textContent = 'released ' + song.rel + ' - posted ' +
   new Date(song.post * 1000).toDateString();

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
