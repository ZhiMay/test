import Vue from 'vue'
import timer from './components/index.js'

//module.exports = timer;

/*  下面为单个组件需要测试时挂载请解开以下注释  */
Vue.use(timer);
new Vue({
  el:'#app',
  data(){
    return {
      timeCount: 10,//设定计时的秒数
      showTimerlock: true,//是否显示Timerlock组件，自定义，是为true
      closable: true//是否显示关闭按钮，是为true
    }
  },
  template:"<div><timer :timeCount='timeCount' v-model='showTimerlock' :closable='closable'><span slot='close'>关闭</span></timer></div>",
  methods:{
    stop(){
      this.showTimerlock=false;
    },
    start(){
      this.showTimerlock=true;
    }
  }
})