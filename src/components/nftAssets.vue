<template>
  <div class="_nft-asset-con">
    <div v-if="nftInfo.fileType === 'image' || nftInfo.fileType === 'gif'">
      <div v-if="isBgImg"
           class="div-img bg-cover"
           :style="{backgroundImage:`url(${nftInfo.fileValue})`}"
           @click="handleFull">
      </div>
      <img v-else
           class="_nft-asset-img _nft-asset-full xdrop-dtltl xdrop-asset"
           :src="nftInfo.fileValue"
           @click="handleFull" />
    </div>

    <video v-if="nftInfo.fileType === 'video'"
           id="video"
           class="_nft-asset-video"
           :autoplay="isAutoPlay ? 'autoplay' : ''"
           :src="nftInfo.fileValue"
           controls="controls" />

    <audio v-if="nftInfo.fileType === 'audio'"
           class="_nft-asset-audio"
           controls="controls"
           :src="nftInfo.fileValue" />
  </div>
</template>

<script>


export default {
  props: {
    nftInfo: {
      type: Object,
      default: () => { }
    },
    isAutoPlay: {
      type: Boolean,
      default: false
    },
    isBgImg: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      fileData: ''
    }
  },
  async mounted () {

  },
  methods: {
    handleFull () {
      this.$emit('on-full')
    }
  }
}
</script>

<style lang="scss">
._nft-asset-con {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    height: 100%;
    width: 100%;
    text-align: center;
    .div-img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
