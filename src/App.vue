<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",

  mounted () {
    this.initGlobal();
  },
  methods: {
    ...mapActions({
      initGlobal: "global/init",
    }),
  },
};
</script>

<style lang="scss">
@import 'lib/bootstrap_mobile/css/bootstrap_min.css';
@import 'assets/css/mobile.scss';
@import 'assets/css/global.scss';
@import 'assets/css/font.css';

#app {
  height: 100%;
  overflow: auto;
  background-color: #040916;
}
</style>
