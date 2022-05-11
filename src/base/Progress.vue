<template>
  <div class="progress-box"
       :style="{width}">
    <div class="progress">
      <div class="value"
           :style="{width:progressValue}"></div>
    </div>
    <slot></slot>

  </div>
</template>

<script >


export default {
  props: {
    width: {
      type: String,
      default: "100%"
    },
    progressValue: {
      type: String,
      default: "100%"
    }
  },
};
</script>

<style lang="scss" >
.progress-box {
  .progress {
    border-radius: 0.4rem;
    height: 0.16rem;
    background: #ebecf0;
    box-shadow: torem(2) torem(2) torem(3) torem(0) #bdc1d1,
      torem(-2) torem(-2) torem(6) torem(0) #ffffff;
    border-radius: 0.4rem;
    .value {
      height: 0.16rem;
      background: linear-gradient(92deg, #27e36e 0%, #1dd061 100%);
      box-shadow: torem(1) torem(1) torem(7) torem(0) #ebecf0,
        torem(2) torem(2) torem(4) torem(0) #4be485,
        torem(-2) torem(-2) torem(4) torem(0) #c2ffbc;
      border-radius: 0.4rem;
    }
  }
}
</style>
