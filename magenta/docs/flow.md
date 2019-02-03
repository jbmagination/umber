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
4. File under album using one of the following methods

~~~yml
<flow: 654,321
~~~

~~~yml
<<: &low
   <flow: 654,321
~~~

~~~yml
<<: &high
   <flow: 7,654,321
~~~
