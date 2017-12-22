// 浏览器版本
function mybrower() { // 判断浏览器版本
  var agent = navigator.userAgent.toLowerCase();
  //IE
  if (agent.indexOf("msie") > 0) {
    return agent.match(/msie ([\d.]+)/);
  }

  //firefox
  if (agent.indexOf("firefox") > 0) {
    return agent.match(/firefox\/([\d.]+)/);
  }

  //Chrome
  if (agent.indexOf("chrome") > 0) {
    return agent.match(/chrome\/([\d.]+)/);
  }

  //Safari
  if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
    return agent.match(/version\/([\d.]+).*safari/);
  }

}