const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 4000,
    retries: {
      runMode: 2,
      openMode: 1,
    },
    setupNodeEvents(on, config) {
      require('@shelex/cypress-allure-plugin/writer')(on, config);
      return config;
    },
    baseUrl: "https://automationexercise.com",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
  },
  env: {
    allure: true
  },
  reporter: "spec",
});
