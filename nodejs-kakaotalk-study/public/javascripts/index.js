// import axios from 'axios';

console.log("its index javascript");


const getToken = (apiKey, redirectUri) => {
  console.log('>>>>>>>>')
  window.open(`https://kauth.kakao.com/oauth/authorize?client_id=${apiKey}&redirect_uri=${redirectUri}&response_type=code`, 'kakao', 'width=420, height=600')
};