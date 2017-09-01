// 导出组件并install
import Vue from 'vue';
import TimerComponent from './timer.vue';
const Timer={
  install(){// //核心部分，在我们使用Vue.use()时，自动调用的是install，而install导出的必须是的组件
    Vue.component("timer",TimerComponent);
  }
}
export default Timer;