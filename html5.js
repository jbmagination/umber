var href = document.querySelector('[href$=".mp4"]').getAttribute('href');
document.querySelector('p#preview').innerHTML =
  '<video controls style="width: 600px;" src="' + href + '"></video>';
