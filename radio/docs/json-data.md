JSON data
=========

video_doc_id
------------

For each record, we need a way to identify which site is hosting the video, so
that we can load the appropriate player. Currently I am prefixing the
**video_id** like this:

prefix | site
-------|---------
`b/`   | bandcamp
`g/`   | github
`r/`   | reddit
`s/`   | soundcloud
`v/`   | vimeo
none   | youtube

however I would like to prefix all for consistency, like this:

prefix | site
-------|---------
`bc_`  | bandcamp
`gh_`  | github
`rd_`  | reddit
`sc_`  | soundcloud
`vm_`  | vimeo
`yt_`  | youtube

this presents a couple of problems. YouTube **video_id** can already contain
underscore, so we will need to deal with that. Further, it adds 3 characters
to all YouTube records. However I like the clarity is provides, and it matches
what YouTube does already via **video_doc_id**.

GitHub
------

The issue right now is that our GitHub records are too long. Currently in one
case the line is 144 characters. The artist and song title is hard to do
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

If we could just use the post date as the **video_id**, we could go from this:

~~~
g/harold-budd-through-hill/03-geography_great_valley_of_gongs.m4a
~~~

to this:

~~~
1554835087
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
