# Prerequisites

In order to run tests tests in this repository, you need to have 
1. node & npm already installed in your machine. [Download & Install](https://nodejs.org/en/)
2. valid credentials to access Lifen app.

# Steps to run the tests 

## 1. Setup 

Clone the repository, open it's path in the terminal and run the following command :  
`npm install`  
Then create an `.env` file in the root repository and add two variables EMAIL & PASSWORD. As a values please put the valid Lifen app credentials. Example : 
```
EMAIL=blablabla@gmail.com
PASSWORD=yoyoyoyo
```

## 2. Run the tests

Run the following command to open the Cypress Test Runner :  
`npm run cy:open`  
Then execute the tests. 

In order to run tests in a headless mode, just execute the command :  
`npm run cy:run:headless`  
and watch the generated video in the folder `cypress/videos`
