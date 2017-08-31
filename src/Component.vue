<template>
  <div id="timer-mask" v-show="visible" :value="value">
    <div class="timer-clock">
      <p class="title">你的操作过于频繁，请稍后重试！</p>
      <div class="time-num">{{leftime}}s</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["timeCount", "value"],
  data() {
    return {
      initTime: 60,
      leftime: "60",
      flag: false,
      count: 0,
      visible: false
    }
  },
  methods: {
    timeDown(_this) {
      _this.count++;
      console.log("count:" + _this.count);
      _this.initTime--;
      let leftime = _this.initTime;
      if (leftime <= 0) {
        _this.flag = true;
        _this.visible = false;
      }
      _this.leftime = leftime;
    },
    format(time) {
      console.log("format-time:" + time);
      if (time >= 10) {
        return time
      } else {
        return `0${time}`
      }
    }
  },
  mounted() {
    let _this = this;
    if (_this.value) {
      _this.visible = true;
    }
    _this.initTime = _this.timeCount;
    let time = setInterval(function() {
      if (_this.flag == true) {
        clearInterval(time);
      } else {
        _this.timeDown(_this);
      }
    }, 1000);
  },
  watch: {
    value(val) {
      console.log(val);
      this.visible = val;
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
  width: 100%;
  height: 100%;
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
}
</style>
