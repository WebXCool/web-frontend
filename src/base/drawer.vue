<template>
  <div class="drawer"
       :class="{ drawer_active: display }"
       @click="closeByMask">
    <div :class="maskClass"
         @click="closeByMask"></div>
    <div :class="mainClass"
         :style="mainStyle"
         class="main"
         @click.stop="1 == 1">
      <div class="drawer-head">
        <span style="font-size: torem(19)"
              @click="goHome"> </span>
        <span class="close-btn"
              v-show="closable"
              @click="closeByButton">
          <img src="../assets/img/icon_sidebar_close.png" />
        </span>
      </div>
      <div class="drawer-body"
           @click="closeByMask">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    // 是否打开
    display: {
      type: Boolean,
    },

    // 标题
    title: {
      type: String,
      default: "标题",
    },

    // 是否显示关闭按钮
    closable: {
      type: Boolean,
      default: true,
    },

    // 是否显示遮罩
    mask: {
      type: Boolean,
      default: true,
    },

    // 是否点击遮罩关闭
    maskClosable: {
      type: Boolean,
      default: true,
    },

    // 宽度
    width: {
      type: String,
      default: "torem(400)",
    },

    // 是否在父级元素中打开
    inner: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    maskClass: function () {
      return {
        "mask-show": this.mask && this.display,
        "mask-hide": !(this.mask && this.display),
        inner: this.inner,
      };
    },
    mainClass: function () {
      return {
        "main-show": this.display,
        "main-hide": !this.display,
        inner: this.inner,
        main_dark: this.isDark,
      };
    },
    mainStyle: function () {
      return {
        width: this.width,
        right: this.display ? "0" : `-${this.width}`,
        // borderLeft: this.mask ? 'none' : 'torem(1) solid #666'
      };
    },
    ...mapGetters({
      isDark: "global/isDark",
      accountName: "account/getAccountName",
    }),
  },
  mounted () {
    if (this.inner) {
      let box = this.$el.parentNode;
      box.style.position = "relative";
    }
  },
  methods: {
    closeByMask () {
      this.maskClosable && this.$emit("update:display", false);
    },
    closeByButton () {
      this.$emit("update:display", false);
    },
    goAccount () {
      let path = "/login/0";
      if (this.accountName) {
        path = `/account/${this.accountName}`;
      }
      this.$router.push({ path });
    },
    goHome () {
      this.$router.push({ path: "/" });
      this.closeByButton();
    },
  },
};
</script>

<style lang="scss">
@import '~@assets/css/mixin.scss';

div.drawer_active {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100 !important;
}
.drawer {
  /* 遮罩 */
  .mask-show {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 8;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1;
    transition: opacity 0.5s;
  }
  .mask-hide {
    opacity: 0;
    transition: opacity 0.5s;
  }

  /* 滑块 */
  .main {
    position: fixed;
    z-index: 10;
    top: 0;
    height: 100%;
    background: #121327;

    transition: all 0.5s;
  }
  .main-show {
    opacity: 1;
  }
  .main-hide {
    opacity: 0;
  }

  /* 某个元素内部显示 */
  //   .inner {
  //     position: absolute;
  //   }

  /* 其他样式 */
  .drawer-head {
    display: flex;
    justify-content: space-between;
    // height: torem(45);
    // line-height: torem(45);
    height: torem(90);
    line-height: torem(40);
    padding: 0 torem(15);
    font-size: torem(12);
    font-weight: bold;
    border-bottom: torem(1) solid #eee;
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
    }
    .close-btn {
      display: inline-block;
      display: flex;
      align-items: center;
      cursor: pointer;
      height: 100%;
      padding-left: torem(20);
      img {
        height: torem(50);
      }
    }
    > span {
      display: flex;
      align-items: center;
    }
  }
  .drawer-body {
    font-size: torem(14);
    // padding: torem(15);
  }
}

.drawer {
  .drawer-head {
    // color:rgba(255, 255, 255, 0.8);
    border-bottom-color: #666;
    border-bottom: 0;
    // border-left: torem(1) solid #666;
  }
  .main {
    background: #121327;
  }
  .main_dark {
    border-left: torem(1) solid #666;
  }
  .el-menu {
    border-right: 0;

    .el-menu-item {
      height: auto;
      line-height: inherit;
      margin-bottom: torem(20);
      .item {
        padding: torem(16) torem(15);
        height: torem(70);
        background: #1a1b32;
        box-shadow: torem(6) torem(8) torem(16) torem(0) #121327,
          torem(-2) torem(-1) torem(6) torem(0) #121327;
        border-radius: torem(6);
        display: flex;
        align-items: center;
        .title {
          font-size: torem(16);

          color: #fff;
          /* margin-bottom: torem(6); */
        }
        .intro {
          font-size: torem(13);
          color: #798493;
          display: none;
        }
      }
    }
  }
}
</style>
