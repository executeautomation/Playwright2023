import { defineConfig } from '@playwright/test';
import { devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 2,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['dot'],
    ['list'],
    ['allure-playwright'],
    ['json', { outputFile: 'report.json' }]
  ],
  use: {
    headless: true,
    baseURL: 'http://eaapp.somee.com',
    browserName: 'firefox',
    actionTimeout: 0,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    testIdAttribute: 'data-test-id'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        headless: false,
        video: 'on',
        screenshot: 'only-on-failure',
        ...devices['Desktop Chrome'],
      },
    },

    // {
    //   name: 'firefox',
    //   use: {
    //     video: 'on',
    //     headless:false,
    //     ...devices['Desktop Firefox'],
    //   },
    // },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },

    // /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     headless: false,
    //     ...devices['Pixel 5'],
    //   },
    // },
  ],
});
