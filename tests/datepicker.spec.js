import {test ,expect} from '@playwright/test'

test('datepicker',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')


    const date ='25'
    const month = 'November'
    const year = '1996'

    await page.click('//input[@id="datepicker"]')
while(true){
   const monthb= await page.locator('//span[@class="ui-datepicker-month"]').textContent()
    const yearb=await page.locator('//span[@class="ui-datepicker-year"]').textContent()
    if(monthb == month && yearb ==year){
        break
    }
    await page.click('//a[@title="Prev"]', { timeout: 5000 })
    

}

    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)
    
   // await page.click('')
})