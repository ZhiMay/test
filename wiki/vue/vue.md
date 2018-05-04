# vue 开源项目

1. [vue-cli-multipage多页面脚手架](https://github.com/crli/vue-cli-multipage)
命名约定
　　对于props声明的属性来说，在父级HTML模板中，属性名需要使用中划线写法

复制代码
var parentNode = {
  template: `
  <div class="parent">
    <child my-message="aaa"></child>
    <child my-message="bbb"></child>
  </div>`,
  components: {
    'child': childNode
  }
};
复制代码
　　子级props属性声明时，使用小驼峰或者中划线写法都可以；而子级模板使用从父级传来的变量时，需要使用对应的小驼峰写法

var childNode = {
  template: '<div>{{myMessage}}</div>',
  props:['myMessage']
}
var childNode = {
  template: '<div>{{myMessage}}</div>',
  props:['my-message']
}

[vue 手机端组件库](https://www.cnblogs.com/dupd/p/7735450.html)
[微信中通过页面(H5)直接打开本地app的解决方案
](https://www.cnblogs.com/vipstone/p/7496008.html?utm_source=tuicool&utm_medium=referral)
[iOS里，把一个页面链接分享给好友，好友在微信里打开这个链接,怎么跳到第三方app？](https://www.zhihu.com/question/21311477)
[如何从微信浏览器中跳转到APP指定页面？](https://www.jianshu.com/p/738ac2b8865d)
[iOS微信浏览器直接打开App](https://blog.csdn.net/hbjixieyuan/article/details/55048644)
[iOS/Android 微信及浏览器中唤起本地APP](https://blog.csdn.net/gf771115/article/details/73177153)
[点击微信分享链接打开App](https://www.jianshu.com/p/456455a5c081)
[vue typescript](https://segmentfault.com/a/1190000011853167)
[vuex typescript](https://codeburst.io/vuex-and-typescript-3427ba78cfa8)
[vuex typescript2](https://segmentfault.com/a/1190000011864013)
sudo http-server -P http://tt.alo7.com:8080 -p 80 重定向端口
[vue bus](https://www.cnblogs.com/fanlinqiang/p/7756566.html)
