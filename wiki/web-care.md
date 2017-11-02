1.使用 a.btn(href="//www.alo7.com/") 根据当前schema变化
   "mint-ui": "^2.2.9",
    "vue": "^2.4.2",
https://github.com/mattermost/desktop/releases

https://github.com/luozhihua/sublime-vue-formatter

.shadow{
  color: #fff;
  text-shadow: 3px 3px 3px #000;
}
<template>
  <div class="page-loadmore">
    <h1 class="page-title">Pull up</h1>
    <p class="page-loadmore-desc">在列表底部, 按住 - 上拉 - 释放可以获取更多数据</p>
    <p class="page-loadmore-desc">此例请使用手机查看</p>
    <div class="page-loadmore-wrapper" ref="wrapper">
      <mt-loadmore :auto-fill='false' :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul class="page-loadmore-list">
          <li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>
        </ul>
        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑上拉加载更多</span>
          <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>

<style>
  ul{
    list-style: none;
  }
  li{
    text-align:center;
    background-color: yellow;
    margin-bottom: 2px;
    width: 100%;
  }
  .mint-loadmore-bottom span{
    display: inline-block;
    vertical-align: middle;
  }
  .mint-loadmore-bottom {
    margin-bottom: 10px;
  }
</style>

<<<<<<< HEAD
mint-ui 
http://blog.csdn.net/iohboel/article/details/75228390

http://www.jianshu.com/p/ce0e829b1bc2 Vue 替换title

## amr 文件 播放
https://github.com/yxl/opencore-amr-js

[移动端浏览器和微信浏览器上禁止body的滚动条
](http://www.cnblogs.com/EasonJim/p/6203296.html)
[移动端document点击事件无效解决方法](https://www.w3cways.com/1937.html)

[移动端document点击事件无效解决方法2](http://www.shejicool.com/js/other/629.html)
[点击图片放大](https://segmentfault.com/q/1010000007385226/a-1020000007389135)

<script type="text/babel">
  export default {
    data() {
      return {
        list: [],
        allLoaded: false,
        bottomStatus: '',
        wrapperHeight: 0
      };
    },
    methods: {
      handleBottomChange(status) {
        this.bottomStatus = status;
      },
      loadBottom() {
        setTimeout(() => {
          let lastValue = this.list[this.list.length - 1];
          if (lastValue <80) {
            for (let i = 1; i <= 10; i++) {
              this.list.push(lastValue + i);
            }
          } else {
            this.allLoaded = true;
          }
          this.$refs.loadmore.onBottomLoaded();
        }, 1500);
      }
    },
    created() {
      for (let i = 1; i <= 40; i++) {
        this.list.push(i);
      }
    },
    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
  };

