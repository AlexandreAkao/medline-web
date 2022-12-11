import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    viewportWidth: 1280,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
