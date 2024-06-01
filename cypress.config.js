const { defineConfig } = require("cypress");

module.exports = defineConfig({
   reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on, _) {
      // implement node event listeners here
        require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
   video: true,
  screenshotOnRunFailure: true,
});