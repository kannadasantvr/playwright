import{test,expect} from '@playwright/test'


test('@Child windows hadl', async ({browser})=>{

    //Creates a new browser context, which is like an incognito window.
    //It ensures a clean session (no cookies, storage, etc.)
     const context = await browser.newContext();

     //Opens a new tab/page in the created browser context.
     const page =  await context.newPage();

     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
     const documentLink = page.locator("[href*='documents-request']");
  

     //context.waitForEvent('page') tells Playwright: “I’m expecting a new page to open.”
    //documentLink.click() triggers that event by clicking the link.
    //Promise.all ensures both run together — Playwright waits until the new page (child window) is fully created and loaded.
    //newPage is the child window/tab.
     const [newPage]=await Promise.all(
    [
       context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
       documentLink.click(),
    
    ])//new page is opened

     // Use inputValue() instead of textContent() for input fields
    const  text = await newPage.locator(".red").textContent();
     const arrayText = text.split("@")
     const domain =  arrayText[1].split(" ")[0]
     console.log(domain);
     await page.locator("#username").fill(domain);
     console.log(await page.locator("#username").textContent());

     await page.setDefaultTimeout(7000)
     //await page.pause() //debug 
  
  })
  
