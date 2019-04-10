JSON data
=========

video_doc_id
------------

For each record, we need a way to identify which site is hosting the video, so
that we can load the appropriate player. Currently I am prefixing the
**video_id** like this:

prefix | site
-------|---------
`bc_`  | bandcamp
`gh_`  | github
`rd_`  | reddit
`sc_`  | soundcloud
`vm_`  | vimeo
`yt_`  | youtube

This matches what YouTube does already via **video_doc_id**. The only issue is
that YouTube **video_id** can already contain underscore, so we will need to
deal with that.

GitHub
------

The issue right now is that our GitHub records are too long. Currently in one
case the line is 145 characters. The artist and song title is hard to do
anything about. We could radix-64 encode the year, but it saves 0 characters:

~~~py
>>> strb(2019, 64)
'VZ'
~~~

We can radix-64 encode the post date, which will save only 2 characters:

~~~py
>>> strb(1554855953, 64)
'1ShJWH'
~~~

We have most potential with **video_id**. However first some questions need to
be answered. First, some of our uploaded files are M4A and some MP3. If we
include a file extension in our uploaded files it makes for more clarity, but
then we need to include that data in our **video_id**. After some testing
everything seems to work fine without an extension, so we should do that. Note
that images can be be called **image.jpg**. That takes us from this:

~~~
gh_harold-budd-through-hill/03-geography_great_valley_of_gongs.m4a
~~~

to this:

~~~
gh_harold-budd-through-hill/03-geography_great_valley_of_gongs
~~~

Next, we want songs under the same album to be listed under the same release.
This prevents duplicate cover art. However this means we need to store the tag
and the filename. To deal with this, we can set the **video_id** as the tag:

~~~
gh_1000000000
~~~

then use the post date to differentiate songs on the same album. The issue
with this is adding new songs to an existing album. For each release, we need
to be putting artist, album and song listings in the description. Make it
happen like this:

~~~sh
git tag -F - 1000000000 <<eof
ARTIST - ALBUM
1000000001: SONG
1000000002: SONG
eof
git push --tags
~~~

Keys
-----

JavaScript does not respect numeric key order:

~~~js
q = { 2: 'two', 1: 'one', 0: 'zero' }
Object [ "zero", "one", "two" ]

q = { '2': 'two', '1': 'one', '0': 'zero' }
Object [ "zero", "one", "two" ]
~~~

only string key order:

~~~js
q = { two: 2, one: 1, zero: 0 }
Object { two: 2, one: 1, zero: 0 }
~~~

so if we want objects that are sortable, we need to use string keys or numeric
values.
