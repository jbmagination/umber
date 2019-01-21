Main
=====

"img" over "iframe"
-------------------

- `iframe` requires embedly in some cases
- Killing embeds makes loading faster
- Links will allow use of CSS `:focus` or `:active`
- Not all links can be embedded
- Using embeds breaks keyboard shortcuts

Bandcamp & SoundCloud
---------------------

No way to autoplay on mobile. Also MP3 transparency is at 175 kbit/s, and
these only uses 128:

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
