<template>
  <div>
    <div class="spinner-inside"
         :style="{
				width: size + 110 + 'px'
			}">
      <div :style="{ backgroundColor: color }"
           class="bounce1"></div>
      <div :style="{ backgroundColor: color }"
           class="bounce2"></div>
      <div :style="{ backgroundColor: color }"
           class="bounce3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bounce',
  props: {
    color: String,
    size: Number
  }
};
</script>

<style scoped>
.spinner-inside {
  margin: torem(25) auto;
  text-align: center;
}

.spinner-inside > div {
  width: torem(24);
  height: torem(24);
  margin-right: torem(4);
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
  animation: bouncedelay 1.4s infinite ease-in-out;
  /* Prevent first frame from flickering when animation starts */
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.spinner-inside .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner-inside .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}

@keyframes bouncedelay {
  0%,
  80%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  40% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>
