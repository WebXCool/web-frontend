<template>
  <!--加载动画-->
  <div class="cu-load load-modal">
    <img :src="src" mode="aspectFit" />
    <div class="gray-text">{{ content }}</div>
  </div>
</template>

<script>
  /**
   * @des 页面加载
   *
   * @author stav stavyan@qq.com
   * @date 2020-03-23 11:43
   * @copyright 2019
   */
  import $mAssetsPath from '@/config/assets.config.js'
	export default {
		name: 'rf-loading',
    props: {
      src: {
      	type: String,
        default: "/static/img/logo.png"
      },
      content: {
      	type: String,
        default: '加载中...'
      }
    }
	}
</script>

<style scoped>

</style>
