<template>
  <div id="div_page_index"
       class="div_page div_page_index"
       :class="{ isIndex: $route.path == '/' }">
    <div class="body bg-cover"
         :class="['body_' + $i18n.locale, `body-bg-${activeMenuIndex}`]">
      <div class="top bg-cover"
           :class="[`top-bg-${activeMenuIndex}`]">
        <drawer v-if="!isPC"
                :display.sync="display"
                :inner="true"
                :width="drawerWidth"
                :mask="false">
          <MobileMenu :active-menu-index="activeMenuIndex"
                      mode="vertical" />
        </drawer>
        <div class="head_menu"
             v-if="initOk">
          <div class="head_sub">
            <div class="div_logo"
                 v-if="!isPC"
                 @click="$router.push({ path: '/' })">
              <img class="logo_img"
                   src="./assets/img/logo.png" />
            </div>
            <img v-if="!isPC"
                 class="switchMenu"
                 @click="display = true"
                 style="height: torem(40); margin-right: torem(15)"
                 src="./assets/img/icon_sidebar2x.png" />
            <NavigationBar :breadcrumbs="breadcrumbs"
                           :activeMenuIndex="activeMenuIndex"
                           v-if="initOk" />
          </div>
        </div>
        <div class="top-content"
             v-if="$route.path == '/home'">

          <div class="left">
            <div class="div-new-icons">
              <img src="./assets/img/top/home_ico_decorate_title@2x.png" />
              <img src="./assets/img/top/home_ico_decorate_star@2x.png" />
            </div>
            <h1>
              SocialFi DID Aggregator
            </h1>
            <div class="div-h2">
              <span class="driven-by">driven by</span>
              <span class="nft">
                NFT
              </span>
              <img src="./assets/img/top/home_ico_decorate_3d@2x.png" />
            </div>
            <p class="p-intro">
              One click to enter Web3, explore more at no cost. WebX provides both crypto users and non-crypto users a chance to seamlessly own & manage their data and digital assets across the social networks simply by a portal.
            </p>
            <div class="div-btns">
              <a :href="$config.webx_down_url"
                 target="_blank">
                <img src="./assets/img/top/home_ico_button@2x.png" />
              </a>
              <!-- <img @click="$develop"
                   src="./assets/img/top/btn_1.png" />
              <img @click="$develop"
                   src="./assets/img/top/btn_2.png" /> -->
            </div>
          </div>
          <img class="img-right"
               src="./assets/img/top/home_ico_decorate_logo@2x.png" />
          <img class="img-bottom"
               @click="scrollToNext"
               src="./assets/img/top/home_ico_decorate_down arrow@2x.png" />
        </div>
      </div>

      <div class="main_content_c">
        <div class="main_content"
             v-loading="g_loading.status && g_loading.type == 'page'"
             element-loading-spinner="el-icon-loading"
             element-loading-background="rgba(0, 0, 0, 0.8)"
             :element-loading-text="g_loading.text"
             :class="{ main_content_scroll: $route.path == '/home' }">
          <div class="pageContainer"
               :class="{
              no_scroll:
                $route.path != '/' && $route.path.indexOf('/account') == -1,
            }"
               v-if="initOk">
            <!-- <transition :name="transitionName"> -->
            <router-view :key="key"
                         ref="routerView"
                         v-if="!$route.meta.keepAlive"></router-view>
            <keep-alive v-if="$route.meta.keepAlive && visible_router_view">
              <router-view v-if="visible_router_view"></router-view>
            </keep-alive>
            <!-- </transition> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NavigationBar from "components/Layout/NavigationBar.vue";
import drawer from "@base/drawer";
import { config } from "./config/env";
import MobileMenu from "components/Layout/MobileMenu.vue";

