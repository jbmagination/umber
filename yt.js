function get_query_var(querystring, variable) {
  // vars is an array of name=value pairs
  var vars = querystring.split('&');
  for (var i=0; i<vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] == variable) {
      return unescape(pair[1]);
    }
  }
}

function get_quality(url) {
  switch (true) {
    case url.indexOf('itag=5')   > 0: return 'FLV 240p H.263';
    case url.indexOf('itag=17')  > 0: return '3GP 144p';
    case url.indexOf('itag=18')  > 0: return 'MP4 360p H.264 Baseline';
    case url.indexOf('itag=22')  > 0: return 'MP4 720p H.264 High';
    case url.indexOf('itag=34')  > 0: return 'FLV 360p H.264 Main';
    case url.indexOf('itag=35')  > 0: return 'FLV 480p H.264 Main';
    case url.indexOf('itag=36')  > 0: return '3GP 240p';
    case url.indexOf('itag=37')  > 0: return 'MP4 1080p H.264 High';
    case url.indexOf('itag=43')  > 0: return 'WebM 360p VP8';
    case url.indexOf('itag=44')  > 0: return 'WebM 480p VP8';
    case url.indexOf('itag=45')  > 0: return 'WebM 720p VP8';
    case url.indexOf('itag=46')  > 0: return 'WebM 1080p VP8';
    case url.indexOf('itag=82')  > 0: return 'MP4 360p H.264 3D';
    case url.indexOf('itag=84')  > 0: return 'MP4 720p H.264 3D';
    case url.indexOf('itag=100') > 0: return 'WebM 360p VP8 3D';
    case url.indexOf('itag=102') > 0: return 'WebM 720p VP8 3D';
  }
}

var fv = document.getElementById('movie_player').getAttribute('flashvars');
/* Get url_encoded_fmt_stream_map, IT IS AN ARRAY */
var stream_map = get_query_var(fv, 'url_encoded_fmt_stream_map').split(',');
var a_elements = new Array();

for (var i=0; i<stream_map.length; i++) {
  /* Get URL, IT IS A STRING */
  var url = get_query_var(stream_map[i], 'url');
  a_elements.push('<a href=' + url + '>' + get_quality(url) + '</a>');
}

document.getElementById('watch-player').innerHTML = a_elements.join('<br>');
