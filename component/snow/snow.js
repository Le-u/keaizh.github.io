  // url(string): 图片背景
  // style(object): 自定义样式
  // speed(number/string): 下降速度
  // intensive(number): 密度
  
  var snow = function (url = '../img/雪花.png', style, speed = 5,intensive = 50) {
    setInterval(() => {
        var land = $('<div class="snow"></div>')
          .css({
            backgroundImage: `url(${url})`,
            left: Math.random() * $('body').innerWidth() + 'px',
            transition: `${speed}s linear`,
            transform: `rotate(${(Math.random() * 360) + 'deg'})`,
            ...style
          })
          .appendTo('body')
          .css({
            top: $('body').innerHeight() + 'px',

          })

        setTimeout(() => {
          land.remove()
        }, speed * 1000)


    }, intensive)

  }
