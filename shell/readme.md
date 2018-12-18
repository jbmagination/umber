Shell
=====

net-pull
--------

https://stackoverflow.com/questions/4528869/-/4529172

rsync
-----

~~~sh
rsync -v -v --delete-excluded --omit-dir-times --recursive --times \
--modify-window 2 --exclude '*.flac' /Music/ /cygdrive/f
~~~

sys-color
---------

~~~yml
background:
   black: 40
   blue: 44
   bright: 5
   cyan: 46
   green: 42
   magenta: 45
   red: 41
   white: 47
   yellow: 43
foreground:
   black: 30
   blue: 34
   bright: 1
   cyan: 36
   green: 32
   magenta: 35
   red: 31
   white: 37
   yellow: 33
~~~
