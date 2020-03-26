const clickBtn = (param) => {
  // console.log('click >>> ', param)
  $.ajax({
    type:'post',
    data:{id: $('#id')[0].value, pw: $('#pw')[0].value},
    url: './main/crawling',
    success: (data) => {
      $('#img').attr('src', data);
      console.log('data', data)
    }
  })
}