  // txt(string): 显示的文本
  // style(object): 样式
  // quantity(number): 下落的数量
  // speed(number): 下落的速度
  
  var landFun = function (txt, style,quantity = 30,speed = 5) {
  let i = 0;

    return new Promise((res)=>{
      var time = setInterval(() => {

        if (i <= quantity) {
          var land = $('<span>mua</span>')
            .addClass('land')
            .text(txt)
            .css({
              left: Math.random() * $('body').innerWidth() + 'px',
              transition: `${speed}s linear`,
              transform: `rotate(${(Math.random() * -90) + 45 + 'deg'})`,
              ...style
            })
            .appendTo('body')
            .css({
              top: $('body').innerHeight() + 'px'
            })
    
          setTimeout(() => {
            land.remove()
          }, speed * 1000)
          i++;
    
    
        } else {
          clearInterval(time)
          res(true)
        }
      }, 600)
    })

}