<template>
  <div>
    <div class="spinner-inside"
         :style="{
				width: size + 40 + 'px',
				height: size + 40 + 'px'
			}">
      <div :style="{ backgroundColor: color }"
           class="dot1"></div>
      <div :style="{ backgroundColor: color }"
           class="dot2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'doubleDot',
  props: {
    color: String,
    size: Number
  }
};
</script>

<style scoped>
.spinner-inside {
  margin: torem(25) auto;
  position: relative;
  text-align: center;

  -webkit-animation: rotate 2s infinite linear;
  animation: rotate 2s infinite linear;
}

.dot1,
.dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #67cf22;
  border-radius: 100%;

  -webkit-animation: bounce 2s infinite ease-in-out;
  animation: bounce 2s infinite ease-in-out;
}

.dot2 {
  top: auto;
  bottom: torem(0);
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@-webkit-keyframes rotate {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}

@-webkit-keyframes bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>
