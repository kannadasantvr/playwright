import { test, expect } from '@playwright/test';

test('automation practice', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.fill('#name', 'kannadasan')
    await page.fill('#email', 'kannadasan@gmail.com')
    await page.fill('#phone', '9944601188')
    await page.fill('[id="textarea"]', ' Vadapalani , \nChennai, \n6000026')
    await page.locator('#male').check()
    const days = ['#monday', '#tuesday', '#wednesday', '#thursday', '#friday', '#saturday', '#sunday'];
    // Select checkboxes based on index (0 = Monday, 5 = Friday)
    const selectedIndexes = [0,4,2]; // Indexes of Monday and Friday

    for (const index of selectedIndexes) {
        await page.locator(days[index]).check();
        await expect(page.locator(days[index])).toBeChecked(); // Verify selection
    }

    await page.selectOption('#country','India')
    await page.selectOption('#colors','Red','Green')
    await page.selectOption('#animals','Lion')
    //datepicker 1
    const date = "22"
    const month = "May"
    const year = "2022"
    await page.click('#datepicker')

    while(true){
        const currentMonth = await page.locator('[class="ui-datepicker-month"]').textContent()
        const currentYear = await page.locator('.ui-datepicker-year').textContent()
        if(currentMonth==month && currentYear == year){
            break;
        }
        await page.locator('[title="Prev"]').click()
        //await page.locator('[title="Next"]').click()
    }
   
   // without loops
    //await page.click(`//a[@class='ui-state-default'][text()='${date}']`)

    const selectDate =await page.$$('[class="ui-state-default"]')
    for(const dt of selectDate){
        if(await dt.textContent()==date){
            await dt.click()
            break;
        }
    }
    await page.waitForTimeout(2000)
    //date picker 2
    const date1 = '22'
    const month1 = 'May'
    const year1 = '2022'

    // Open the date picker
    await page.click('#txtDate')
    await page.selectOption('.ui-datepicker-year',year1)
    await page.selectOption('.ui-datepicker-month',month1)
    await page.click('#txtDate'); // Open the calendar
    await page.click(`.ui-datepicker-calendar td >> text=${date1}`);
    //await page.click('.ui-datepicker-calendar td >> text=15');

 
    await page.waitForTimeout(2000)
    //date select and range diff
    const startdate ='2020-04-17'
    const enddate = '2025-05-30'
    await page.getByPlaceholder('Start Date').fill(startdate);
    await page.getByPlaceholder('End Date').fill(enddate);
    await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click();
    const myLocator = await page.locator('#result').innerText()
    console.log('Different Range:', myLocator);
    //file upload
    const filepath = 'C:/Users/kanna/Music/KARTHI_E.pdf'
    const filepath2 =["C:/Users/kanna/Music/professional.jpg","C:/Users/kanna/Music/KARTHI_E.pdf"]
   // await page.setInputFiles('#singleFileInput',filepath)
   // await page.setInputFiles('#multipleFilesInput',filepath2)
    //Drag and drop
    await page.locator('#draggable').dragTo(page.locator('#droppable'));

    await page.waitForTimeout(3000)
    //Slider bar
    const minHandle = page.locator('#slider-range .ui-slider-handle').nth(0);
    const maxHandle = page.locator('#slider-range .ui-slider-handle').nth(1);

    // Get box of the slider container
    const sliderBox = await page.locator('#slider-range').boundingBox();

    // Example: Move min handle to the right (e.g., 50 pixels)
    await minHandle.hover();
    await page.mouse.down();
    await page.mouse.move(sliderBox.x + 80, sliderBox.y + sliderBox.height / 2, { steps: 10 });
    await page.mouse.up();
    await page.waitForTimeout(3000)


    await maxHandle.hover();
    await page.mouse.down();
    await page.mouse.move(sliderBox.x + 200, sliderBox.y + sliderBox.height / 2, { steps: 10 });
    await page.mouse.up();
    const priceValue = await page.locator('input#amount').inputValue();
    console.log('$Price Value:', priceValue);
    
    await page.waitForTimeout(1000)


})
