[css 布局](https://juejin.im/post/5aa252ac518825558001d5de?utm_medium=fe&utm_source=weixinqun)
## handlebars generate html: 
 https://github.com/patrickkettner/grunt-compile-handlebars

## handlebars a html demo: 
  https://stackoverflow.com/questions/30030551/node-express-how-to-render-handlebars-html-page-to-file
  ### eg:
      var Handlebars = require('handlebars');

      var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
          "{{kids.length}} kids:</p>" +
          "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
      var template = Handlebars.compile(source);

      var data = { "name": "Alan", "hometown": "Somewhere, TX",
          "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
      var result = template(data);


      var fs = require('fs');
          fs.writeFile("test.html", result, function(err) {
          if(err) {
              return console.log(err);
          }
      });
## node exports:
  http://blog.csdn.net/pwiling/article/details/51958693 
## pug api:
  https://pugjs.org/api/reference.html
## svn use:

  [svn 用法](https://www.codelast.com/%E5%8E%9F%E5%88%9B-linux%E5%91%BD%E4%BB%A4%E8%A1%8C%E4%B8%8B%E4%BD%BF%E7%94%A8svn%E5%92%8Cgit%E7%9A%84%E4%B8%80%E4%BA%9B%E7%94%A8%E6%B3%95%E6%80%BB%E7%BB%93/)

## markdown 文档

  [markdown 教程](http://www.jianshu.com/p/1e402922ee32/)

  [javascript api](https://docs.microsoft.com/en-us/
  scripting/javascript/reference/reduce-method-array-javascript)

## vw 和 vh 单位
[纯CSS3使用vw和vh视口单位实现自适应](http://caibaojian.com/vw-vh.html)
[CSS中如何使用视窗单位](https://www.w3cplus.com/css/simplify-your-stylesheets-with-the-magical-css-viewport-units.html)
[前端开发博客](http://caibaojian.com/fe-daily-20170823.html)
## vue

[使用Vue.js和Axios从第三方API获取数据](http://caibaojian.com/fetching-data-with-vue-js.html)

[查看在线的版本 here](http://vuejs-news.herokuapp.com/)

[sitepoint-editors/vuejs-news 源码](https://github.com/sitepoint-editors/vuejs-news/blob/master/index.html)

[一个高度可定制的vue modal插件](https://github.com/shaodahong/dahong/issues/10)

[组件分享好用的 Vue Component for Highcharts](https://juejin.im/entry/58f9c515570c350058cc10e8?utm_medium=hao.caibaojian.com&utm_source=hao.caibaojian.com)

[不容错过的 Vue2.0 组件开发](http://hao.caibaojian.com/29008.html)

[Vue2 利用 v-model 实现组件props双向绑定的优美解决方案](https://segmentfault.com/a/1190000008662112)

[vue 常用ui组件](http://blog.csdn.net/zgrkaka/article/details/53897202)

[Vue相关开源项目库汇总](https://github.com/opendigg/awesome-github-vue#Demo%E7%A4%BA%E4%BE%8B)

[demo1](https://github.com/xiaotuni/vue2-demo)

[demo2](https://github.com/halfrost/vue-objccn)

[9个超赞的视觉效果](http://www.zcfy.cc/article/html-css-and-javascript-10-awesome-codepens-to-inspire-you-4101.html?t=new)

[什么？页面卡顿？操作慢？](https://juejin.im/entry/59a67ef06fb9a024903aba71?utm_source=weixinqun&utm_medium=fe)
[Vue 生命周期](http://www.imooc.com/article/16117)

[Tips on axios](http://www.jianshu.com/p/e1525c0ec159)

[关于Vue实例的生命周期created和mounted的区别](https://segmentfault.com/a/1190000008570622)
1.面试的妹纸问我：web缓存设置不是后台的事情吗？
http://t.cn/RNqxgSR

2.Vue 组件间的样式污染
http://t.cn/RNqiNlL

3. 组件简介
  http://www.cnblogs.com/keepfool/p/5625583.html

## casperJs

[casperJs](http://casperjs.org/)

[ css3中单位px,em,rem,vh,vw,vmin,vmax的区别及浏览器支持情况](http://blog.csdn.net/jyy_12/article/details/42557241)

[浏览器内核趣闻](http://www.jianshu.com/p/94abc5f88e11)

[Chrome 网页调试技巧](http://www.jianshu.com/p/2a3e3f0b562b)

link[https://www.lynda.com/

http://css-weekly.com/

http://javascriptweekly.com/

http://codepen.io/]

[How To Publish Your Vue.js Component On NPM](https://vuejsdevelopers.com/2017/07/31/vue-component-publish-npm/)

微信开发搭建服务器  

[微信本地开发环境搭建](http://www.jianshu.com/p/3dea103e9579)

http://t.beta.saybot.net/axt/t/awj_feedbacks/new_unit_feedback?passport_ids_s=49122892,60646592,31667222,47455701,58756755,20531505,36110565,57866600,84125123,55361743,63459266,28098489,49482666,83072230,40892188,54707585,16044036,34844016,78650431,23936574,96304540,38030259,10985656,69051451,94214722,58833298,39370317,73753966,49932604,25082457,43945851,78061472,68789703&awjcls_lesson_id=4560


## es6

[es6 class](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)
[es6 class](https://wohugb.gitbooks.io/ecmascript-6/content/docs/class.html)

## webpack
[webpack multi](http://www.cnblogs.com/sloong/p/5689162.html)
[分离css单独打包](http://www.jianshu.com/p/439764e3eff2)

[vscode](https://jingyan.baidu.com/article/2f9b480d890faa41cb6cc208.html)

[vscode 插件](https://github.com/varHarrie/Dawn-Blossoms/issues/10)

https://peachscript.github.io/vue-infinite-loading/#!/getting-started/basic


[]http://blog.csdn.net/kameleon2013/article/details/53812446

http://www.cnblogs.com/xxcanghai/p/6382607.html

[父组件异步数据传给子组件](http://www.jb51.net/article/117447.htm)

[父组件异步数据传给子组件2](http://www.jianshu.com/p/ddf876a9eb07)

[vue demo](https://github.com/hzzly/xyy-vue)

[回调函数](http://www.html-js.com/article/Sexy-Javascript-understand-the-callback-function-with-the-use-of-Javascript-in)
[回调函数](https://www.cnblogs.com/snandy/p/3704218.html
[vue 异步加载](http://blog.csdn.net/lucky_lxg/article/details/67638115)
[VUE 从详情页返回列表页，如何保留列表页的状态](http://cnodejs.org/topic/590c47ae3504ce1c2ac458cb)
[vue 路由](https://www.cnblogs.com/SamWeb/p/6610733.html)
[Vue 2.0 制作列表组件，实现分页、搜索、批量操作等](http://blog.csdn.net/sinat_17775997/article/details/54943822)
[如何让图片按比例响应式缩放、并自动裁剪的css技巧](http://blog.csdn.net/oulihong123/article/details/54601030)
[js 无限加载](https://www.cnblogs.com/w-wanglei/p/5863387.html)
[vue 生命周期](http://aicoder.com/vue/preview/all.html)
[根据分辨率设计网页](http://www.cnblogs.com/lyzg/p/4877277.html)
[移动端的常识](http://www.cnblogs.com/PeunZhang/p/3407453.html)
[Element分析（工具篇）——Popper](http://www.jianshu.com/p/859a75a98270)
[微信在ios上旋转屏幕过程中的bug](http://www.jianshu.com/p/a5c7d084fe9c)
[Vue.js自定义指令的用法与实例](https://www.cnblogs.com/kidney/p/6296304.html)
[Vue.js自定义指令的用法与实例2](http://www.jianshu.com/p/c2bef47439ab)
[vue 多页面](http://blog.csdn.net/Tank_in_the_street/article/details/73732801)
[自定义组件](http://blog.csdn.net/Lucky_LXG/article/details/67634128)

## 文本替换
```bash
#全局替换
grep -rl "著名" content | xargs sed -i "" 's/著名/知名/g'
grep -rl "str1" dir | xargs sed -i 's/str2/str3/g'  
#意思就是把dir路径下面，还有子文件夹里面的所有包含‘str1’的文件里的‘str2’替换为‘str3’

当str1和str2相同时，就是批量查找和替换了
#批量删除
#http://blog.csdn.net/offbye/article/details/46438557
find . -name "epps_q001_*" | xargs rm -r
# 将  余额替换为剩余金额
find . -name '*.vue' | xargs grep '余额' -rl | xargs sed -i '' "s/余额/剩余金额/g"
```
[小程序时尚商城wepy demo](https://github.com/dyq086/wxYuHanStore)
[小程序自动索](http://www.xcxwo.com/component/view/8d639c1ba65c1c351174efb2fc2f9cb4)
[js 自动搜索过滤demo](http://www.sucaihuo.com/js/1982.html)
