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
