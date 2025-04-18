import{test,expect,firefox} from '@playwright/test'

test('mutliple window tab',async({})=>{
const browser=await firefox.launch()
const context=await browser.newContext()
const pageone =await context.newPage()
const pagetwo =await context.newPage()

await pageone.goto('https://www.flipkart.com/')
await pagetwo.goto('https://playwright.dev/docs/pages')

    
})

test('lanch chrome',async({})=>{
 const browser=await chromium.launch()
 const makeup =await browser.newContext()
 const np=await makeup.newPage()
 await np


})

