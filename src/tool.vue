<template>
  <div id="div_page_index"
       class="div_page tool"
       :class="{ isIndex: $route.path == '/' }"
       v-loading="g_loading.status && g_loading.type == 'page'"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.8)"
       :element-loading-text="g_loading.text">
    <div class="body"
         :class="['body_' + $i18n.locale]">
      <div class="main_content_c">
        <div v-if="isPC"
             class="side_left"
             :style="{ width: $i18n.locale == 'en' ? '2.56rem' : '2.56rem' }">
          <div class="div-connect bg-cover flex_center"
               @click="toolConnect">
            <div v-if="accountName">
              <div class="connect-name">
                {{ $t("Connected to BSC") }}
              </div>
              <div class="address">
                {{ simpleAddress }} | {{ getSelectedAccountBalance }}
                {{ core_asset }}
              </div>
            </div>
            <span v-else>{{ $t("CONNECT") }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { config } from "./config/env";

export default {
  data () {
    return {
      initOk: false, //是否初始化完成
      accounts: [],
    };
  },
  computed: {
    ...mapGetters({
      accountName: "account/getAccountName",
      g_loading: "global/getLoading",
      isPC: "global/isPC",
      // web3: "web3Modal/web3",
      simpleAddress: "account/simpleAddress",
      getSelectedAccountBalance: "account/getSelectedAccountBalance",
      core_asset: "web3Modal/core_asset",
    }),
  },
  watch: {
    accountName (account) { },
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
    init () {
      this.initOk = true;
      this.initChain();
    },
    toolConnect () {
      if (!this.accountName) this.onConnect();
    },
    ...mapActions({
      setGas: "web3Modal/setGas",
      initGlobal: "global/init",
      setLoading: "global/setLoading",
      setWeb3: "web3Modal/setWeb3",
      initChain: "web3Modal/initChain",
      onConnect: "web3Modal/onConnect",
    }),
  },
};
</script>

<style lang="scss">
@import 'assets/css/mixin.scss';

.tool {
  overflow: auto;
  height: 100%;
  display: flex;
  background-color: #ecf0f3;
  font-size: 0.14rem;
  .row:before,
  .row:after {
    display: none;
  }
  .side_left {
    min-width: torem(190);
    color: #000;
    display: flex;
    flex-direction: column;
    background: #eff0f4;
    box-shadow: torem(4) torem(3) torem(19) torem(0) #bdc1d1,
      torem(1) torem(1) torem(16) torem(0) #e9eaf2,
      torem(-1) torem(-1) torem(16) torem(0) #f5f6fa;

    .logo {
      width: 1.12rem;
      margin: 0.4rem auto 0.3rem;
      cursor: pointer;
    }

    .div-connect {
      width: 2.34rem;
      height: 0.7rem;
      margin: 0 auto 0.3rem;
      color: #757e95;
      font-size: 0.14rem;
      min-width: torem(170);
      min-height: torem(40);
      cursor: pointer;
      > div {
        flex-direction: column;
      }
      .connect-name {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          height: 0.2rem;
          margin-left: 0.1rem;
        }
      }
    }
  }
}
</style>
