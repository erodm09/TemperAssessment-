const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'w2poio',
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
