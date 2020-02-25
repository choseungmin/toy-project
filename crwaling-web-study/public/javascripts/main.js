const clickBtn = (param) => {
  console.log('click >>> ', param)
  $.ajax({
    url: './users',
    success: (data) => {
      console.log('data', data)
    }
  })
}