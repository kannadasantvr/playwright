import { test, expect } from '@playwright/test';


test('automation exe',async({page})=>{
    await page.goto('https://automationexercise.com/')
    await expect(page).toHaveTitle('Automation Exercise');
    await page.click("//a[contains(text(),'Signup')]")
    await expect(page.locator('//div[@class="signup-form"]')).toBeVisible();
    await page.fill('//input[@data-qa="signup-name"]','kannadasan')
    await page.fill('//input[@data-qa="signup-email"]','Kannadasan@gmail.com')
    await page.click("//button[text()='Signup']")
    await page.setDefaultTimeout(4000)
    const myLocator = await page.locator('(//h2[@class="title text-center"])[1]').innerText()
    console.log('Information page title:', myLocator);
    await page.check('#id_gender1')
    await page.fill('[id="password"]','Kannadasan@1112')
    await page.selectOption('#days', '10');   
    await page.selectOption('#months', 'March');   
    await page.selectOption('#years', '1994'); 
    await page.check('[id="newsletter"]') 
    await page.check('#optin')
    await page.fill('[id="first_name"]','kannadasan') 
    await page.fill('#last_name','karthikeyan') 
    await page.fill('#company','universal softech') 
    await page.fill('#company','universal softech') 

    await page.pause()


})