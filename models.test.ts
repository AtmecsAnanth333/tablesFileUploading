import { test, chromium, expect,ElementHandle,Page } from "@playwright/test";
import Env from "../utills/environment";

test('Launch browser', async()=>{
    const browser = await chromium.launch({
       headless : false
    })

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(Env.testLink)
    await page.click(Env.modelbtn) 
    await page.click(Env.smodelbtn) 
   
    page.on('dialog', async dialog => {

        console.log(dialog.message())
        await dialog.accept();
       

     console.log('The text is')
     console.log(await page.textContent(Env.smtext))
     await page.click(Env.smclose);

     await page.click(Env.formModel)
    // await page.click(Env.smclose) 
    })
    await page.pause()

})