const smoothScroll = () => {

  document.querySelector("#div_page_index>.body").scrollTo({ top: document.querySelector('.buy-list-box').offsetTop, behavior: 'smooth' })
}
export default {
  components: {
    MobileMenu,
    NavigationBar,
    drawer,
  },
  data () {
    return {
      transitionName: "scfade-left",
      pathNames: [],
      breadcrumbs: [],
      initOk: false,
      placeholder: "",
      is_dark_theme: true,
      display: false,
      // drawerWidth: "torem(160)",
      drawerWidth: "100%",
      visible_router_view: true,
      isApp: false,
      selectedAccount: "",
      accounts: [],
    };
  },
  computed: {
    ...mapGetters({
      accountName: "account/getAccountName",
      g_loading: "global/getLoading",
      isPC: "global/isPC",
      // web3: "web3Modal/web3",
    }),
    key () {
      return this.$route.path + Math.random();
    },

    activeMenuIndex () {
      let paths = ["/home", "/how-to-use", "", "/jobs"];
      let path = this.$route.path;
      let activeIndex = paths.findIndex((item) => item == path);
      if (path.indexOf("/protocol-pools/") != -1) {
        activeIndex = 2;
      }
      return activeIndex + "";
    },
  },
  watch: {
    $route (to, from) {
      let src = this.$route.query.src;
      if (src && src == "app") {
        this.isApp = true;
      }
    },
    web3 (web3) {
      if (web3) {
        this.setLoading({ status: false });
        this.setGas(web3.utils.toWei(config.gas_price, "gwei"));
      }
    },
  },

  mounted () {
    this.init();
  },
  methods: {
    scrollToNext () {
      smoothScroll()
    },
    init () {
      this.initGlobal();
      this.initOk = true;
      this.setLoading({ status: false });

      // this.initChain();
    },
    ...mapActions({
      setGas: "web3Modal/setGas",
      initGlobal: "global/init",
      setLoading: "global/setLoading",
      setHtmlFS: "global/setHtmlFS",
      initChain: "web3Modal/initChain",
    }),
  },
};
</script>

<style lang="scss">
@import 'assets/css/mixin.scss';

