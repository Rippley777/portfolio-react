// playwright.config.js
const { devices } = require('@playwright/test');

module.exports = {
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
  snapshotDir: './tests/snapshots',
  reporter: [['html', { outputFolder: './playwright-report' }]],
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
};
