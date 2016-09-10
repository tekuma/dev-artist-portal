# dev-art-onboarding
(Dev) A ReactJS/Firebase web-app development area for Artist.tekuma.io

## TODOs:
* Set up an interface, (such as https://github.com/chrisvxd/firestation/tree/08bdb12cdee7477525379c7aa6de8c601f818c67) to administrate the /submits branch of the database. [Set up an Admin account, and log into it via firestation]
* Set up the user's submit interface in the 'Gallery'.
* Write tests for new functionality
* Migrate all existing portal data to new (working) Datastructure
* Re-define all DB and Storage system security rules.
* Deploy in production

## FIXMEs:
#### Cloudinary has been removed.
Given the server completes all jobs, an image can be requested from anywhere with
just its artwork uid and artist uid via
`https://storage.googleapis.com/dev-art-uploads/portal/${ <artist uid here> }/thumb512/${<artworkUID>}`
But, not all instances of cloudinary and its 'thumbnail' method have been removed.

## Good Tabs to have open:
- https://console.firebase.google.com/project/project-7614141605200030275/database/data
- https://firebase.google.com/docs/reference/js/
- https://console.cloud.google.com/functions/list?project=project-7614141605200030275
- https://console.cloud.google.com/storage/browser?project=project-7614141605200030275

## Server Code
The app requires the server to be running to work properly. cd into dev-server,
then run    `node image_processing.js`
The server handles making resized copies of the image, and sending the image to Clarifai
for color and tag digestion.

## Security Rules
#### DB
The entire onboarders branch should be private. Only matching UIDs should be allowed read/write access. Any Auth'd user should have access to the submits branch.

#### Storage
TODO


## Storage Schema
Storage is currently done in the `art-uploads` bucket. The current structure is:
-root
--portal
---{UID}
----uploads
----thumb128
----thumb512
----avatars
This means that each user has 4 directories. Raw uploads are stored in uploads under an artworkUID.
This folder should be locked from read and write access as this is sensitive data. thumb512 and thumb128 will look very similar, and list the same images by the same names (artworkUID), except that each image will have a width limited at 512px and 128px respectively. As these images aren't as sensitive, they are available publicly under the path `portal/{UID}/thumb{128}/{artworkUID}`. This public availability of thumbnails should eventually replace the need for Cloudinary. But, all 'Uploads' folders must be equal in size to 'thumb512' first.

## Notes
#### New Datastructure / DB Schema
From root, there are 2 main branches.
Onboarders holds all of the app's state, organized by User UID. Under each UID, user data is stored in 3 branches: Info, Albums, Artworks.
```
     / submits
root                    / artworks
     \ onboarders - UID - albums
                        \ info
```  
Submits will be a chronological stack of submit objects. Fire-station can be used as
an interface for administrating this submits stack, and passing messages to the user.
