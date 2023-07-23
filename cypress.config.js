const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : "https://www.google.com",
    projectId: "6mcnfp",//Bu satir cypress dashboard olusturdugumuzda aldik ve buraya yapistirdik
  },
});

