<template>
  <div>
    <div :style="{
				backgroundColor: color,
				width: size + 40 + 'px',
				height: size + 40 + 'px'
			}"
         class="spinner-inside"></div>
  </div>
</template>

<script>
export default {
  name: 'scaleOut',
  props: {
    color: String,
    size: Number
  }
};
</script>

<style scoped>
.spinner-inside {
  margin: torem(25) auto;

  border-radius: 100%;
  -webkit-animation: scaleout 1s infinite ease-in-out;
  animation: scaleout 1s infinite ease-in-out;
}

@-webkit-keyframes scaleout {
  0% {
    -webkit-transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 0;
  }
}

@keyframes scaleout {
  0% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  100% {
    transform: scale(1);
    -webkit-transform: scale(1);
    opacity: 0;
  }
}
</style>
