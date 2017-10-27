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


import moment from 'moment';
import _ from 'underscore';
import HomeworkItem from "./homework.js";
class HomeworkList {
  constructor(array) {
    this.list = array;
  }
  get value() {
    return this.list;
  }
  set value(val) {
    this.list = val;
  }
  formatList() {
    this.list = this.list.map(function(item) {
      let homeworkItem = new HomeworkItem(item);
      let homework = homeworkItem.format();
      return item = homework;
    });
    console.log("this.list ...");
    return this.list;
  }
  inOrderList() {
    console.log(this.list);
  }
  invertedList() {
    console.log("sfafdfsdfaf");
  }
  groupByMonth() {
    let resgroup = _.groupBy(this.list, function(item) {
      return item.timecate;
    });
    let groupArr = [];
    //let keys = Object.keys(resgroup);
    _.each(resgroup, function(value, key) {
      let homework = {};
      homework.timecate = key;
      homework.month = value[0].month;
      homework.record = value;
      groupArr.push(homework);
      // console.log(key);
      // console.log(value);
    })
    this.list = groupArr;
    return groupArr;
  }
}
export default HomeworkList;






[]http://blog.csdn.net/kameleon2013/article/details/53812446

http://www.cnblogs.com/xxcanghai/p/6382607.html

[父组件异步数据传给子组件](http://www.jb51.net/article/117447.htm)

[父组件异步数据传给子组件2](http://www.jianshu.com/p/ddf876a9eb07)

[vue demo](https://github.com/hzzly/xyy-vue)




