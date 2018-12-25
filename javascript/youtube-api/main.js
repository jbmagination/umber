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
      let ab = document.createElement('img');
      ab.src = dh.snippet.thumbnails.medium.url;
      document.getElementById('figures').append(ab);
   });
}
main();
