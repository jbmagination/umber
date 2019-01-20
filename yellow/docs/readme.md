YAML
=====

Legend
------

key  | value
-----|------
`$`  | views per year and URL
`bd` | bad
`gd` | good
`gr` | green
`rd` | red
`ri` | reissue
`sh` | short

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

Query
-----

artist      | total | true red | true green | query
------------|-------|----------|------------|------------------
home        | 2     | 1        | 1          | home band
home        | 1     | 1        | 0          | home music
home        | 1     | 1        | 0          | home artist
home        | 1     | 1        | 0          | home
home        | 0     | 0        | 0          | home songs
home        | 0     | 0        | 0          | home song
home        | 0     | 0        | 0          | home group
beck        | 28    | 3        | 25         | beck music
beck        | 28    | 3        | 25         | beck
beck        | 25    | 2        | 23         | beck song
beck        | 24    | 2        | 22         | beck songs
beck        | 15    | 2        | 13         | beck band
beck        | 10    | 3        | 7          | beck artist
beck        | 0     | 0        | 0          | beck group
beach house | 34    | 1        | 33         | beach house artist
beach house | 33    | 2        | 31         | beach house group
beach house | 33    | 2        | 31         | beach house band
beach house | 28    | 1        | 27         | beach house songs
beach house | 26    | 2        | 24         | beach house song
beach house | 17    | 2        | 15         | beach house music
beach house | 17    | 2        | 15         | beach house

We cannot sort by view count because it will introduce ambiguous results. We
can check next page as long as current page has at least 1 true red.

Sort
-----

1. Sort artists by artist name
2. Sort albums in reverse chronological order
3. Sort red tracks by track name
4. Sort green tracks by track number

Views per year
--------------

1. Red views per year need to match album
2. Green views per year only need to match artist
3. Green views per year is first green result after last red result
4. File under album as `$:` or `$: &gr` or `$: &rd`
