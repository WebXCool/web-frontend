<template>
  <transition name="fade" v-if="styleLoadingIsOpen">
    <div
      class="mask"
      v-show="isActive"
      :class="{ 'full-screen': isFullScreen }"
      :style="{ backgroundColor }"
    >
      <div
        class="spinner"
        :style="{ transform: `translate(-50%, -${translateY}%)` }"
      >
        <slot>
          <loop
            v-if="styleLoadingType === 'loop'"
            :color="themeColor.color"
            :size="size"
          />
          <shrinkRect
            v-if="styleLoadingType === 'shrinkRect'"
            :color="themeColor.color"
            :size="size"
          />
          <bounce
            v-if="styleLoadingType === 'bounce'"
            :color="themeColor.color"
            :size="size"
          />
          <doubleBounce
            v-if="styleLoadingType === 'doubleBounce'"
            :color="themeColor.color"
            :size="size"
          />
          <doubleCube
            v-if="styleLoadingType === 'doubleCube'"
            :color="themeColor.color"
            :size="size"
          />
          <doubleDot
            v-if="styleLoadingType === 'doubleDot'"
            :color="themeColor.color"
            :size="size"
          />
          <rotatePlane
            v-if="styleLoadingType === 'rotatePlane'"
            :color="themeColor.color"
            :size="size"
          />
          <scaleOut
            v-if="styleLoadingType === 'scaleOut'"
            :color="themeColor.color"
            :size="size"
          />
        </slot>
        <div v-if="text.length" :style="{ color: textColor }">
          {{ text }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import loop from "./loaders/loop.vue";
import bounce from "./loaders/bounce.vue";
import doubleBounce from "./loaders/double-bounce.vue";
import doubleCube from "./loaders/double-cube.vue";
import doubleDot from "./loaders/double-dot.vue";
import rotatePlane from "./loaders/rotate-plane.vue";
import scaleOut from "./loaders/scale-out.vue";
import shrinkRect from "./loaders/shrink-rect.vue";

export default {
  name: "rfLoading",
  components: {
    loop,
    bounce,
    doubleBounce,
    doubleCube,
    doubleDot,
    rotatePlane,
    scaleOut,
    shrinkRect,
  },
  props: {
    active: Boolean,
    translateY: {
      type: Number,
      default: 150,
    },
    text: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "#333",
    },
    textColor: {
      type: String,
      default: "#333",
    },
    isFullScreen: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: "rgba(255, 255, 255, .9)",
    },
    size: {
      type: Number,
      default: 40,
    },
  },
  data() {
    return {
      isActive: this.active || false,
      styleLoadingIsOpen: true,
      styleLoadingType: "rotatePlane",
      themeColor: {
        color: "#21222c",
      },
    };
  },
  watch: {
    active(value) {
      this.isActive = value;
    },
  },
};
</script>

<style scoped>
.mask {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 3000;
  transition: opacity 0.3s linear;
}

.full-screen {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
