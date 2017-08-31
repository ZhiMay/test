import Vue from 'vue'
import App from './Component.vue'

//module.exports = App;

/*  下面为单个组件需要测试时挂载请解开以下注释  */
new Vue({
  el:'#app',
  data(){
    return {
      timeCount:60,
      showmask: true
    }
  },
  template:"<App :timeCount='timeCount' v-model='showmask'></App>",
  components:{
    "App":App
  }
})