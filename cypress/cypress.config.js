import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    setupNodeEvents(on, config) {},
    specPattern: "src/**/*.test.{js, ts, jsx, tsx}",
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
