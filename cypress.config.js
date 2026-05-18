const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "pipfv6",
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://the-internet.herokuapp.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
