import { test, expect } from '@playwright/test';

test.describe('Automation Practice Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
  });

  test('Form Filling and Calendar Date Picker', async ({ page }) => {
    await page.fill('#name', 'kannadasan');
    await page.fill('#email', 'kannadasan@gmail.com');
    await page.fill('#phone', '9944601188');
    await page.fill('[id="textarea"]', ' Vadapalani , \nChennai, \n6000026');
    await page.locator('#male').check();

    const days = ['#monday', '#tuesday', '#wednesday', '#thursday', '#friday', '#saturday', '#sunday'];
    const selectedIndexes = [0, 4, 2];

    for (const index of selectedIndexes) {
      await page.locator(days[index]).check();
      await expect(page.locator(days[index])).toBeChecked();
    }

    await page.selectOption('#country', 'India');
    await page.selectOption('#colors', 'Green');
    await page.selectOption('#animals', 'Lion');

    const date = "22";
    const month = "May";
    const year = "2022";

    await page.click('#datepicker');
    while (true) {
      const currentMonth = await page.locator('.ui-datepicker-month').textContent();
      const currentYear = await page.locator('.ui-datepicker-year').textContent();
      if (currentMonth === month && currentYear === year) break;
      await page.locator('[title="Prev"]').click();
    }

    const selectDate = await page.$$('[class="ui-state-default"]');
    for (const dt of selectDate) {
      if (await dt.textContent() === date) {
        await dt.click();
        break;
      }
    }
    await page.screenshot({ path: 'screenshots/screenshot.png' });
    await page.screenshot({ path: 'screenshots/fullpage.png', fullPage: true });
    await page.waitForTimeout(3000);
  });

  test('Date Picker 2', async ({ page }) => {
    const date = '22';
    const month = 'May';
    const year = '2022';

    await page.click('#txtDate');
    await page.selectOption('.ui-datepicker-year', year);
    await page.selectOption('.ui-datepicker-month', month);
    await page.click(`.ui-datepicker-calendar td >> text=${date}`);

    await page.waitForTimeout(5000);
    //date select 
    const startdate = '2020-04-17';
    const enddate = '2025-05-30';
    await page.getByPlaceholder('Start Date').fill(startdate);
    await page.getByPlaceholder('End Date').fill(enddate);
    await page.locator('#post-body-1307673142697428135')
      .getByRole('button', { name: 'Submit' }).click();

    const resultText = await page.locator('#result').innerText();
    console.log('Result Text:', resultText);
    //file upload
    const singleFile = 'C:/Users/kanna/Music/KARTHI_E.pdf';
    const multipleFiles = [
      'C:/Users/kanna/Music/professional.jpg',
      'C:/Users/kanna/Music/KARTHI_E.pdf'
    ];

   // await page.setInputFiles('#singleFileInput', singleFile);
   // await page.setInputFiles('#multipleFilesInput', multipleFiles);
    //drag and drop
    await page.locator('#draggable').dragTo(page.locator('#droppable'));



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
   

    //await expect(page.locator('text=$43 - $249')).toBeVisible();  // Adjust range dynamically if needed



    await page.waitForTimeout(5000);
  });
})




