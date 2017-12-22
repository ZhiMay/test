# web bug

1. fixed 在微信浏览器中会出问题,用absolute 替代
1. js array includes 方法有的浏览器不支持
1. js： new Date('2017-11-15 15:30:00') 有的浏览器不支持，转成newDate('2017／11／15 15:30:00')
1. 微信浏览器会body 设置100%，会超出一屏高，设置overflow：hidden,需要滚动的元素height: 100%,overflow: auto;
1. js: for in  可能会掉坑，尽量不要用
1. webpack 本地开发，用ip 访问，safari浏览器，出现“SyntaxError: Unexpected keyword 'const'. Const declarations are not supported in strict mode”，
解决方法：降级webpack-dev-server

```bash
npm rm webpack-dev-server -D
npm i webpack-dev-server@2.7.1 -D
```
