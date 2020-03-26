var express = require('express');
var router = express.Router();
//puppeteer
const puppeteer = require('puppeteer');


/* GET main page. */
router.get('/', function(req, res, next) {
  res.render('main', { title: 'Main' });
});

router.post('/crawling', async function(req, res, next) {
  console.log('>>', req.body.id)

  const img = await getWebpageImg(req.body.id, req.body.pw)
  console.log(img);



  res.send(img)
  // res.sendFile(img)
});

const getWebpageImg = async (naver_id, naver_pw) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://nid.naver.com/nidlogin.login');
  await page.evaluate((id, pw) => {
    document.querySelector('#id').value = id;
    document.querySelector('#pw').value = pw;
  }, naver_id, naver_pw);
  await page.click('.btn_global');
  await page.waitForNavigation();
  await page.goto('https://naver.com');
  const fileName = makeid(5);
  await page.screenshot({ path: `public/images/${fileName}.png`, fullPage:true });
  const img = await page.screenshot({fullPage:true });
  await browser.close();
  // return img;
  return `/images/${fileName}.png`;
};

const makeid = (length) =>{
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


module.exports = router;
