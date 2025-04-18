import { test, expect } from '@playwright/test';

test('login page', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
  await expect(page).toHaveURL('https://rahulshettyacademy.com/loginpagePractise/')
  const productTitle = await page.locator('.card-body a')
  //await expect(page.getByText('Welcome')).toBeVisible();
  await expect(page.locator('//a[@class="blinkingText"]')).toBeVisible()
  // Get the blinking text and print it
  const blinkingText = await page.locator('.blinkingText').innerText();
  console.log('Blinking Text:', blinkingText);

  await page.fill('#username', 'rahulshettyacademy')

  await expect(page.locator('#username')).toHaveValue('rahulshettyacademy')

  await page.fill('#password', 'learning')
  await page.locator('#signInBtn').click()
  await page.locator('//div[@class="form-check-inline"]').click()



  // console.log(await productTitle.first().textContent())
  // const allText = await productTitle.allTextContents();
  // console.log(allText)


})