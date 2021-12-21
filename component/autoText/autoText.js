// tag(string): 需要输入文字的标签
// txt(string): 输入的文本
// style(object): 样式
// speed(number): 显示的速度


var autoText = function (tag, txt, style, speed = 200) {
  $('<span id="autoText"></span><span class="cursor"> |</span>').css({
    ...style
  }).appendTo($(tag))
  var str = '';
  var i = 0;
  var time = setInterval(() => {
    str += txt[i];

    $('#autoText').text(str);

    if (i == text.length - 1) {
      clearInterval(time);
      i = 0;
    }
    i++;
  }, speed)
}