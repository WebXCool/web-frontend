<template>
  <div class="_nft-asset-con">
    <img
      v-if="nftInfo.fileType === 'image' || nftInfo.fileType === 'gif'"
      class="_nft-asset-img xdrop-dtltl xdrop-asset"
      :src="nftInfo.fileValue"
      @click="handleFull"
    />
    <video
      v-if="nftInfo.fileType === 'video'"
      id="video"
      class="_nft-asset-video"
      :autoplay="isAutoPlay ? 'autoplay' : ''"
      :src="nftInfo.fileValue"
      controls="controls"
    />

    <audio
      v-if="nftInfo.fileType === 'audio'"
      class="_nft-asset-audio"
      controls="controls"
      :src="nftInfo.fileValue"
    />
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
