import Vue from 'vue'
import App from './Component.vue'

module.exports = App;

/*  下面为单个组件需要测试时挂载请解开以下注释  */
/*
App 的内容
<App :timeCount='timeCount' v-model='showTimerlock' :closable='closable'><span slot='close'>关闭</span></App>

其中 <span slot='close'>关闭</span>可以不写，使用默认的文案

*/
// new Vue({
//   el:'#app',
//   data(){
//     return {
//       timeCount: 100,//设定计时的秒数
//       showTimerlock: true,//是否显示Timerlock组件，自定义，是为true
//       closable: false//是否显示关闭按钮，是为true
//     }
//   },
//   template:"<div><button @click='stop'>停止</button><button @click='start'>重启</button><App :timeCount='timeCount' v-model='showTimerlock' :closable='closable'><span slot='close'>关闭</span></App></div>",
//   components:{
//     "App":App
//   },
//   methods:{
//     stop(){
//       this.showTimerlock=false;
//     },
//     start(){
//       this.showTimerlock=true;
//     }
//   }
// })