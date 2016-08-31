# dev-art-onboarding
(Dev) A ReactJS/Firebase web-app development area for Artist.tekuma.io

## TODOs
* Remaster codebase to use new data-structure
* Add functionality to 'submit' button, to add a submit object onto /submits in the DB
* Set up an interface, (such as https://github.com/chrisvxd/firestation/tree/08bdb12cdee7477525379c7aa6de8c601f818c67) to administrate the /submits branch of the database. [Set up an Admin account, and log into it via firestation]
* Set up the user's submit interface in the 'Gallery'.
* Write tests for new functionality
* Remove Cloudinary and replace with Re-sizing cloud functionality
* Migrate all existing portal data to new (working) Datastructure
* Deploy in production 

### New Datastructure
From root, there are 2 main branches.
Onboarders holds all of the app's state, organized by User UID.
Submits will be a chronological stack of submit objects. Firewatch can be used as
an interface for administrating this submits stack.
