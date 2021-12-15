var notifyFun = function(txt,obj,time = 2){
  var notify = $(`<div class="notify"> <span class="glass notify-text">${txt}</span> </div>`).css({...obj}).appendTo('body');
  
  setTimeout(()=>{
    notify.hide();
  },time * 1000)
}