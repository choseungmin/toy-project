const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;

// let page = 1;
// let maxPage = 1;

const getAjax = async (page) => {


  try {
    return await axios.get("http://www.zimcarry.net/html/contents/rooms_list_ajax.php?page="+page);
  } catch (error) {
    console.error(error);
  }
};

getAjax(1).then(result => {

  // log(result.data.rooms_list);
  // log(result.data.paging);

  // const $rooms = cheerio.load(html.data.rooms_list);
  const $ = cheerio.load(result.data.paging);

  maxPage = $("a.last").attr('onclick').match(/\d+/g).map(Number)[0];
  return maxPage;

}).then(maxPage => {
  console.log("maxPage:", maxPage)
  for(var i=0; i<maxPage; i++) {
    getAjax(i+1).then(result => {

      const $ = cheerio.load(result.data.rooms_list);
      const $roomList = $("div.hotel-item");

      $roomList.each((index, item) => {
        // 숙소명
        console.log($(item).find("p.name").text());
        // 주소
        console.log($(item).find("span").text());

        // 위도,경도
        // console.log($(item).find("a").attr("href"));
        const param = [];
        const params = $(item).find("a").attr("href").split("&");
        let key, value;
        params.map((item, index) => {
          key = params[index].split("=")[0];
          value = params[index].split("=")[1];
          // if(key == 'lng' || key == 'lat') {
            param[key] = value;
          // }
        })
        console.log(param)
      })


    })
  }
});


