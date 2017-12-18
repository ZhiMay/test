# vuex learn

```bash
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// moudle 分割子模块
// Vuex 允许我们将 store 分割到模块（module）。
// 每个模块拥有自己的 state、mutation、action、getters、甚至是嵌套子模块——从上至下进行类似的分割：

const moudleA = {
  state: {},
  mutations: {},
  actions: {}
}
const moudleB = {
  state: {},
  mutations: {},
  actions: {}
}
const moudleC = {
  state: {},
  mutations: {},
  actions: {}
}
store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
const store = new Vuex.Store({
  // 存储状态管理,
  // state就是全局的状态（数据源），我们可以用以下方式在Vue 组件中获得Vuex的state状态
  // template 中使用<div>{{$store.state.count}}</div>
  // script 中使用 console.log(this.$store.state.count)
  state: {
    count: 1
  },
  // mutations方法必须是同步方法！
  // 提交mutations是更改Vuex状态的唯一方法
  // 状态值的改变方法,操作状态值
  // mutations对state的操作
  // 组件通过commit提交mutations的方式来请求改变state： this.$store.commit('increment')
  mutations: {
    increment(state) {
      // 变更状态
      state.count += 1
    },
    // mutations方法中是可以传参的,this.$store.commit('add', 10)
    add(state, n) {
      state.count += n
    }
  },
  // 在store中定义getters（可以认为是store的计算属性）。Getters接收state作为其第一个函数
  // getters其实可以认为是 store 的计算属性，用法和计算属性差不多。
  // 使用getter: console.log(this.$store.getters.done)
  getters: {
    done(state) {
      return state.count + 5
    }
  },
  // actions 处理异步方法
  // 关于action和mutations的区别有以下几点：
  // Action 提交的是 mutation，而不是直接变更状态。
  // Action 可以包含任意异步操作。
  // Action 还是得通过 mutation 方法来修改state
  // 同样是之前的increment方法,我们分别用同步和异步的action来验证上面所说的与mutations的不同之处：
  // 不同于mutations使用commit方法，actions使用dispatch方法。this.$store.dispatch('incrementAsync')
  // context是与 store 实例具有相同方法和属性的对象。可以通过context.state和context.getters来获取 state 和 getters。
  actions: {
    increment(context) {
      context.commit('increment')
    },
    incrementAsync(context) {
      // 延时1s
      setTimeout(function() {
        context.commit('increment')
      }, 1000)
    },
    // 实现当时this.$store.dispatch('incrementAsyncWithValue', 5)
    incrementAsyncWithValue(context, value) {
      context.commit('add', value)
    },
    modules: {
      a: moudleA,
      b: moudleB,
      c: moudleC
    }
  }
})

export default store
```
