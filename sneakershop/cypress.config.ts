import { defineConfig } from "cypress";


export default defineConfig({
  video: false,
  e2e: {
    retries: {
      // Configure retry attempts for `cypress run`
      runMode: 2, //these retries may be a neccesary workaround for flaky tests
      // Configure retry attempts for `cypress open`
      openMode: 0,
    },
    defaultCommandTimeout: 20_000, //workaround for slow startup in CI pipeline
    setupNodeEvents(on, config) {
      // include any other plugin code...

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return config;
    },
    baseUrl: "http://localhost:3000",
    // Reporter configuration for mochawesome
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports", // The directory where the reports will be saved
      overwrite: false, // Set to true to overwrite reports on each test run
      html: false, // Set to true to generate HTML reports
    },
  },
});

