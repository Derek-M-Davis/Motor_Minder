# Motor_Minder

Motor Minder is a User based vehicle database for the diy mechanic or someone that wants to have their records digitally on the go. 

Live link: [Motor Minder](https://motorminder.herokuapp.com/)

## Table of contents
* App Features
* To-Do List
* Technologies
* Deployment
* Acknowledgments


## Features
List of features that are functional and TODOs for future development
* Authentication: user can register, login, and logout
* User views change with authentication
* Create, view a list of vehicle and notes information

## To-Do's
* Vehicles and notes will be associated with the user
* Edit of vehicles and notes after they are created
* Mileage calculator with be added for math calculations and ways to improve your mileage
* Improve styling of modals 

## Built With These Technologies
### Front-End
* [React](https://reactjs.org/): View Layer for UI
* [Redux](https://redux.js.org/): State Container
* [Axios](https://www.npmjs.com/package/axios): Promise based HTTP client for the browser and node.js
* [Reactstrap](https://reactstrap.github.io): allows bootstrap elements to be used directly in React
* Bootstrap/CSS: styling
* HTML
* JavaScript

### Back-End
* [MongoDB](https://www.mongodb.com/): Backend Database Manangement
* JSONWebToken: Asynchronous calls
* bcryptjs
* config
* Mongoose
* Express


## Deployment

Deployed on Heroku
* Using a single repository allowed me to keep everything in one place but did make deploying different versions of my application quite long as i was deploying to heroku it would run the script "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client" and had to make the build on the spot before uploading.

## Acknowledgments
* Lots of bits and peices of Youtube videos for the user integration and the redux file set up
