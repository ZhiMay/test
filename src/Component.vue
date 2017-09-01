<template>
  <div id="timer-mask" v-show="visible" :value="value">
    <div class="timer-clock">
      <p class="title">你的操作过于频繁，请稍后重试！</p>
      <div class="time-num">{{leftime}}s</div>
      <button class="timer-close" v-show="closable" @click="close">
        <slot name="close">
          Close
        </slot>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'timerLock',
  props: ["timeCount", "value","closable"],
  data() {
    return {
      initTime: 60,
      leftime: this.timeCount,
      flag: false,
      visible: false,
      intervalid: 1
    }
  },
  methods: {
    timeDown(_this) {
      _this.initTime--;
      let leftime = _this.initTime;
      if (leftime <= 0) {
        _this.flag = true;
        _this.visible = false;
      }
      _this.leftime = leftime;
    },
    format(time) {
      if (time >= 10) {
        return time
      } else {
        return `0${time}`
      }
    },
    close() {
      this.visible = false;
      clearInterval(this.intervalid);
    },
    runTimer() {
      let _this = this;
      if (_this.value) {
        _this.visible = true;
        _this.flag = false;
        _this.initTime = _this.timeCount;
        _this.intervalid = setInterval(function() {
          if (_this.flag == true) {
            clearInterval(_this.intervalid);
          } else {
            _this.timeDown(_this);
          }
        }, 1000);
      } else {
        _this.visible = false;
        _this.flag = true;
        //关闭时数据归置
        _this.initTime = _this.timeCount;
        _this.leftime = _this.initTime;
      }
    }
  },
  mounted() {
    this.runTimer();
  },
  watch: {
    value(val) {
      this.visible = val;
      this.runTimer();
    },
    visible(val) {
      this.$emit('input', val);
    }
  }
}
</script>
<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}

#timer-mask {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  .timer-clock {
    font-family: "PingFangSC-Regular";
    background-color: #fff;
    width: 426px;
    height: 208px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -213px;
    margin-top: -104px;
    text-align: center;
    color: #4A4A4A;
  }
  .title {
    font-size: 14px;
    margin-top: 36px;
  }
  .time-num {
    font-size: 48px;
  }
  .timer-close {
    margin-right: 10px;
    color: #fff;
    bottom: 11px;
    right: 10px;
    position: absolute;
    background-color: #2d8cf0;
    border-color: #2d8cf0;
    border: none;
    cursor: pointer;
    font-size: 18px;
  }
}
</style>