.div_page_index {
  overflow: auto;
  height: 100%;
  display: flex;
  /* background-color: #ecf0f3; */
  background: #040916;

  // @include color-background-d();
  //   background-color: #21222c;
  // background-color: $color-background-l;
  font-family: PingFangSC-Regular, PingFang SC;

  font-size: 0.14rem;
  .side_left {
    color: #000;
    display: flex;
    flex-direction: column;
    padding-top: 0.1rem;
    border-right: torem(1) solid rgb(105, 105, 105);

    .logo {
      width: torem(150);
      height: torem(41);
      margin: torem(8) auto 0;
    }
    .side_left_menu {
      .el-menu-item {
        .el-tooltip {
          text-align: center;
        }
      }
    }
    .el-menu {
      border-right: 0;
    }
  }
  .body-bg-1 {
    background-image: url(./assets/img/how_to_use/bg.png);
    background-position: center 36%;
  }
  .body-bg-3 {
    background-image: url(./assets/img/jobs/bg_1.png);
    background-position: 0 0;
    background-repeat: no-repeat;
    // background-size: torem(1436) torem(700);
  }
  > .body {
    flex: 1;
    flex-direction: column;
    overflow: auto;
    .top-bg-0 {
      height: 100%;
      background-image: url(./assets/img/top/top_bg.png);
      display: flex;
      flex-direction: column;
    }

    > .top {
      .top-content {
        width: 12rem;
        flex: 1;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        height: 7.3rem;
        > .left {
          .div-new-icons {
            display: flex;
            justify-content: space-between;
            /* padding-top: torem(72); */
            > img:nth-child(1) {
              width: 1.2rem;
              height: 0.52rem;
            }
            > img:nth-child(2) {
              height: 0.94rem;
              position: relative;
              left: 0.7rem;
              top: 0.2rem;
            }
          }
        }
        h1 {
          height: torem(56);
          font-size: torem(56);
          font-family: PangMenZhengDao;
          color: #ffffff;
          line-height: torem(64);
          margin-top: 0;
        }
        .div-h2 {
          display: flex;
          align-items: center;
          .driven-by {
            height: torem(48);
            font-size: torem(48);
            font-family: PangMenZhengDao;
            color: rgba(255, 255, 255, 0);
            line-height: torem(55);
            -webkit-text-stroke: torem(1) #ffffff;
            text-stroke: torem(1) #ffffff;
            display: inline-block;
            margin-right: 0.02rem;
          }
          .nft {
            width: torem(94);
            height: torem(48);
            font-size: torem(48);
            font-family: PangMenZhengDao;
            color: #ffffff;
            line-height: torem(55);
            background: linear-gradient(
              161deg,
              #48ccff 0%,
              #5f63f6 44%,
              #b046da 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin: 0 torem(36);
          }
          img {
            height: torem(48);
          }
        }
        .p-intro {
          width: torem(600);
          height: torem(84);
          font-size: torem(14);
          font-family: SanFranciscoDisplay-Regular, SanFranciscoDisplay;
          font-weight: 400;
          color: #ffffff;
          line-height: torem(28);
          margin: torem(40) 0 0;
        }
        .div-btns {
          margin-top: 0.06rem;
          img {
            height: 1.6rem;
            cursor: pointer;
            position: relative;
            left: -0.24rem;
          }
        }
        > .img-right {
          width: 4.06rem;
          height: 4.06rem;
          margin-top: 0;
        }
        > .img-bottom {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: torem(100);
          cursor: pointer;
        }
        .div-icons {
          position: relative;
          img {
            position: absolute;
            &:nth-child(1) {
              left: 8%;
            }
            &:nth-child(2) {
              left: 50%;
            }
            &:nth-child(3) {
              right: 8%;
            }
          }
        }
        .north {
          height: 1.6rem;
          margin-top: 1.2rem;
          img {
            &:nth-child(1) {
              width: 1.39rem;
            }
            &:nth-child(2) {
              transform: translate(-50%, -36%);
              width: 1.87rem;
            }
            &:nth-child(3) {
              width: 1.48rem;
            }
          }
        }
        .center {
          height: 4rem;
          text-align: center;
          padding-top: 0.2rem;
          img {
            width: 9.2rem;
            margin-bottom: 0.1rem;
          }
          p {
            width: 9.28rem;
            height: 0.66rem;
            font-size: 0.24rem;
            /* font-family: PingFangSC-Regular, PingFang SC; */
            font-weight: 400;
            color: #ffffff;
            line-height: 0.33rem;
            letter-spacing: torem(1);
            margin: 0 auto;
          }
        }
        .south {
          height: 2rem;
          img {
            &:nth-child(1) {
              width: 2.03rem;
              top: -16%;
            }
            &:nth-child(2) {
              transform: translate(-50%, 30%);
              width: 1.04rem;
            }
            &:nth-child(3) {
              width: 1.62rem;
              top: -24%;
            }
          }
        }
      }
    }
    .head_menu {
      display: flex;
      //   border-bottom: torem(1) solid rgb(105, 105, 105);
      //   height: torem(50);
      justify-content: center;
      /* justify-content: space-between; */

      .head_sub {
        // width: torem(1200);
        width: 100%;
        width: torem(1200);
        /* min-width: 1100px; */
        padding: 0 0.14rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: torem(1) solid rgba(151, 151, 151, 0.12);
        .div_logo {
          display: flex;
          align-items: center;
          margin-left: 0.1rem;
          max-width: 60%;
          color: #000;
          font-size: 0.22rem;
          img {
            height: 0.46rem;
          }
        }
      }
      .el-menu.el-menu--horizontal {
        border-bottom: 0;
      }
      .right {
        display: flex;
        padding-right: 0.3rem;
        align-items: center;
        i {
          color: $theme-color;
          font-size: 0.24rem;
        }
      }
    }
    @media screen and (max-width: torem(768)) {
      .head_menu {
        // height: torem(50);
        height: torem(56);
      }
    }
    .main_content_c {
      display: flex;
      width: 100%;
      flex: 1;
      /* overflow: hidden; */
    }
    div.main_content_scroll {
      display: block;
    }
    .main_content {
      // flex: 1;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .div_breadcrumb {
        height: 0.56rem;
        min-height: 0.56rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.1rem 0;
        .el-breadcrumb {
          color: $color-text;
          font-size: 0.15rem;
        }
      }

      .pageContainer {
        flex: 1;
        width: 100%;
        margin: 0 auto;
        padding: 0 0 0;
        * {
          box-sizing: border-box;
        }
        > div {
          // width: torem(1200);
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
