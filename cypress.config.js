const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"http://the-internet.herokuapp.com/",
    viewportWidth: 1280,
    viewportHeight: 800
  }
});
