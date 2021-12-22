var exhibit = false,
  url = [],
  urlIndex;

var photoLand = function (position, fun,notifyFun) {
  var i = 0;
  var tiem = setInterval(() => {

    if (i < position.length) {
      var photoBox = $(` <div class="photo-box" >
      <img class="photo-img" src="${position[i].url}" alt="">
    </div>`).css({
          top: -($('body').innerHeight() - $('.bg-christmas-tree').innerHeight()) + 'px',
          left: position[i].left,
          transition: `${position[i].speed}s linear`,
          transform: `rotate(${(Math.random() * -90) + 45 + 'deg'})`,
          // ...style
        })
        .appendTo('.bg-christmas-tree')

      photo(position, photoBox, i, fun,notifyFun)
      photoBox.attr({
        'exhibit': 'false'
      })
      photoBox.css({
        top: position[i].top,
      })

      url.push(position[i].url)

      i++
    } else {
      clearInterval(tiem)
    }

  }, 500)

}



var photo = function (position, photoBox, i, fun,notifyFun) {
  var bubble = $(`<span class="bubble">${position[i].text}</span>`).appendTo(photoBox)
  var width = bubble.outerWidth()
  bubble.css({
    width: '0',
    transition: '1s',
    ...position[i].direction
  })
  photoBox.click(function (e) {
    if (exhibit && $(e.currentTarget).attr('exhibit') == 'true') {
      $('.maxPhoto').css({
        bottom: 0
      })
      exhibit = false;

      fun(i)
      notifyFun('点击退出，长按保存',{}, 4)
      showBubble(photoBox)
    } else {
      showBubble(photoBox)


      $(e.currentTarget).attr('exhibit', 'true')
      e.stopPropagation();
      photoBox.css({
        zIndex: 10,
      })
      bubble.css({
        width: width + 10 + 'px',
        padding: '5px',
      });
      exhibit = true
    }


  })

}


var showBubble = function (photoBox) {
  $('.bubble').css({
    width: '0',
    padding: '5px 0',
  })
  exhibit = false;

  if (photoBox) {
    $('.photo-box').attr('exhibit', 'false')
  }

  $('.photo-box').css({
    zIndex: 3
  })
}