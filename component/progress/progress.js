let progress = 0;
let enterTime = null,
  outTime = null;

function enterProgress() {

  return new Promise((res)=>{
    $('.glass-module').show();
    if (progress === 100) {
      progress = 0;
    }
    if (!enterTime) {
      clearInterval(outTime);
      outTime = null;
      enterTime = setInterval(() => {
        progress++
        $('.progress-text').text(progress + '%')
        $('.progress').css({
          width: progress + '%'
        })
  
        if (progress === 100) {
          clearInterval(enterTime)
          enterTime = null;
          $('.glass-module').hide();
          res(progress);
        }
      }, 50)
    }
  })


}


function outProgress() {
 return new Promise((res)=>{
  if (!outTime && progress !== 100) {
    clearInterval(enterTime);
    enterTime = null;
    outTime = setInterval(() => {
      progress--;
      $('.progress-text').text(progress + '%')
      $('.progress').css({
        width: progress + '%'
      })

      if (!progress || progress < 0) {
        $('.glass-module').hide();
        clearInterval(outTime)
        outTime = null;
        res(progress);
      }
    }, 50)
  }
 })

}