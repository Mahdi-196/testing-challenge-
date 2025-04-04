import { defineConfig } from 'cypress'
import viteConfig from './vite.config'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {},
    specPattern: 'cypress/e2e/**/*.cy.{js,ts,jsx,tsx}',
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig,
    },
    specPattern: 'cypress/component/**/*.cy.{js,ts,jsx,tsx}',
  },
})
