# dev-art-onboarding
(Dev) A ReactJS/Firebase web-app development area for Artist.tekuma.io

## TODOs:
* Remaster codebase to use new data-structure
* Add functionality to 'submit' button, to add a submit object onto /submits in the DB
* Set up an interface, (such as https://github.com/chrisvxd/firestation/tree/08bdb12cdee7477525379c7aa6de8c601f818c67) to administrate the /submits branch of the database. [Set up an Admin account, and log into it via firestation]
* Set up the user's submit interface in the 'Gallery'.
* Write tests for new functionality
* Remove Cloudinary and replace with Re-sizing cloud functionality
* Migrate all existing portal data to new (working) Datastructure
* Re-define all DB and Storage system security rules.
* Deploy in production

## Good Tabs to have open:
- https://console.firebase.google.com/project/project-7614141605200030275/database/data
- https://firebase.google.com/docs/reference/js/
- https://console.cloud.google.com/functions/list?project=project-7614141605200030275
- https://console.cloud.google.com/storage/browser?project=project-7614141605200030275

## Cloud functions
This project requires 2 cloud functions.
to deploy cloud functions, simply use
`npm run gcf`
This is shorthand for:
**//TODO** remaster cloud functions to deploy from same index.js file.
`gcloud alpha functions deploy autotag --stage-bucket dev-art-functions --trigger-bucket dev-art-uploads && gcloud alpha functions deploy resize --stage-bucket dev-art-functions --trigger-bucket dev-art-uploads`
#### resize
Resize handles the raw upload, and makes a thumb512 and thumb128 copy.

#### autotag
Autotag makes calls to Clarifai and does auto-tagging and color digestion.

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
