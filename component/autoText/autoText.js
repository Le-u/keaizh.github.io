
  var autoText = function (tag, text,obj,speed = 200) {
    $('<span id="autoText"></span><span class="cursor"> |</span>').css({...obj}).appendTo($(tag))
    var str = '';
    var i = 0;
    var time = setInterval(() => {
      str += text[i];

      $('#autoText').text(str);
      
      if (i == text.length - 1) {
        clearInterval(time);
        i = 0;
      }
      i++;
    }, speed)
  }
