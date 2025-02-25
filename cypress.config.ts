import { defineConfig } from 'cypress'; 
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
require('dotenv').config()

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    env: {
      allureReuseAfterSpec: true,
      track_name: process.env.TRACK_NAME,
      url: process.env.URL
    },
    baseUrl: Cypress.env('url'),
    specPattern: '**/*.spec.{js,jsx,ts,tsx}',
    chromeWebSecurity: false,
  },
});
