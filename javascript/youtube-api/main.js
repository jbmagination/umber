'use strict';
async function main()
{
   let ab = document.getElementById('figures');
   let ce = new URL('https://www.googleapis.com/youtube/v3/search');

   ce.search = location.search;
   ce.searchParams.set('part', 'snippet');
   ce.searchParams.set('key', 'AIzaSyCrNB6t8QVxyjXpTSXwpWGCu-kR35Ba8JQ');
   ['channelId', 'publishedBefore'].forEach(dh => {
      if (!ce.searchParams.get(dh)) ce.searchParams.delete(dh)
   });

   let fk = await (await fetch(ce)).json();
   fk.items.forEach(dh => {
      let np = document.createElement('img');
      np.src = dh.snippet.thumbnails.medium.url;
      ab.append(np);
   });
}
main();
