# Mediapedia

Your one stop shop for all things media! 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

```
NPM
```
```
Node.js
```

### Installing

A step by step series of examples that tell you how to get a development env running

Clone this repository

```
git clone https://github.com/ardelapaz/mediapedia
```

cd into `mediapedia` and then run 

```
npm install
```

cd into `client` and also run 

```
npm install
```

Open a split terminal. In one terminal, go to `./mediapedia` and start the express server by running:

```
npm start
```
And in the other terminal, cd into `mediapedia/client` and run:

```
npm start
```

Open `localhost:3000` in your browser of choice

## Running the tests

```
cd client
```
```
npm run test
```

## Built With

* [React](https://reactjs.org/docs/getting-started.html) - The web framework used
* [Express](https://expressjs.com/en/starter/hello-world.html) - Backend server
* [React-Router](https://reacttraining.com/react-router/core/guides/philosophy) - Used for client side routing for react

## Authors

* **Andrew Delapaz** - *Initial work* - [Portfolio](https://ardelapaz.github.io/) 

## Problem and reasoning

This project was based around collecting data from a public API and displaying it accordingly on the front end in an elegant way.
To go about this, I created an express app that calls the API and returns the data needed to the react application.
In the react application, I used Redux to help manage the state of the application when shows and search results got returned from the API. Redux made displaying the returned data very simple and easy to do.


I decided to use React and Node.js(Express) to make this application for multiple reasons. One of them is that I am overall more comfortable in Javascript than Ruby. React is versatile and easy to use, and coupled with Redux, makes creating a scalable project very easy. Javascript web development is growing more and more popular nowadays and I wanted to show that I can keep up with the technology by incorperating some untaught aspects to javascript web developemnt (React Redux / Node) into something that was taught (React). If I had more time, I'd clean up the UI a bit more. I would also set the state of the show's information in redux rather than passing it in through props to be more uniform with the rest of the app. Testing errors and hosting errors took up too much of my time to be able to fix that, but it would be a quick fix nonetheless.