console.log("its talk javascript")

const sendTalk = () => {


  console.log($('#msg').val())

}

const getProfile = () => {

  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  axios.get('/talk/getProfile', {token: token})

}



// axios.get(
//   'https://kapi.kakao.com/v1/api/talk/profile',
//   {'headers':{Authorization: 'Bearer A0W8OVSnnwBXRrRMqGC5Zbv1FR0od3Rcffsoxwopb9UAAAFwq6VDtA'}}
// ).then((result) => {
//     console.log(result)
// })

