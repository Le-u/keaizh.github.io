var maxPhoto = function (i) {
  urlIndex = i;
  url.forEach((item, index) => {
    $(`<div class="maxPhoto-exhibit"><img class="maxPhoto-exhibit-img" src="${item}" alt=""></div>`)
      .css({
        left: (index - i) * 100 + 'vw'
      })
      .appendTo('.maxPhoto')
  })
}

var next = function (e) {
  return new Promise((resolve, reject) => {
    if (urlIndex < url.length - 1) {
      ++urlIndex;
      $.each($('.maxPhoto-exhibit'), function (index, n) {
        $(n).css({
          left: (index - urlIndex) * 100 + 'vw'
        })
      })
    } else {
      resolve(true)
    }
  })
}


var prev = function (e) {
  return new Promise((resolve, reject) => {
    if (urlIndex > 0) {
      --urlIndex;
      $.each($('.maxPhoto-exhibit'), function (index, n) {
        $(n).css({
          left: (index - urlIndex) * 100 + 'vw'
        })
      })
    } else {
      resolve(true)
    }
  })
}

var prevX = function(e){
  $('.maxPhoto').css({
    bottom: '-100vh'
  })
  $('.maxPhoto-exhibit').remove();
}