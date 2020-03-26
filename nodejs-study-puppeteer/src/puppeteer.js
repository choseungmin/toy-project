const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const naver_id = "id";
  const naver_pw = "pw";
  await page.goto('https://nid.naver.com/nidlogin.login');
  await page.evaluate((id, pw) => {
    document.querySelector('#id').value = id;
    document.querySelector('#pw').value = pw;
  }, naver_id, naver_pw);
  await page.click('.btn_global');
  await page.waitForNavigation();
  await page.goto('https://naver.com');
  await page.screenshot({ path: 'naver.png', fullPage:true });
  await browser.close();
})();