import { test, chromium, expect,ElementHandle,Page } from "@playwright/test";
import Env from "../utills/environment";
test('File upload', async()=>{
    const browser = await chromium.launch({
       headless : false
    })

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(Env.testLink) 
    await page.click(Env.fUpload)
    await page.click(Env.choose)
   // await page.setInputFiles('')await page.setInputFiles("input[name='file-upload']",filepath0);
   await page.setInputFiles("input[name='file-upload']",'decision_making');
    await page.click(Env.uploadit)
    await page.pause()
})