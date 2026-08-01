// import { defineConfig, devices } from '@playwright/test';
// import 'dotenv/config';

// export default defineConfig({
//   testDir: './tests',

//   fullyParallel: false,
//   workers: 1,
//   retries: process.env.CI ? 2 : 0,
//   forbidOnly: !!process.env.CI,

//   timeout: 60000,

//   expect: {
//     timeout: 15000,
//   },

//   reporter: [
//     ['list'],
//     ['html']
//   ],

//   use: {
//     baseURL: 'https://app.beta.serri.co.in',

//     headless: false,

//     screenshot: 'only-on-failure',
//     video: 'retain-on-failure',
//     trace: 'retain-on-failure',

//     actionTimeout: 15000,
//     navigationTimeout: 30000,

//     ignoreHTTPSErrors: true,
//   },

//   projects: [
//     {
//       name: 'chromium',
//       use: {
//         ...devices['Desktop Chrome'],
//       },
//     },
//   ],
// });






// import { defineConfig, devices } from '@playwright/test';
// import 'dotenv/config';

// export default defineConfig({
//   testDir: './tests',

//   fullyParallel: false,
//   workers: 1,
//   retries: process.env.CI ? 2 : 0,
//   forbidOnly: !!process.env.CI,

//   timeout: 60000,

//   expect: {
//     timeout: 15000,
//   },

//   reporter: [
//     ['list'],
//     ['html', { open: 'never' }],
//   ],

//   use: {
//     baseURL: process.env.BASE_URL,

//     headless: true,

//     screenshot: 'only-on-failure',
//     video: 'retain-on-failure',
//     trace: 'retain-on-failure',

//     actionTimeout: 15000,
//     navigationTimeout: 30000,

//     ignoreHTTPSErrors: true,
//   },

//   projects: [
//     {
//       name: 'chromium',
//       use: {
//         ...devices['Desktop Chrome'],
//       },
//     },
//   ],
// });




import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({

  testDir: './tests',

  fullyParallel: false,

  workers: 1,

  retries: 0,

  timeout: 60000,

  expect: {
    timeout: 15000,
  },

  reporter: [
    ['list'],
    ['html']
  ],

  use: {

    baseURL: 'https://app.beta.serri.co.in',

    headless: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    actionTimeout: 15000,

    navigationTimeout: 30000,

    ignoreHTTPSErrors: true,

  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],

});