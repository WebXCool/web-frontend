<template>
  <nav id="MobileMenu"
       class="nav_menus">
    <!-- <div class="div_logo" @click="$router.push({path:'/'})" v-if="isPC">
            <i class="iconfont iconlogo-blue" style="font-size:torem(30);color:#fff;" ></i>
            <span style="color:#fff;margin-left:torem(6);">webxnetwork</span>
        </div> -->
    <el-menu :default-active="activeMenuIndex"
             class="head_nav_menu"
             background-color="transparent"
             text-color="#323E50"
             active-text-color="#fff"
             :default-openeds="defaultOpeneds"
             @select="menuSelect"
             :mode="mode">
      <el-menu-item index="0">
        <div class="item">
          <div class="title">Home</div>
          <div class="intro">Test webx developer information</div>
        </div>
      </el-menu-item>
      <el-menu-item index="1">
        <div class="item">
          <div class="title">How to use</div>
          <div class="intro">What products does the test-tube project have</div>
        </div>
      </el-menu-item>
      <el-menu-item index="2">
        <div class="item"
             @click.stop="openUrl">
          <div class="title">Whitepaper</div>
          <div class="intro">We have a financial community</div>
        </div>
      </el-menu-item>
      <!-- <el-menu-item index="3">
        <div class="item">
          <div class="title">Jobs</div>
          <div class="intro">
            Knowledge of financial governance requirements
          </div>
        </div>
      </el-menu-item> -->
      <!-- <el-menu-item index="5">
        <div class="item">
          <div class="title">About</div>
          <div class="intro">Details about the test webx project</div>
        </div></el-menu-item
      > -->
      <!-- <el-menu-item index="6" v-if="!isPC && accountName">
        {{ $t("nav_logout") }}
      </el-menu-item> -->
      <el-menu-item index="5"> </el-menu-item>
    </el-menu>
  </nav>
</template>

<script >
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    activeMenuIndex: String,
    mode: {
      type: String,
      default: "vertical",
    },
  },
  data () {
    return {
      defaultOpeneds: [],
      paths: {
        0: "/home",
        1: "/how-to-use",
        2: "",
        3: "/jobs",
        5: "/PTokenWallet",
      },
      isCollapse: false,
    };
  },
  computed: {
    ...mapGetters({
      accountName: "account/getAccountName",
      isPC: "global/isPC",
      isDark: "global/isDark",
      gTheme: "global/gTheme",
    }),
  },
  mounted () { },
  methods: {
    menuSelect (index, indexPath) {
      let path = this.paths[index];
      // if (index == "6") {
      //   this.logout();
      //   return;
      // }
      if (index == "2") {
        window.open("https://whitepaper.webx.cool/")
        return
      }
      this.$router.push({ path });
    },
    openUrl (event) {
      window.open("https://whitepaper.webx.cool/")
    },
    ...mapActions({
      s_logout: "account/logout",
    }),
  },
};
</script>

<style lang="scss"  >
#MobileMenu {
  // margin-top:0.1rem;
  // flex: 1;
  overflow: hidden;
  height: 100%;
  display: flex;
  // padding-left: 0.6rem;
  // justify-content: flex-end;
  box-shadow: none;
  > ul {
    width: 100%;
  }
  .el-menu--horizontal > .el-menu-item a,
  .el-menu--horizontal > .el-menu-item a:hover {
    color: #7750c6;
    font-size: torem(15);
  }
  > .div_logo {
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 0.3rem;
    cursor: pointer;
    > img {
      // height: 100%;
      height: torem(30);
    }
    .app_name {
      margin-left: torem(20);
      color: #000;
    }
  }
  .is-opened .el-submenu__title {
    background-color: hsla(0, 0%, 100%, 0.03) !important;
  }
  .el-menu-item {
    font-size: 0.14rem;
    &:last-child {
      display: none;
    }
  }
  i {
    margin-right: 0.06rem;
    font-size: 0.18rem;
    color: #000;
  }
  .icon-yidiandiantubiao01 {
    font-size: 0.16rem;
  }
  .icon-codepen {
    font-size: 0.15rem;
  }
  .el-menu--horizontal > .el-submenu .el-submenu__title {
    height: auto;
  }
}
</style>
