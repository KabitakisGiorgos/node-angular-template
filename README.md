
# Angular-Node.js Demo/Presentations 

A nodejs serving an angular page where through page you can change images to different devices that can run a browser.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You will need to have installed:
>node.js (tested with v10.14.2)
>nodemon
### Installing

npm i nodemon -g
npm i (to install the dependencies)
## Running the project

Find the file src/enviroments/enviroment.ts and at ip: put the machine's ip that is going 
to run the project.

Hit at a console in the project directory **npm start** and you are ready to go.

Currently this project has 3 "virtual" devices wall/fridge/counter. So if you go to a machine **connected to the same internet** as the machine running the server and hit in the url 
*ip:4000/device/wall*
*ip:4000/device/fridge*
*ip:4000/device/counter*
you will see each device's images.Also there is the *ip:4000/controller* where is the main controller from where you can change images to other views.( It works also in smartphone and supports swipe gesture).
In case of a machine "lags" and the image doesn't change there is also support change image from a machine's left and right arrow.

### Finally
You can change names of devices for other presentations and supports as many devices you need but you must find the file src/app/config.json and keep the structure that is given change the names as you desire give new image paths and renew the images in the src/app/assets folder.
