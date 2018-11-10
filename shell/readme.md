Shell
=====

~~~sh
rsync -v -v --delete-excluded --omit-dir-times --recursive --times \
--modify-window 2 --exclude '*.flac' /Music/ /cygdrive/f
~~~

Further reading
---------------

http://stackoverflow.com/questions/4528869/-/4529172
