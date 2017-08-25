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
  [javascript api](https://docs.microsoft.com/en-us/scripting/javascript/reference/reduce-method-array-javascript)
## vw 和 vh 单位
[纯CSS3使用vw和vh视口单位实现自适应](http://caibaojian.com/vw-vh.html)
[CSS中如何使用视窗单位](https://www.w3cplus.com/css/simplify-your-stylesheets-with-the-magical-css-viewport-units.html)
[前端开发博客](http://caibaojian.com/fe-daily-20170823.html)
## vue
[使用Vue.js和Axios从第三方API获取数据](http://caibaojian.com/fetching-data-with-vue-js.html)
[查看在线的版本 here](http://vuejs-news.herokuapp.com/)
[sitepoint-editors/vuejs-news 源码](https://github.com/sitepoint-editors/vuejs-news/blob/master/index.html)
[一个高度可定制的vue modal插件](https://github.com/shaodahong/dahong/issues/10)
## casperJs
[casperJs](http://casperjs.org/)
[ css3中单位px,em,rem,vh,vw,vmin,vmax的区别及浏览器支持情况](http://blog.csdn.net/jyy_12/article/details/42557241)
