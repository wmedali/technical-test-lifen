/// <reference types="cypress" />

const cucumber = require('cypress-cucumber-preprocessor').default
const dotenvPlugin = require('cypress-dotenv');

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
  config = dotenvPlugin(config, {}, true)
  console.log('configuration', config)
  return config
}