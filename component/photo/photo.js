var photoLand = function (position) {
  var i = 0;
  var tiem = setInterval(() => {

    if (i < position.length) {
      var photoBox = $(` <div class="photo-box">
      <img class="photo-img" src="${position[i].url}" alt="">
    </div>`).css({
          top: 0,
          left: position[i].left,
          transition: `${position[i].speed}s linear`,
          transform: `rotate(${(Math.random() * -90) + 45 + 'deg'})`,
          // ...style
        })
        .appendTo('body')
      photo(position[i].text, photoBox, position[i].direction)
      photoBox.css({
        top: position[i].top,
      })
      i++
    } else {
      console.log('//');
      clearInterval(tiem)
    }

  }, 1000)

}



var photo = function (text, photoBox, direction) {
  var bubble = $(`<span class="bubble">${text}</span>`).appendTo(photoBox)
  var width = bubble.outerWidth()
  bubble.css({
    width: '0',
    transition: '1s',
    ...direction
  })
  photoBox.click(function (e) {
    
    showBubble()
    e.stopPropagation();
    photoBox.css({
      zIndex: 10,
    })
    bubble.css({
      width: width + 10 + 'px',
      padding: '5px',
    });

    
  })

}


var showBubble = function () {
  $('.bubble').css({
    width: '0',
    padding: '5px 0',
  })

  $('.photo-box').css({
    zIndex: 3
  })
}