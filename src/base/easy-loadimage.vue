<template>
  <div class="div_img" :style="{ backgroundImage: `url(${img_url})` }">
    <img :src="img_url" @error="handleImgError" style="display: none" />
  </div>
</template>

<script>
import { config } from "../config/env";

export default {
  props: ["src", "type"],
  props: {
    src: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "img",
    },
  },
  data() {
    return {
      img_url: "",
      loadError: false,
    };
  },
  created() {
    this.img_url = config.imgData; //this.src;
  },

  methods: {
    handleImgError() {
      this.loadError = true;
      this.img_url = config.imgData;
    },
  },
};
</script>

<style lang="scss" scoped>
.div_img {
  width: 0.6rem;
  height: 0.6rem;
  background-size: cover;
  background-position: center center;
  margin: 0 auto;
}
</style>
