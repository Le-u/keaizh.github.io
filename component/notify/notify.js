var retTime = null;
var notifyFun = function (txt, obj, time = 2) {

  if (!retTime) {
    var notify = $(`<div class="notify"> <span class="glass notify-text">${txt}</span> </div>`).css({
      ...obj
    }).appendTo('body');

    retTime = setTimeout(() => {
      notify.remove();
      retTime = null
    }, time * 1000)
  }

 
}