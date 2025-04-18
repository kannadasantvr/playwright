import {defineConfig ,device } from '@playwright/test';


export default defineConfig ({

  testDir : './tests',
  timeout : 60000,
  expect : {
    timeout : 10000,
  },
  reporter: [['html','line']],
  use : {
    browserName : 'chromium',
    headless : false
  }
})
