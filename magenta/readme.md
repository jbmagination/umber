Notes
=====

MusicBrainz
-----------

When adding musicbrainz release, make sure to include:

- release title
- artist
- type
- status
- date
- country
- label
- release link
- format
- track titles
- track lengths

SoundCloud and Bandcamp
-----------------------

MP3 transparency is at 175 kbit/s, and both sites only uses 128:

~~~
$ youtube-dl -F http://fourtet.bandcamp.com/track/the-space-of-two-weeks
[Bandcamp] the-space-of-two-weeks: Downloading webpage
[info] Available formats for 3873199620:
format code  extension  resolution note
mp3-128      mp3        audio only mp3  @128k
~~~

~~~
$ youtube-dl -F soundcloud.com/wyeoak/mary-is-mary
[soundcloud] wyeoak/mary-is-mary: Resolving id
[info] Available formats for 312419154:
format code       extension  resolution note
hls_mp3_128_url   mp3        audio only audio@128k
~~~

and unlike YouTube and Reddit, they offer no way to autoplay on mobile:

- http://webapps.stackexchange.com/questions/117052/bandcamp-autoplay
- http://webapps.stackexchange.com/questions/117308/soundcloud-autoplay-mobile

`img` over `iframe`
-------------------

- `iframe` requires embedly in some cases
- I did not utilize embeds on Reddit even though they are offered
- Killing embeds makes loading faster
- Links will allow use of CSS `:focus` or `:active`
- Not all links can be embedded
- Using embeds breaks keyboard shortcuts

Sort
-----

JavaScript does not respect numeric key order:

~~~js
q = {2: 'c', 1: 'b', 0: 'a'}
Object [ "a", "b", "c" ]

q = {'2': 'c', '1': 'b', '0': 'a'}
Object [ "a", "b", "c" ]
~~~

only string key order:

~~~js
q = {'z': 'c', 'y': 'b', 'x': 'a'}
Object { z: "c", y: "b", x: "a" }
~~~

so if we want objects that are sortable, we need to use string keys or numeric
values.
