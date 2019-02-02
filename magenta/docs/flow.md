Flow
=====

Low
-----

https://youtu.be/kcPc18SG6uA

Legend
------

key  | value
-----|-------
dup  | reissue
flow | views per year
high | flow at or above threshold
len  | length less than 3 minutes
link | URL
low  | flow under threshold
no   | rating bad
yes  | rating good

Query
-----

artist      | total | true high | true low | query
------------|-------|-----------|----------|------------------
home        | 2     | 1         | 1        | home band
home        | 1     | 1         | 0        | home music
home        | 1     | 1         | 0        | home artist
home        | 1     | 1         | 0        | home
home        | 0     | 0         | 0        | home songs
home        | 0     | 0         | 0        | home song
home        | 0     | 0         | 0        | home group
beck        | 28    | 3         | 25       | beck music
beck        | 28    | 3         | 25       | beck
beck        | 25    | 2         | 23       | beck song
beck        | 24    | 2         | 22       | beck songs
beck        | 15    | 2         | 13       | beck band
beck        | 10    | 3         | 7        | beck artist
beck        | 0     | 0         | 0        | beck group
beach house | 34    | 1         | 33       | beach house artist
beach house | 33    | 2         | 31       | beach house group
beach house | 33    | 2         | 31       | beach house band
beach house | 28    | 1         | 27       | beach house songs
beach house | 26    | 2         | 24       | beach house song
beach house | 17    | 2         | 15       | beach house music
beach house | 17    | 2         | 15       | beach house

We cannot sort by view count because it will introduce ambiguous results. We
can check next page as long as current page has at least 1 true high.

Sort
-----

1. Sort artists by artist name
2. Sort albums in reverse chronological order
3. Sort high tracks by track name
4. Sort low tracks by track number

Views per year
--------------

1. High views per year need to match album
2. Low views per year only need to match artist
3. Low views per year is first low result after last high result
4. File under album as `$:` or `$: &gr` or `$: &rd`
