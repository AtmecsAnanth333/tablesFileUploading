import { test, chromium, expect,ElementHandle,Page } from "@playwright/test";
import Env from "../utills/environment";

test('Launch browser', async()=>{
    const browser = await chromium.launch({
       headless : false
    })

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(Env.testLink) 
    await page.click(Env.tableBtn)

    let table=String(Env.tableBtn);
    
    const row = page.locator(Env.rowValue)
const rowTexts = await row.locator(Env.rowValue).allInnerTexts()
await rowTexts.forEach((text) => {
  console.log(text)
  
})

})
