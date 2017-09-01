# timer-lock

> A Vue.js component project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
##  How to use

### 1. use for .vue 文件

```
<template>
  <div> 
    <button @click='stop'>停止</button>
    <button @click='start'>重启</button>
    <App v-model='showTimerlock' :timeCount='timeCount'  :closable='closable'>
      <span slot='close'>关闭</span>
    </App>
  <div>
</template>
<script>
  //import App from  “@axtwebvue/你的组件名称”
  export default {
    data () {
        return {
            timeCount: 60, //设定计时的秒数
            showTimerlock: false, //是否显示Timerlock组件，自定义，是为true
            closable: true //是否显示关闭按钮，是为true
        }
    },
    methods: {
       stop() {
         this.showTimerlock = false;
       },
       start() {
        this.showTimerlock = true;
       }
    }
  }
</script>
```
*   在template 文件中引用组件 <App :timeCount='timeCount' v-model='showTimerlock' :closable='closable'><span slot='close'>关闭</span></App>,其中 <span slot='close'>关闭</span>可以不写，使用默认的
*   data需要配置参数 timeCount，showTimerlock，closable 
*   通过改变 this.showTimerlock 的状态，控制组件

#### 2. use for html

```
<!DOCTYPE html>
<html>
<head>
  <title>vue test</title>
  <script src="https://unpkg.com/vue"></script>
  <script src="dist/build.js"></script>
  <style type="text/css">
    body{
      width: 1000px;
      text-align: center;
      font-size: 26px;
      margin: 50px auto;
    }
    button{
      margin-right: 10px;
      font-size: 18px;
      color: #fff;
      border: none;
      background-color: #2d8cf0;
      border-color: #2d8cf0;
    }
  </style>
</head>
<body>
<div id="app">
   <button @click='stop'>停止</button><button @click='start'>重启</button>
   <timer v-bind:time-count='timeCount' v-model='showTimerlock' :closable='closable'>
     <span slot='close'>关闭</span>
   </timer>
</div>
</body>
<script type="text/javascript">
new Vue({
  el:'#app',
  data(){
    return {
      timeCount: 60,//设定计时的秒数
      showTimerlock: true,//是否显示Timerlock组件，自定义，是为true
      closable: true//是否显示关闭按钮，是为true
    }
  },
  components:{
    // "timer-lock": window['timer-lock']
    timer: timer
  },
  methods:{
    stop(){
      this.showTimerlock=false;
    },
    start(){
      this.showTimerlock=true;
    }
  }
})
</script>
</html>
```
直接在html 中应用，需要引入https://unpkg.com/vue，和编译后的build.js文件


