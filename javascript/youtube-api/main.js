'use strict';
async function main()
{
   let ab = new URLSearchParams(location.search);
   let ce = new URL('https://www.googleapis.com/youtube/v3/search');
   ce.searchParams.set('key', 'AIzaSyCrNB6t8QVxyjXpTSXwpWGCu-kR35Ba8JQ');
   ce.searchParams.set('maxResults', 12);
   ce.searchParams.set('order', 'date');
   ce.searchParams.set('part', 'snippet');

   ['channelId', 'publishedBefore'].forEach(dh => {
      if (ab.get(dh)) {
         ce.searchParams.set(dh, ab.get(dh));
      }
   });

   (await (await fetch(ce)).json()).items.forEach(dh => {
      let e_fu = document.createElement('figure');
      let e_a = document.createElement('a');
      let e_i = document.createElement('img');
      let e_fc = document.createElement('figcaption');
      let e_p1 = document.createElement('p');
      let e_p2 = document.createElement('p');
      e_a.href = 'https://www.youtube.com/watch?v=' + dh.id.videoId;
      e_i.src = dh.snippet.thumbnails.medium.url;
      e_p1.textContent = dh.snippet.title;
      e_p2.textContent = dh.snippet.publishedAt;
      e_a.append(e_i);
      e_fc.append(e_p1, e_p2);
      e_fu.append(e_a, e_fc);
      document.getElementById('figures').append(e_fu);
   });
}
main();
