x = location.href.split(':').pop();
location.href = '//' +
`twitter.com/search?f=tweets&q=from:svnpenn since:${x} until:${+x + 172800}`;
