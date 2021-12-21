// txt(string): 弹出文本
// style(object): 样式
// time(number): 显示时间

var retTime = null;
var notifyFun = function (txt, style, time = 2) {

  if (!retTime) {
    var notify = $(`<div class="notify"> <span class="glass notify-text">${txt}</span> </div>`).css({
      ...style
    }).appendTo('body');

    retTime = setTimeout(() => {
      notify.remove();
      retTime = null
    }, time * 1000)
  }

 
}