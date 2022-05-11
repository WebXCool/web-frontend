<template>
  <div class="Countdown">
    <span>{{ day }}</span>
    <span>{{ formatNum(hr) }}:</span>
    <span>{{ formatNum(min) }}:</span>
    <span>{{ formatNum(sec) }}</span>
    <!-- <span >{{ms}}</span> -->
  </div>
</template>

<script>
export default {
  props: {
    pTime: {
      type: String | Number,
      default: "",
    },
  },
  data() {
    return {
      day: 0,
      hr: 0,
      min: 0,
      sec: 0,
      ms: 0,
    };
  },
  mounted() {
    if (this.pTime) {
      this.countdown();
    }
  },
  methods: {
    formatNum(num) {
      return (num + "").length < 2 ? "0" + num : num;
    },
    countdown: function () {
      const end = new Date(this.pTime).getTime();
      const now = new Date().getTime();
      const msec = end - now;
      if (msec < 0) return;
      let day = parseInt(msec / 1000 / 60 / 60 / 24);
      let hr = parseInt((msec / 1000 / 60 / 60) % 24);
      let min = parseInt((msec / 1000 / 60) % 60);
      let sec = parseInt((msec / 1000) % 60);
      let ms = (msec + "").substr(-3, 1);
      this.day = day;
      this.hr = hr;
      this.min = min;
      this.sec = sec;

      // this.hr = hr > 9 ? hr : '0' + hr
      // this.min = min > 9 ? min : '0' + min
      this.sec = sec > 9 ? sec : "0" + sec;
      this.ms = ms;
      setTimeout(() => {
        this.countdown();
      }, 100);
    },
  },
};
</script>

<style lang="scss">
.Countdown {
}
</style>
