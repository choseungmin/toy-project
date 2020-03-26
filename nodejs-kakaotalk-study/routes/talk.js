var express = require('express');
var router = express.Router();
var axios = require('axios');
const request = require("request");

/* GET home page. */
router.get('/', function(req, res, next) {



  res.render('talk', { title: 'Talk' });
});

router.get('/getProfile', function(req, res, next) {
  //
  // const { KAKAO_KEY : apikey } = process.env;
  // const { code } = req.query;
  // axios.get('https://kapi.kakao.com/v1/api/talk/profile', {headers: {Authorization: 'Bearer A0W8OVSnnwBXRrRMqGC5Zbv1FR0od3Rcffsoxwopb9UAAAFwq6VDtA'}});

  const { KAKAO_KEY : apikey } = process.env;
  const { code } = req.query;
  const options = {
    grant_type: "authorization_code",
    client_id: apikey,
    code: code
  }

  request("https://kapi.kakao.com/v1/api/talk/profile", { form : options }, (error, response, body) => {
    console.log('body', body);
  })


});

module.exports = router;
