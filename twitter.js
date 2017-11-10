x = location.href.split(':').pop();
location.href = '//twitter.com/search?f=tweets&q=from:svnpenn since:' +
(x - 345600) + ' until:' + (x - 172800);
