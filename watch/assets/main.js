'use strict';

(async () => {
   let spar = new URLSearchParams(location.search);
   let furl = new URL('https://www.googleapis.com/youtube/v3/search');
   furl.searchParams.set('maxResults', 50);
   furl.searchParams.set('order', 'date');
   furl.searchParams.set('part', 'snippet');
   furl.searchParams.set('key', 'AIzaSyCrNB6t8QVxyjXpTSXwpWGCu-kR35Ba8JQ');

   if (spar.get('t')) {
      furl.searchParams.set('pageToken', spar.get('t'));
   }

   if (!spar.get('c')) {
      return;
   }

   furl.searchParams.set('channelId', spar.get('c'));
   document.getElementById('channelId').value = spar.get('c');
   let pitm = await (await fetch(furl)).json();
   document.title = pitm.items[0].snippet.channelTitle + ' - Umber Watch';

   pitm.items.forEach(ab => {
      let e_fu = document.createElement('figure');
      let e_a = document.createElement('a');
      let e_i = document.createElement('img');
      let e_d = document.createElement('div');
      let e_fc = document.createElement('figcaption');
      e_a.href = 'https://www.youtube.com/watch?v=' + ab.id.videoId;
      e_i.src = ab.snippet.thumbnails.medium.url;

      // needs to cover &#39;
      e_d.innerHTML = ab.snippet.title;
      e_fc.textContent = new Date(ab.snippet.publishedAt).toDateString();
      e_a.append(e_i, e_d);
      e_fu.append(e_a, e_fc);
      document.getElementById('figures').append(e_fu);
   });

   if (pitm.nextPageToken) {
      spar.set('t', pitm.nextPageToken);
      document.getElementById('older').href = '?' + spar;
      document.getElementById('older').textContent = 'older';
   }

   if (pitm.prevPageToken) {
      spar.set('t', pitm.prevPageToken);
      document.getElementById('newer').href = '?' + spar;
      document.getElementById('newer').textContent = 'newer';
   }
})();
