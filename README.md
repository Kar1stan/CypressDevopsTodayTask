# CypressDevopsTodayTask
***
Three automated test cases,testing playlist https://vite-react-alpha-lemon.vercel.app/ and using environment variables.

## 💻 Topics

Integrated with:

- [x] https://www.npmjs.com/package/@shelex/cypress-allure-plugin
- [x] https://www.npmjs.com/package/allure-commandline

## 💻 Pre-requisites

Before you use this project you only need to have Node.js installed in your computer.

https://nodejs.org/es/download/

Also delete package.lock file before you run your project.

### Git clone
This will clone the project, install NPM packages and also the Cypress.io which is required to run the test. No Selenium Server is required.
```
$ git clone https://github.com/CypressDevopsTodayTask.git
$ cd CypressDevopsTodayTask
$ npm install
```

## 🚀 Run the project
To run the tests using Chrome open terminal and run the command:
```
$ npm run cypress:open
```
To create allure report and open it , open terminal and run the commands:
```
$ allure generate && allure open
```
This will generate a report (by default in ./allure-report), and open it in your browser.

## Credits
For further help or additional errors [here](https://docs.cypress.io/guides/getting-started/installing-cypress#What-you-ll-learn)

If you want help about allure [here](https://docs.qameta.io/allure/)

//--headless
// --headed
