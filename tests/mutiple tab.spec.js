import{test,expect} from '@playwright/test'


test('page handle',async ({page})=>{
  await page.goto('https://www.flipkart.com/')
  
  await page.fill('[class="Pke_EE"]','iphone15')
  await page.press('[class="Pke_EE"]', 'Enter');
  await page.locator('//div[text()="Apple iPhone 15 (Black, 128 GB)"]').click()
  await page.click('//li[@class="col col-6-12 flex"]')
  await page.setDefaultTimeout(7000)
  await page.pause()


  


})