
const userAgent = window.navigator.userAgent;

export default class Detect {
  public static ismobile() {
    const ismobile = /iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(
      userAgent.toLowerCase()
    );
    return ismobile;
  }
  public static istablet() {
    const istablet = /ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(
      userAgent.toLowerCase()
    );
    return istablet;
  }
  public static isAdroid() {
    const isAdroid = /android/.test(userAgent.toLowerCase());
    return isAdroid;
  }
  public static isiOS() {
    const isiOS = /ipad|iphone|ipod/.test(userAgent.toLowerCase());
    return isiOS;
  }
  public browserDetect(){
    const  ua = userAgent
    let tem;
    let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) { return tem.slice(1).join(' ').replace('OPR', 'Opera')};
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    const res = ua.match(/version\/(\d+)/i)
    if(res!= null) {
      M.splice(1, 1, res[1])
    };
    return M.join(' ');
  }
}
