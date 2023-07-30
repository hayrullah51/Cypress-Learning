const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : "https://www.google.com",
    projectId: "6mcnfp",//Bu satir cypress dashboard olusturdugumuzda aldik ve buraya yapistirdik
    "video": false,
    //testlerin videolarini kaydetmiyor true yazarsak kayit eder
    //default olarak true calisiyor

    //"retries":2
    // Test FAIL oldugunda onu kac kere daha calistirmasi gerektigini belirtiyoruz
    // 2 dersek ilkinde hata alirsa 2 defa daha dene demek

  },
});

