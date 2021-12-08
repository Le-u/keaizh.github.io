let progress = 0;
let enterTime = null,
  outTime = null;

function enterProgress() {
  if(progress === 100){
    progress = 0;
  }
  if (!enterTime) {
    clearInterval(outTime);
    outTime = null;
    enterTime = setInterval(() => {
      progress++
      $('.progress').css({
        width: progress + '%'
      })

      if (progress === 100) {
        clearInterval(enterTime)
        enterTime = null;
      }
    }, 50)
  }
}


function outProgress() {
  if (!outTime && progress !== 100) {
    clearInterval(enterTime);
    enterTime = null;
    outTime = setInterval(() => {
      progress--
      $('.progress').css({
        width: progress + '%'
      })

      if (!progress) {
        clearInterval(outTime)
        outTime = null;
      }
    }, 50)
  }
}