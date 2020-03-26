var express = require('express');
var router = express.Router();
const request = require("request");
const rp= require("request-promise");

/* GET home page. */
router.get('/', function(req, res, next) {
  const { KAKAO_KEY, REDIRECT_URI } = process.env;
  res.render('index', { title: 'Express', apiKey: KAKAO_KEY, redirectUri: REDIRECT_URI });
});

// router.get("/auth/callback", (req, res) => {
//
//   // const { code } = req.query;
//   // console.log('code', code)
//
//
//   const { KAKAO_KEY: apikey, REDIRECT_URI: redirectUri } = process.env;
//   const { code } = req.query;
//
//   const options = {
//     uri: "https://kauth.kakao.com/oauth/token",
//     method: "POST",
//     form: {
//       grant_type: "authorization_code",
//       client_id: apikey,
//       redirect_uri: redirectUri,
//       code: code,
//       client_secret: secretkey
//     },
//     headers: {
//       "content-type" : "application/x-www-form-urlencoded"
//     },
//     json: true
//   }
//
//   const cb = await rp(options);
//
//   if (cb["access_token"]) {
//     res.render("callback", { result : 0 });
//   } else {
//     res.render("callback", { result : 1 });
//   }
//
//
// });

router.get("/auth/callback", async (req, res) => {

  const { KAKAO_KEY: apikey, REDIRECT_URI: redirectUri } = process.env;
  const { code } = req.query;

  const options = {
    uri: "https://kauth.kakao.com/oauth/token",
    method: "POST",
    form: {
      grant_type: "authorization_code",
      client_id: apikey,
      redirect_uri: redirectUri,
      code: code,
    },
    headers: {
      "content-type" : "application/x-www-form-urlencoded"
    },
    json: true
  };

  const cb = await rp(options);

  if (cb["access_token"]) {
    res.render("callback", { result : 0 });
  } else {
    res.render("callback", { result : 1 });
  }
});

module.exports = router;
