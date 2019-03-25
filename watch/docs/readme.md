Watch docs
==========

![result][1]

How to get playlistId
---------------------

Using this channel as an example:

https://www.youtube.com/channel/UCsvn_Po0SmunchJYOWpOxMg

typically you will want the "Uploads" playlist:

https://www.youtube.com/playlist?list=UUsvn_Po0SmunchJYOWpOxMg

as you can see to get the `playlistId` you just need to change the second
letter from `C` to `U`.

How to get key
--------------

First, visit this page:

https://console.developers.google.com/cloud-resource-manager

1. Click CREATE PROJECT
2. Project name: YouTube
3. Click CREATE

then you need to enable the YouTube API. Visit this page:

https://console.developers.google.com/apis/library/youtube.googleapis.com

and click ENABLE. Finally, you need to create credentials. Visit this page:

https://console.developers.google.com/apis/credentials

1. Click Create credentials
2. Click API key

How to remove key
-----------------

If you wish to undo all of this, go back to the Resource Manager and delete
the project. It will automatically disable the API and delete the credentials.
The docs for the API used for this project are here:

- https://developers.google.com/apis-explorer#p/youtube/v3/youtube.playlistItems.list
- https://developers.google.com/youtube/v3/docs/playlistItems/list

[1]:https://user-images.githubusercontent.com/926619/54879879-7d48ae00-4e0c-11e9-9b71-92592a1b2c33.jpg
