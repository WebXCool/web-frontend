<template>
  <div>
    <div :style="{
				backgroundColor: color,
				width: size + 20 + 'px',
				height: size + 20 + 'px'
			}"
         class="spinner-inside"></div>
  </div>
</template>

<script>
export default {
  name: 'rotatePlane',
  props: {
    color: String,
    size: Number
  }
};
</script>

<style scoped>
.spinner-inside {
  margin: torem(25) auto;

  -webkit-animation: rotateplane 1.2s infinite ease-in-out;
  animation: rotateplane 1.2s infinite ease-in-out;
}

@-webkit-keyframes rotateplane {
  0% {
    -webkit-transform: perspective(torem(120));
  }
  50% {
    -webkit-transform: perspective(torem(120)) rotateY(180deg);
  }
  100% {
    -webkit-transform: perspective(torem(120)) rotateY(180deg) rotateX(180deg);
  }
}

@keyframes rotateplane {
  0% {
    transform: perspective(torem(120)) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(torem(120)) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(torem(120)) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(torem(120)) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(torem(120)) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(torem(120)) rotateX(-180deg)
      rotateY(-179.9deg);
  }
}
</style>
