# Postcard Gallery

The Svelte Version is most up-to-date.  The Qwik version, which was the original approach, was set aside; we will potentially return to it when we have time.™

Uses galleries assembled by DIS Staff.  Explores the adventures of the Cortex API.

## Package Extractor

The CortexAPI uses a "package extractor" approach for compound objects; folders are also compound objects.  Unfortunately, not all data is available in the package extractor api, so once you are ready display actual images, you have to call to the item api.  The home page is a collection (folder) of galleries (compound objects); each gallery is a folder, and each postcard, having both a front and a back, is also a folder.  So to get from home page to image, you have to do 4 layers of api calls; for all of these images, it's something like 300+ api calls.

(Apparently the package extractor api _should_ be able to get the necessary data for the images, which would chop off probably 2 layers of api calls, which would be nice.

## Redis

Until then, this site uses Redis.  While the API development is in flux, there's a partially manual update method.  There's an automated script on the server that runs updates and this repository itself has some scraps from update methods; most notably, the update route, which is currently pulled up and out of the routes folder while it's not in use.  

Updates occur by doing the 300+ API calls, parsing the data, and then updating the Redis data.  The update route will allow librarians to select the galleries they want to update, or 'select all' - the latter will also allow for new galleries to be added.  
