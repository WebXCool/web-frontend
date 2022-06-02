<template>
  <div class="page-home">
    <div class="div-body">
      <div class="open-protocol-ecosystem feature bg-cover">
        <div class="list row">
          <div class="col-sm-6">
            <div class="item-box bg-cover">
              <div class="div-seq">
                <div class="num num-0">0</div>
                <div class="num num-1">1</div>
                <img src="../assets/img/Feature/feature-introduction_decorate_symbol-1@2x.png" />
              </div>
              <div class="titile">SocialFi DID Aggregator</div>
              <p class="small_p">
                Unifed DID puts users back in control of their own their
                personal data across networks, gaining ownerships and giving
                accurate information, which hugely decreases fraud and
                invaluable transactions.
              </p>
            </div>
          </div>
          <div class="col-sm-6 right">
            <img src="../assets/img/Feature/feature introduction_display diagram_img-1@2x.png" />
          </div>
        </div>
        <div class="list row">
          <div class="col-sm-6 right">
            <img src="../assets/img/Feature/feature introduction_display diagram_img-2@2x.png" />
          </div>
          <div class="col-sm-6">
            <div class="item-box bg-cover">
              <div class="div-seq">
                <div class="num num-0">0</div>
                <div class="num num-1">2</div>
                <img src="../assets/img/Feature/feature introduction_decorate_symbol-2@2x.png" />
              </div>
              <div class="titile">Innovative ways of distributing NFTs</div>
              <p class="small_p">
                Smoothly receiving & earning NFTs without any cost on regular
                social networks is the easiest way for all-level users to enter
                & explore the Web3 world.
              </p>
            </div>
          </div>
        </div>
        <div class="list row">
          <div class="col-sm-6">
            <div class="item-box bg-cover">
              <div class="div-seq">
                <div class="num num-0">0</div>
                <div class="num num-1">3</div>
                <img src="../assets/img/Feature/feature-introduction_decorate_symbol-1@2x.png" />
              </div>
              <div class="titile">Accessible to each individual</div>
              <p class="small_p">
                No barriers to involve billions of users together in the
                campagin and more benefits hidden in the interactions for both
                of creators and users.
              </p>
            </div>
          </div>
          <div class="col-sm-6 right">
            <img src="../assets/img/Feature/feature introduction_display diagram_img-3@2x.png" />
          </div>
        </div>
      </div>

      <div class="open-protocol-ecosystem instructions bg-cover">
        <div class="tab">
          <OMenu :menus="menud_instructions"
                 @click="tabInstructionsClick"></OMenu>
        </div>
        <transition name="component-fade"
                    mode="out-in">
          <div class="tab-box"
               :key="0"
               v-if="tab_index_instructions == 0">
            <div class="list row row-one">
              <div class="col-sm-6 right">
                <img src="../assets/img/instructions/brands/instructions_brands_card-1@2x.png" />
              </div>
              <div class="col-sm-6">
                <div class="item-box bg-cover">
                  <div class="titile">1. Install WebX</div>
                  <img src="../assets/img/instructions/instructions_decorate_punctuation@2x.png" />
                  <p class="small_p">Install WebX Plug-in for FREE.</p>
                </div>
              </div>
            </div>
            <img class="img-line"
                 src="../assets/img/instructions/instructions_decorate_line-1@2x.png" />

            <div class="list row row-2">
              <div class="col-sm-6">
                <div class="item-box bg-cover">
                  <div class="titile">2. Launch</div>
                  <img src="../assets/img/instructions/instructions_decorate_punctuation@2x.png" />
                  <p class="small_p">
                    Launch airdrop by publishing contents across social
                    networks.
                  </p>
                </div>
              </div>
              <div class="col-sm-6 right">
                <img src="../assets/img/instructions/brands/instructions_brands_card-2@2x.png" />
              </div>
            </div>
            <img class="img-line img-line-2"
                 src="../assets/img/instructions/instructions_decorate_line-2@2x.png" />
            <div class="list row">
              <div class="col-sm-6 right">
                <img src="../assets/img/instructions/brands/instructions_brands_card-3@2x.png" />
              </div>
              <div class="col-sm-6">
                <div class="item-box bg-cover">
                  <div class="titile">3. Xdrop</div>
                  <img src="../assets/img/instructions/instructions_decorate_punctuation@2x.png" />
                  <p class="small_p">Tweet your NFT airdrop to followers.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="tab-box"
               v-if="tab_index_instructions == 1"
               :key="1">
            <div class="list row row-one">
              <div class="col-sm-6 right">
                <img src="../assets/img/instructions/users/instructions_users_card-1@2x.png" />
              </div>
              <div class="col-sm-6">
                <div class="item-box bg-cover">
                  <div class="titile">1. Retweet to Earn NFTs</div>
                  <img src="../assets/img/instructions/instructions_decorate_punctuation@2x.png" />
                  <p class="small_p">
                    Retweet the content to receive &earn the NFT.
                  </p>
                </div>
              </div>
            </div>
            <img class="img-line"
                 src="../assets/img/instructions/instructions_decorate_line-1@2x.png" />

            <div class="list row row-2">
              <div class="col-sm-6">
                <div class="item-box bg-cover">
                  <div class="titile">2. Install WebX</div>
                  <img src="../assets/img/instructions/instructions_decorate_punctuation@2x.png" />
                  <p class="small_p">Install WebX Plug-in for FREE.</p>
                </div>
              </div>
              <div class="col-sm-6 right">
                <img src="../assets/img/instructions/users/instructions_users_card-2@2x.png" />
              </div>
            </div>
            <img class="img-line"
                 src="../assets/img/instructions/instructions_decorate_line-2@2x.png" />
            <div class="list row">
              <div class="col-sm-6 right">
                <img src="../assets/img/instructions/users/instructions_users_card-3@2x.png" />
              </div>
              <div class="col-sm-6">
                <div class="item-box bg-cover">
                  <div class="titile">3. Trade</div>
                  <img src="../assets/img/instructions/instructions_decorate_punctuation@2x.png" />
                  <p class="small_p">Trade&share NFTs on social media.</p>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <div class="placeHolder"></div>

      <div class="conft bg-cover">
        <img class="img-left"
             src="../assets/img/link-graph/link graph_title@2x.png" />
        <img class="img-right"
             src="../assets/img/link-graph/link graph_decorate_img@2x.png" />
      </div>

      <div class="buy-list-box">
        <img class="icon-right"
             src="../assets/img/ranking-list/ranking list_decorate_img-1@2x.png" />
        <img class="icon-left"
             src="../assets/img/ranking-list/ranking list_decorate_img-2@2x.png" />

        <div class="title">
          <img src="../assets/img/ranking-list/ranking list_decorate_star@2x.png" />
          <div class="text">Who's active in our <span>community</span></div>
          <img src="../assets/img/ranking-list/ranking list_decorate_star@2x.png" />
        </div>
        <div class="tab">
          <OMenu :menus="menus"></OMenu>
        </div>
        <div class="rank-xdrop-container">
          <div class="menu-rank-xdrop">
            <OMenu :menus="menusRankOrXdrop"
                   @click="toggleRankOrXdrop" />
          </div>
          <div class="list bg-cover xdrop-content"
               v-if="rankOrXdrop === 0"
               v-loading="loading"
               element-loading-spinner="el-icon-loading"
               element-loading-background="rgba(0, 0, 0, 0.8)">
            <div class="xdrop-list">
              <xdrop-item v-for="item in xdropList"
                          :key="item.id"
                          :drop-item="item"
                          @click="handleToDetail(item)" />
            </div>
          </div>
          <div class="list bg-cover"
               v-if="rankOrXdrop === 1"
               v-loading="loading"
               element-loading-spinner="el-icon-loading"
               element-loading-background="rgba(0, 0, 0, 0.8)">
            <div class="item"
                 v-for="(item, index) in tableData"
                 :key="item.id">
              <div class="left">
                <span class="seq"
                      :class="{ 'bg-cover': item.seq < 4 }">
                  {{ item.seq }}
                </span>
                <a :href="`https://twitter.com/${item.userName}`"
                   target="_bank">
                  <Avatar :url="item.twitterAvatar"></Avatar>
                  <span>
                    {{ item.userName }}
                  </span>
                  <img class="circle"
                       v-if="index % 2"
                       src="../assets/img/ranking-list/ranking-list_status_off-line@2x.png" />
                  <img v-else
                       class="circle"
                       src="../assets/img/ranking-list/ranking-list_status_online@2x.png" />

                  <!-- <div class="circle"
                      :style="{ background: index % 2 ? '#58FF93' : '#58FF93' }"></div> -->
                </a>
              </div>

              <div class="right flex_center">
                <!-- <span class="span-price">$ {{ item.coinPrice }}</span>
                <img src="../assets/img/buy_list/buy.png"
                    @click="$develop" />
                <img src="../assets/img/buy_list/farm.png"
                    @click="$develop" /> -->

                <img src="../assets/img/ranking-list/ranking list_icon_heat@2x.png" />
              </div>
            </div>
            <empty v-if="!tableData.length" />
          </div>
        </div>
        <div class="footer"
             v-if="rankOrXdrop === 0">
          <el-pagination @current-change="pageChangeXdrop"
                         layout="prev,pager,next"
                         :total="xdropTotal"
                         :page-size="6"
                         :pager-count="5"
                         :current-page.sync="xdropPage">
          </el-pagination>
        </div>
        <div class="footer"
             v-if="rankOrXdrop === 1">
          <el-pagination @current-change="pageChange"
                         layout="prev,pager,next"
                         :total="total"
                         :page-size="10"
                         :pager-count="5"
                         :current-page.sync="page">
          </el-pagination>
          <!-- <div class="div-go-page">
            <input type="text"
                   v-model="input_page"
                   @keyup.enter="page = Number(input_page)" />
            <img @click="page = Number(input_page)"
                 src="../assets/img/buy_list/go_page.png" />
          </div> -->
        </div>
      </div>

      <div id="road-map"
           class="open-protocol-ecosystem road-map bg-cover">
        <img class="arrow"
             src="../assets/img/roadmap/roadmap_decorate_img-2@2x.png" />

        <div class="title">
          <div class="div-seq">
            <div class="num num-0">ROAD</div>
            <div class="num num-1">MAP</div>
          </div>
          <img src="../assets/img/roadmap/roadmap_decorate_img-1@2x.png" />
        </div>
        <div class="list row"
             @mouseleave="mouseleave">
          <div class="col-sm-3">
            <div class="item-box bg-cover"
                 :class="{ 'active-item': active_index_road_map == 0 }"
                 @mouseenter="mouseenter(0)">
              <div class="title">Q2</div>
              <div class="year">2022</div>

              <ul>
                <li>WebX Beta launch</li>
                <li>Launch SocialFi DID aggregator</li>
                <li>NFT airdrop by retweeting</li>
                <li>100,000 users acquired</li>
              </ul>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="item-box bg-cover"
                 :class="{ 'active-item': active_index_road_map == 1 }"
                 @mouseenter="mouseenter(1)">
              <div class="title">Q3</div>
              <div class="year">2022</div>

              <ul>
                <li>New social platform expansion</li>
                <li>Launch marketplace functionalities</li>
                <li>Multi-chain adoption</li>
                <li>500,000 users acquired</li>
              </ul>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="item-box bg-cover"
                 :class="{ 'active-item': active_index_road_map == 2 }"
                 @mouseenter="mouseenter(2)">
              <div class="title">Q4</div>
              <div class="year">2022</div>
              <ul>
                <li>WebX SocialFi rewarding system</li>
                <li>On-chain verification of NfT</li>
                <li>Launch plug-in API</li>
                <li>1 million users acquired</li>
              </ul>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="item-box bg-cover"
                 :class="{ 'active-item': active_index_road_map == 3 }"
                 @mouseenter="mouseenter(3)">
              <div class="title">Q1</div>
              <div class="year">2023</div>
              <ul>
                <li>Launch WebX mobile App</li>
                <li>Launch Platform SDK</li>
                <li>Expand to more Web2 social platforms</li>
                <li>5 million users acquired</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="partner"
           v-if="false"
           class="open-protocol-ecosystem bg-cover">
        <div class="title">- <i>P</i>artners -</div>
        <div class="list row">
          <div class="col-sm-3 col-xs-6">
            <div class="item-box"></div>
          </div>
          <div class="col-sm-3 col-xs-6">
            <div class="item-box bg-cover item1"></div>
          </div>
          <div class="col-sm-3 col-xs-6">
            <div class="item-box bg-cover item2"></div>
          </div>
          <div class="col-sm-3 col-xs-6">
            <div class="item-box"></div>
          </div>
          <div class="col-sm-3 col-xs-6">
            <div class="item-box"></div>
          </div>
          <div class="col-sm-3 col-xs-6">
            <div class="item-box bg-cover item3"></div>
          </div>

          <div class="col-sm-3 col-xs-6">
            <div class="item-box bg-cover item4"></div>
          </div>
          <div class="col-sm-3 col-xs-6"></div>
        </div>
      </div>

      <!-- <div id="media"
           class="media bg-cover">
        <div class="left">
          <img src="../assets/img/media/title.png"
               style="width: 3.7rem" />
          <p>
            Find more information about IPLand and keep updated from the team.
          </p>
        </div>
        <div class="list row">
          <div class="col-xs-3">
            <a href="https://t.me/ipland_group"
               target="_bank"><img src="../assets/img/media/item_1.png" /></a>
          </div>
          <div class="col-xs-3">
            <a href="https://twitter.com/@ipland_io"
               target="_bank"><img src="../assets/img/media/item_2.png" /></a>
          </div>
          <div class="col-xs-3">
            <a href="https://medium.com/@IPLand.io"
               target="_bank"><img src="../assets/img/media/item_3.png" /></a>
          </div>
          <div class="col-xs-3">
            <a href="https://www.facebook.com/ipland.io"
               target="_bank"><img src="../assets/img/media/item_4.png" /></a>
          </div>
        </div>
      </div> -->
      <!-- <Footer></Footer> -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Footer from "components/Layout/Footer.vue";
import OMenu from "components/Layout/OMenu.vue";
import XdropItem from "components/xdrop.vue";

import Avatar from "components/Common/Avatar.vue";
import { format_number } from "../common/js/common";


// const smoothScroll = () => {
//   const currentScroll = document.documentElement.scrollTop || document.body.scrollTop
//   if (currentScroll > 0) {
//     window.requestAnimationFrame(smoothScroll)
//     window.scrollTo(0, document.querySelector('.feature').offsetTop)
//   }
// }


const smoothScroll = () => {
  // const currentScroll = document.documentElement.scrollTop || document.body.scrollTop
  // if (currentScroll > 0) {
  //   window.requestAnimationFrame(smoothScroll)
  //   window.scrollTo(0, document.querySelector('.feature').offsetTop)
  // }
  // document.querySelector("#div_page_index>.body").scrollTop = document.querySelector('.feature').offsetTop
  // window.scrollTo(0, document.querySelector('.feature').offsetTop + 1000)
  document.querySelector("#div_page_index>.body").scrollTo({ top: document.querySelector('.buy-list-box').offsetTop, behavior: 'smooth' })
}
export default {
  name: "app",
  components: {
    OMenu,
    Avatar,
    Footer,
    XdropItem
  },
  data () {
    return {
      menus: ["Twitter", "YouTube"],
      menud_instructions: ['Brand', 'Users'],
      total: 120,
      page: 1,
      input_page: "",
      loading: false,
      tableData: [],
      tab_index_instructions: 0,
      active_index_road_map: 0,
      menusRankOrXdrop: ["Xdrop", "Ranking"],
      rankOrXdrop: 0,
      xdropList: [],
      xdropPage: 1,
      xdropTotal: 0
    };
  },
  computed: {
    ...mapGetters({
      isPC: "global/isPC",
      winWidth: "global/winWidth",
    }),
  },
  watch: {
    input_page (nv, ov) {
      if (isNaN(Number(nv)) || nv < 0 || !/^(\d+)$/.test(nv)) {
        this.$nextTick(() => {
          this.input_page = ov;
        });
      }
    },
    page () {
      this.loadTable();
    },
    // winWidth(){
    //   if(myChart)
    //   {
    //       option.series[0].radius=this.isPC?['70%', '50%']:['40%','50%'];
    //       option.series[0].label.edgeDistance=this.isPC?45:22,
    //       myChart.setOption(option);
    //       setTimeout(()=>{
    //        myChart.resize();
    //       },100)
    //   }
    // }
  },
  mounted () {
    //this.initChart();


    const currMonth = new Date().getMonth(); //获取当前月份(0-11,0代表1月)

    console.log('currMonth', currMonth)
    const currQuarter = Math.floor((currMonth % 3 == 0 ? (currMonth / 3) : (currMonth / 3 + 1)));
    console.log('currQuarter', currQuarter)
    this.active_index_road_map = currQuarter - 1;
    this.getXdropList();
  },
  methods: {

    loadTable () {
      // this.setLoading({ status: true });
      this.loading = true;
      this.$smAjax({
        api: `/users`,
        data: {
          page: this.page,
          pageSize: 10,
        },
        method: "get",
        loading: false,
        app: this,
        toast: false,
      }).then((res) => {
        this.loading = false;
        // this.setLoading({ status: false });
        if (res.code == 200) {
          // console.log('res.data',res)
          const { content, totalElements } = res.data;
          content.forEach((item, index) => {
            item.coinPrice = format_number(item.coinPrice, 2);
            item.seq = index + 1 + (this.page - 1) * 10
          });
          this.tableData = content;
          this.total = totalElements;
        }
      });
    },
    openPage (url) {
      window.open(url);
    },
    pageChange (page) {
      this.page = page;
      // this.loadTable();
      // this.$router.push({path:'/order-pools',query:{
      //   page:this.page,
      //   tabIndex:this.curTabIndex
      // }})
      //this.queryOrders();
    },
    ...mapActions({
      setLoading: "global/setLoading",
    }),
    goTool () {
      this.$router.push({ path: "/order-pools" });
    },
    tabInstructionsClick (tabIndex) {
      this.tab_index_instructions = tabIndex
      console.log('  this.tab_index_instructions ', this.tab_index_instructions)
    },
    toggleRankOrXdrop (index) {
      this.rankOrXdrop = index
      if (index) {
        this.page = 1
        this.loadTable()
      } else {
        this.xdropPage = 1
        this.getXdropList()
      }
    },
    getXdropList () {
      this.loading = true;
      this.$smAjax({
        type: 'webx',
        api: '/airdrop/airdrops',
        data: {
          page: this.xdropPage,
          pageSize: 6,
        },
        method: "post",
        loading: false,
        app: this,
        toast: false,
      }).then((res) => {
        this.loading = false;
        console.log(res)
        if (res.code == 200) {
          const { content, totalElements } = res.data;
          this.xdropList = content;
          this.xdropTotal = totalElements;
        }

        console.log('this.$route', this.$route.query.isToList)
        if (this.$route.query.isToList) {
          smoothScroll()
          // document.querySelector("#div_page_index>.body").scrollTo({ top: document.querySelector('.buy-list-box').offsetTop })
        }
      })
    },
    pageChangeXdrop (page) {
      this.xdropPage = page;
      this.getXdropList();
    },
    handleToDetail (item) {
      localStorage.setItem('_wex-drop', JSON.stringify(item))
      this.$router.push({
        name: 'xdropdetail',
        params: {
          id: item.id
        }
      })
    },
    mouseenter (index) {
      this.active_index_road_map = index
    },
    mouseleave () {
      this.active_index_road_map = 0
    },
  },
};



</script>

<style lang="scss">
@import '~@assets/css/mixin.scss';

.page-home {
  font-family: PingFangSC-Regular, PingFang SC;
  text-align: center;
  // padding-bottom: torem(50);
  .OMenu .item {
    margin: 0 1.4rem;
  }
  .div-body {
    width: 100%;
    margin: 0 auto;
    .buy-list-box {
      /* max-width: torem(1440); */
      background-image: url(../assets/img/ranking-list/ranking-list_bg@2x.png);
      background-size: cover;
      position: relative;
      padding-bottom: torem(56);
      .icon-right {
        width: torem(167);
        position: absolute;
        right: torem(98);
        top: torem(148);
      }
      .icon-left {
        width: torem(293);
        position: absolute;
        left: 0;
        top: torem(810);
      }
      > .title {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        padding: 0.58rem 0 0.48rem;
        img {
          width: torem(120);
          height: torem(23);
        }
        .text {
          margin: 0 torem(12);
          font-size: torem(40);
          font-family: TypoPRO-Montserrat-BlackItalic, TypoPRO-Montserrat;
          font-weight: normal;
          color: #ffffff;
          font-style: italic;
          span {
            color: #1edeff;
          }
        }
      }
      .tab {
        padding: 0 0 0.2rem 0;
        .OMenu {
          width: torem(440);
          margin: auto;
          .item {
            flex: 1;
            margin: 0;
            position: relative;
            .btn {
              margin: 0;
            }
            .div-border {
              display: none;
            }
            &:first-child::after {
              content: '';
              width: torem(4);
              height: torem(24);
              position: absolute;
              right: torem(0);
              top: torem(8);
              background-color: rgba(255, 255, 255, 0.5);
              /* border-right: torem(4) solid rgba(255, 255, 255, 0.5); */
            }
          }
          .active {
            .div-border {
              display: inline-block;
            }
          }
          .btn {
            font-size: torem(28);
            font-family: TypoPRO-Montserrat-BlackItalic, TypoPRO-Montserrat;
            font-weight: normal;
            font-style: italic;
          }
          height: 0.3rem;

          .div-border {
            bottom: -0.18rem;
            width: torem(42);
            height: torem(6);
            background: linear-gradient(
                213deg,
                #1edeff 0%,
                rgba(95, 88, 241, 0.96) 82%,
                #654cf0 100%
              )
              #1edeff;
          }
        }
      }

      .btn {
        font-size: 0.36rem;
      }

      .list {
        width: torem(1000);
        margin: 0 auto;
        /* background: linear-gradient(
          180deg,
          rgba(119, 80, 198, 0) 0%,
          rgba(119, 80, 198, 0.12) 48%,
          rgba(119, 80, 198, 0) 100%
        ); */

        background-image: url(../assets/img/ranking-list/ranking-list_form_bg@2x.png);

        border-radius: torem(16);
        border: torem(1) solid rgba(255, 255, 255, 0.4);

        padding: 0 0.46rem;
        .item {
          display: flex;
          justify-content: space-between;
          padding: 0.2rem 0;
          border-bottom: torem(1) solid rgba(176, 155, 246, 0.14);
          .left {
            display: flex;
            align-items: center;
            a {
              display: flex;
              align-items: center;
            }
            span.seq {
              color: #e3e3e3;
              font-size: 0.34rem;
              display: inline-block;
              min-width: torem(30);
              width: torem(81);
              height: torem(50);
            }
            span.bg-cover {
              background-repeat: no-repeat;
              background-image: url(../assets/img/ranking-list/ranking-list_ranking_bg@2x.png);
            }
            .avatar-c {
              width: 0.5rem;
              height: 0.5rem;
              margin-right: 0.2rem;
            }
            > a {
              font-size: torem(20);
              font-family: Sora-Medium, Sora;
              font-weight: 500;
              color: #ffffff;
            }
            .circle {
              /* border: 0.06rem solid rgba(88, 255, 147, 0.1); */
              width: 0.14;
              height: 0.14rem;
              border-radius: 50%;
              margin-left: 0.14rem;
              top: 0.02rem;
              position: relative;
            }
          }
          .right {
            .span-price {
              font-size: 0.34rem;
              font-weight: 600;
              color: #bca6f9;
              margin-right: 0.3rem;
            }
            /* img {
              width: 1.2rem;
              margin: 0 0.06rem;
              cursor: pointer;
            } */
            img {
              width: 0.24rem;
            }
          }
        }
      }

      .footer {
        padding: 0.3rem 0 0.46rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .div-go-page {
          width: 0.84rem;
          height: 0.4rem;
          background: rgba(255, 255, 255, 0.19);
          border-radius: 0.2rem;
          display: flex;
          align-items: center;
          margin-left: 0.22rem;
          input {
            background: transparent;
            width: 0.5rem;
            padding: 0 0.06rem 0 0.12rem;
            color: #fff;
          }
          img {
            cursor: pointer;
            width: 0.34rem;
          }
        }
      }
    }
  }
  a {
    text-decoration-line: none;
  }
  section {
    margin: torem(20) auto;
    overflow: hidden;
  }
  .feature {
    background-image: url(../assets/img/Feature/feature-introduction_bg@2x.png);
  }

  .open-protocol-ecosystem {
    padding: 0.54rem 0 0.4rem;

    .list {
      margin: torem(30) auto torem(100);
      width: 12rem;
      .item-box {
        // height: torem(338);
        max-width: 100%;
        text-align: left;
        //     background: #ecf0f3;
        // box-shadow: torem(-8) torem(5) torem(11) torem(0) #d7dbde, torem(6) torem(-6) torem(3) torem(0) #f7f8fc;
        // border-radius: torem(16);
        margin: auto;
        .div-seq {
          display: flex;
          width: torem(67);
          height: torem(56);
          font-size: torem(54);
          font-family: TypoPRO-Montserrat-BlackItalic, TypoPRO-Montserrat;
          font-weight: normal;
          color: #ffffff;
          line-height: torem(56);
          font-style: italic;
          margin-bottom: torem(60);

          img {
            margin-left: torem(32);
          }

          .num-0 {
            position: relative;
            &::after {
              content: '';
              width: torem(32);
              height: torem(6);
              background: #ffffff;
              border-radius: torem(2);
              position: absolute;
              bottom: torem(-40);
              left: 0;
            }
          }
          .num-1 {
            color: #1edeff;
          }
        }

        .titile {
          width: torem(540);
          font-size: torem(32);
          font-family: TypoPRO-Montserrat-BlackItalic, TypoPRO-Montserrat;
          font-weight: normal;
          color: #ffffff;
          font-style: italic;
        }
        .small_p {
          width: torem(440);
          font-size: torem(18);
          font-family: Sora-Regular, Sora;
          font-weight: 400;
          color: #ffffff;
          padding-left: 0;
          line-height: torem(36);
          height: torem(180);
        }
      }
      .right {
        margin-top: 0;
        padding-top: 0;
        display: flex;
        align-items: flex-start;
        img {
          width: 6.2rem;
          position: relative;
          top: -0.5rem;
        }
      }

      > div {
        height: 100%;
      }
    }
    .list:last-child {
      margin-bottom: 0;
    }
  }

  .instructions {
    background-image: url(../assets/img/instructions/instructions_bg@2x.png);
    /* padding-bottom: 0.6rem; */
    padding: 1.54rem 0 1.9rem;
    height: torem(1416);
    > .tab {
      margin-bottom: 0.8rem;
    }
    .component-fade-enter-active,
    .component-fade-leave-active {
      transition: opacity 0.3s ease;
    }
    .component-fade-enter,
    .component-fade-leave-to {
      opacity: 0;
    }
    /*
    .v-enter,
    .v-leave-to {
      opacity: 0;
    }
    .v-enter-active,
    .v-leave-active {
      transition: opacity 0.3s;
    } */

    .OMenu {
      width: torem(404);
      height: torem(52);
      padding: 0 torem(5);
      background: rgba(255, 255, 255, 0.1);
      border-radius: torem(3);
      border: torem(1) solid;
      border-image: linear-gradient(
          180deg,
          rgba(255, 255, 255, 1),
          rgba(255, 255, 255, 0.2)
        )
        1 1;
      backdrop-filter: blur(12torem (32));
      margin: auto;
      .item {
        margin: 0;
        flex: 1;
        .btn {
          width: torem(196);
          margin: 0;
          display: flex;
        }
        .div-border {
          display: none;
        }
      }
      .item.active {
        height: torem(40);
        background: linear-gradient(
          213deg,
          #1edeff 0%,
          rgba(95, 88, 241, 0.96) 82%,
          #654cf0 100%
        );
        border-radius: torem(4);
      }
    }
    .tab-box > .img-line {
      width: torem(672);
      margin: 0 auto;
    }

    .row {
      display: flex;
      align-items: center;
      margin: 0 auto;
      width: 10.6rem;
      width: 12rem;
      padding: 0 1rem;

      > div {
        display: flex;
        align-items: center;
        /* justify-content: center; */
      }
      .right img {
        width: torem(382);
        top: 0;
      }
      .item-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .titile {
          height: torem(72);
          font-size: torem(28);
          font-family: TypoPRO-Montserrat-BlackItalic, TypoPRO-Montserrat;
          font-weight: normal;
          color: #ffffff;
          line-height: torem(72);
        }
        > img {
          width: torem(26);
        }
        .small_p {
          width: torem(556);
          width: torem(536);
          font-size: torem(22);
          font-family: Sora-Medium, Sora;
          font-weight: 500;
          color: #ffffff;
          line-height: torem(27);
          height: torem(82);
        }
      }
    }
    div.row-one {
      margin: 0.64rem auto 0;
    }
    .row-2 .right {
      justify-content: flex-end;
    }
  }
  #road-map {
    background-image: url(../assets/img/roadmap/roadmap_bg@2x.png);
    padding-bottom: 0.8rem;
    padding-top: 0.66rem;
    position: relative;
    .list {
      width: torem(1424);
    }
    .arrow {
      width: torem(80);
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    > img {
      margin-bottom: 0.7rem;
    }
    > .title {
      width: torem(1400);
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      > img {
        width: torem(70);
        height: torem(70);
      }
      .div-seq {
        display: flex;
        width: torem(67);
        height: torem(56);
        font-size: torem(54);
        font-family: TypoPRO-Montserrat-BlackItalic, TypoPRO-Montserrat;
        font-weight: normal;
        color: #ffffff;
        line-height: torem(56);
        font-style: italic;
        margin-bottom: torem(60);
        font-size: torem(40);
        font-family: TypoPRO-Montserrat-BlackItalic, TypoPRO-Montserrat;
        font-weight: normal;
        color: #ffffff;
        img {
          margin-left: torem(32);
        }

        .num-0 {
          position: relative;
          &::after {
            content: '';
            width: torem(20);
            height: torem(4);
            background: linear-gradient(
                213deg,
                #1edeff 0%,
                rgba(95, 88, 241, 0.96) 82%,
                #654cf0 100%
              )
              #ffffff;
            border-radius: torem(1);
            position: absolute;
            bottom: torem(-20);
            left: 0;
          }
        }
        .num-1 {
          color: #1edeff;
        }
      }
    }
    ul {
      margin-left: 0.1rem;
      li {
        font-size: 0.14rem;
        font-weight: 500;
        color: #7b7c8a;
        letter-spacing: torem(1);
        list-style-type: none;
        text-align: left;
        position: relative;
        margin-bottom: torem(18);
        transition: font-size 0.4s;
        &:last-child {
          margin-bottom: 0;
        }
        &::before {
          content: '';
          width: torem(3);
          height: torem(12);
          background: #7b7c8a;
          position: absolute;
          left: torem(-12);
          top: torem(6);
          /* top: 50%;
          transform: translateY(-50%); */
        }
      }
    }
    .list {
      height: torem(476);
      margin: 0.1rem auto 0;
      display: flex;
      justify-content: space-around;
      > div {
        margin-top: 0;
        display: flex;
        align-items: center;
        width: auto;
      }
      .item-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: width 0.3s, height 0.3s;
        width: 2.7rem;
        height: 3.6rem;
        padding: 0 torem(24);
        background-image: url(../assets/img/roadmap/roadmap_display-card_unselected_bg@2x.png);
        .title {
          font-size: torem(24);
          font-family: TypoPRO-Montserrat-BlackItalic, TypoPRO-Montserrat;
          font-weight: normal;
          color: #ffffff;
        }
        .year {
          font-size: torem(14);
          font-family: Sora-Medium, Sora;
          font-weight: 500;
          color: #9966ee;
          margin: torem(10) 0 torem(22);
        }
      }
      .active-item {
        width: torem(356);
        height: torem(476);
        border-radius: torem(22) torem(90) torem(22) torem(22);

        background-image: url(../assets/img/roadmap/roadmap_display-card_selected_bg@2x.png);
        .title {
          font-size: torem(34);
        }
        .year {
          font-size: torem(20);
          color: #1edeff;
          margin-bottom: torem(38);
        }
        ul li {
          font-size: torem(20);
          color: #fefefe;
          &::before {
            content: '';
            width: torem(4);
            height: torem(17);
            background: #fefefe;
            position: absolute;
            left: torem(-14);
            top: torem(6);
            /* top: 50%;
          transform: translateY(-50%); */
          }
        }
      }
    }
  }

  #partner {
    height: torem(550);
    padding: 0.4rem 0 0.4rem;
    background-image: url(../assets/img/partners/Partners_bg@2x.png);
    .title {
      margin: auto;
      width: torem(241);
      height: torem(70);
      font-size: torem(40);
      color: #ffffff;
      font-style: italic;
      letter-spacing: torem(2);
      font-family: TypoPRO-Montserrat-BlackItalic, TypoPRO-Montserrat;
      i {
        color: rgba(30, 222, 255, 1);
      }
      background-image: url(../assets/img/partners/Partners_decorate_title@2x.png);
      background-repeat: no-repeat;
      background-size: torem(66) torem(70);
      background-position: center center;
    }
    .list {
      margin-top: 1.1rem;
      /* display: flex;
     justify-content: space-around; */
      > div {
        margin: 0.36rem 0;

        .item1 {
          background-image: url(../assets/img/partners/Partners_logo_twitter@2x.png);
        }
        .item2 {
          background-image: url(../assets/img/partners/Partners_logo_discord@2x.png);
        }
        .item3 {
          background-image: url(../assets/img/partners/Partners_logo_telegram@2x.png);
        }

        .item4 {
          background-image: url(../assets/img/partners/Partners_logo_github@2x.png);
        }
        /* .item5 {
          background-image: url(../assets/img/partners/item5.png);
          position: relative;
          right: 1rem;
        } */
        /* &:nth-child(4) .item-box{
          background-image: url(../assets/img/partners/item4.png);
        }

        &:nth-child(5) .item-box{
          background-image: url(../assets/img/partners/item5.png);
        } */
      }

      .item-box {
        width: torem(162);
        height: torem(66);
        /* background-color: rgba(66, 42, 125, 1); */
      }
    }
  }

  .media {
    display: flex;
    justify-content: space-between;
    width: 15.4rem;
    margin: 0 auto;
    padding: 1.2rem 0;
    /* background: #040916; */
    .left {
      font-size: 0.2rem;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.7);
      line-height: 0.28rem;
      letter-spacing: torem(1);
      text-align: left;
      p {
        padding-left: 0.16rem;
        margin-top: 0.16rem;
      }
    }
    .list {
      img {
        width: 0.8rem;
        margin: 0 0.3rem;
      }
    }
  }
  .placeHolder {
    height: 0.4rem;
    background-color: #07091a;
  }
  .conft {
    background-image: url(../assets/img/link-graph/link-graph_bg@2x.png);
    padding: 1.6rem 0.4rem;
    position: relative;
    img {
      display: inline-block;
    }
    .img-left {
      /* position: absolute; */
      position: relative;
      top: -0.6rem;
      width: 5rem;
    }
    .img-right {
      width: 7rem;
    }
  }

  .div-defi {
    padding: 1.4rem 0 0.8rem;

    .box_2 {
      width: 14.8rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 1.2rem auto 0.4rem;
      > img {
        height: 4rem;
      }
      > .row {
        flex: 1;
        padding-left: 0.4rem;
        > div {
          margin: 0.2rem 0;
        }
        img {
          width: 4rem;
        }
        > div {
        }
        .item-box {
          background-size: 90%;
          background-position: center;
          background-repeat: no-repeat;
          width: 5rem;
          height: 2.5rem;
          margin: 0 auto 0.1rem;

          p {
            padding: 1rem 0.64rem;
            font-size: 0.24rem;
            color: rgba(255, 255, 255, 0.8);
            line-height: 0.33rem;
            letter-spacing: torem(1);
            text-align: left;
          }
        }
      }
    }
    .D_p_Second {
      img {
        width: 3.8rem;
      }
    }
    .DEFI_div {
      margin: 0 auto 0;
      text-align: center;
      width: 14.4rem;
    }

    .DEFI_p {
      text-align: left;
      font-size: torem(26);
      width: 2.7rem;
      font-size: 0.24rem;
      color: #ffffff;
      line-height: 0.33rem;
      letter-spacing: torem(1);
      margin-left: 0.2rem;
    }
    .DEFI_img {
      height: torem(96);
      text-align: center;
    }

    .DEFI_div {
      margin-top: 1.1rem;
    }
  }
  .token {
    padding: 1rem 0 0.4rem;
    > img {
      margin-bottom: 0.56rem;
    }
    .row {
      width: 14.4rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      .left {
        .item {
          margin-bottom: 0.48rem;
          p {
            text-align: left;
          }
          .name {
            font-size: 0.24rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.7);
            line-height: 0.33rem;
            letter-spacing: torem(1);
          }
          .value {
            font-size: 0.54rem;
            color: #ffffff;
            line-height: 0.76rem;
            letter-spacing: torem(2);
          }
        }
      }
      .right {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        img {
          width: 7.6rem;
        }
        #token_chart {
          width: 100%;
          height: 5.6rem;
          position: relative;
          top: -0.4rem;
          right: -14%;
        }
      }
    }
  }

  .btn {
    border: none;
    font-size: torem(18);
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #798493;
    line-height: torem(25);
    border-radius: torem(6);
  }

  .ad_img {
    margin: torem(70) 0 torem(30);
    width: torem(292);
    // height: torem(173);
  }
  .D_p {
    font-size: torem(50);
    font-weight: 500;
    color: #323e50;
    line-height: torem(42);
    margin: torem(23) auto 0;
  }
  .D_small_p {
    width: torem(754);
    max-width: 100%;
    font-size: torem(20);
    font-weight: 400;
    color: #7b8695;
    line-height: torem(28);
    margin: torem(24) auto 0;
  }
  .ad_big_img {
    margin: torem(30) auto 0;
    width: torem(912);
    height: torem(282);
    max-width: 100%;
  }
  div.ad_big_img {
    position: relative;
    .div-text {
      position: absolute;
      left: 50%;
      top: 54%;
      transform: translate(-50%, -50%);
      .title {
        font-size: 0.36rem;
        color: #323e50;
        margin-bottom: 0.14rem;
      }

      p {
        font-size: 0.22rem;
        color: #323e50;
      }
    }
  }
  .D_p_Second {
    font-size: torem(50);
    font-weight: 500;
    color: #323e50;
    line-height: torem(42);
    margin: 0 0 0 auto;
    text-align: center;
  }

  .btn_group {
    margin: torem(38) 0 0 0;
  }
  .other_btn {
    border-radius: torem(25);
  }
  .small_group {
    // height: torem(303);
    background: #ecf0f3;
    border-radius: torem(6);
    box-shadow: torem(2) torem(2) torem(2) #dde1e5;
    margin: 0 0 0 0;
    // width: torem(282);
    // height: torem(303);
  }

  .small_img {
    width: torem(84);
    height: auto;
  }
  .small_p {
    font-size: torem(34);
    margin-top: torem(23);
  }
  .small_p_p {
    font-size: torem(16);
    margin: torem(2) 0 0 0;
    color: #798493;
  }
  //   .eliminate {
  //     overflow: auto;
  //   }
  .DEFI_group {
    width: torem(270);
    height: torem(290);
    margin: 0 auto;

    /* margin: 0 0 torem(70) torem(30); */
  }

  .DEFI_p_s {
    text-align: center;
    font-size: torem(18);
    font-weight: 400;
    color: #798493;
    line-height: torem(25);
  }

  /* .dd {
    width: torem(320);
  } */
  .communtiy_group {
    width: torem(376);
    height: torem(256);
    // background-color: #ecf0f3;
    margin: torem(72) 0 0 0;
  }

  .communtiy_img {
    width: torem(30);
    height: torem(30);
    margin: 0 torem(4) 0 torem(34);
  }
  .communtiy_p {
    width: torem(117);
    height: torem(45);
    font-size: torem(32);
    font-weight: 500;
    color: #323e50;
    line-height: torem(45);
  }
  .communtiy_p_p {
    width: torem(200);
    height: torem(66);
    font-size: torem(24);
    font-weight: 400;
    color: #323e50;
    line-height: torem(33);
    text-align: left;
    margin: torem(30) 0 0 torem(76);
  }
}
@media screen and (max-width: 768px) {
  body .div_page_index div.page-home .div-body .instructions {
    padding-top: 0.7rem;
    > .tab {
      margin-bottom: 0;
    }
  }
  #partner div.list div.item-box {
    padding: 0;
  }
  .page-home .instructions .tab-box > .img-line {
    width: 90%;
  }
  .page-home .instructions .tab-box > .img-line-2 {
    margin: 0.3rem 0;
  }
  .page-home .instructions .row {
    padding: 0;
    .item-box .small_p {
      width: auto;
    }
  }
  .page-home .open-protocol-ecosystem .list .item-box .titile {
    width: auto;
  }
  .page-home .div-body .buy-list-box {
    .list {
      margin-top: 0.6rem;
    }
    > .title {
      padding: 0.38rem 0 0.18rem;
      img {
        display: none;
      }
    }
  }
  .page-home #road-map {
    padding-bottom: 0;
    > .title {
      padding-left: 0.4rem;
    }
    .list {
      width: 100%;
      height: auto;
      display: block;
    }
  }
  .page-home #partner {
    background-image: none;
    height: auto;
    .list {
      margin-top: 0;
      > div {
        &:nth-child(1),
        &:nth-child(4),
        &:nth-child(5),
        &:nth-child(8) {
          display: none;
        }
      }
    }
  }
  body .page-home .div-body .buy-list-box .list .item .right img:last-child {
    display: inline-block;
    margin-right: 0.2rem;
  }
  .page-home .div-body .buy-list-box {
    .icon-right,
    .icon-left {
      display: none;
    }
  }
  .page-home .conft .img-left {
    top: 0;
  }
  body #div_page_index .page-home .instructions {
    height: auto;
    padding-bottom: 0;
    .row {
      display: block;
    }
  }
  .div_page_index > .body > .top .top-content {
    height: auto;
  }
  .page-home .open-protocol-ecosystem .list {
    margin: 0;
    .right img {
      margin: auto;
    }
  }
  .div_page_index {
    > .body > .top .top-content .south {
      margin-top: 0.2rem;
    }
    #partner {
      background-position: 0%;
      .list > div {
        .item5,
        .item4 {
          position: static;
        }
      }
    }
    .page-home {
      .OMenu .item {
        /* padding-top: 0.1rem; */
      }
      .media {
        width: 96%;
        flex-direction: column;
        padding: 0.2rem 0 0.8rem;
        .left {
          text-align: center;
          margin-bottom: 0.4rem;
        }
      }
      #road-map {
        padding-top: 0.8rem;
        > img {
          margin-bottom: 0;
        }

        div.list div.item-box {
          max-width: 100%;
          margin-bottom: 0.2rem;
          width: 3.3rem;
          height: 4.5rem;
          .title {
            margin: 0 auto 0.4rem;
          }
          ul {
            padding-left: 0.7rem;
            margin: 0 auto;
            display: inline-block;
            li {
              font-size: torem(12);
            }
          }
        }
      }
      .conft img {
        width: 100%;
      }
      .div-defi {
        padding: 0.5rem 0;
        .DEFI_div {
          width: 100%;
        }
      }
      .div-defi .box_2 {
        flex-direction: column;
        width: 100%;
        margin: 0.6rem auto 0.2rem;
        > img {
          height: 3rem;
        }
        > .row {
          margin-top: 0.3rem;
          padding-left: 0;
          > div {
            margin: 0.3rem 0;
          }
          img {
            width: 5rem;
          }
        }
      }
      .token {
        padding: 1rem 0 0.8rem;

        .row {
          width: 100%;
          flex-direction: column;
          .left {
            p {
              text-align: center;
            }
          }
          .right {
            justify-content: center;
            img {
              width: 92%;
            }
            #token_chart {
              width: 100%;
              right: 0;
              top: 0;
            }
          }
        }
      }
    }
  }
  .div-banner {
    width: 98%;

    margin: 0.6rem auto 0;
    padding: 0.3rem;
    //height: torem(100);
    background: #ecf0f3;
    box-shadow: torem(6) torem(8) torem(16) torem(0) #d6dddf,
      torem(-2) torem(-1) torem(6) torem(0) #ffffff;
    border-radius: torem(5);
    // display: flex;
    // align-items: center;
    // justify-content: center;
    color: #323e50;
    position: relative;
    .left {
      height: 0.76rem;
      position: absolute;
      top: 0.3rem;
      left: 0.3rem;
    }
    .div-text {
      .title {
        font-size: torem(18);
        margin-bottom: 0.1rem;
        font-weight: bold;
      }
      p {
        font-size: torem(12);
      }
    }

    .right {
      position: absolute;
      bottom: 0;
      right: torem(3);
      height: 1.2rem;
    }
  }
  body .div_page_index div.page-home {
    .D_p {
      font-size: 0.39rem;
    }
    .D_small_p {
      font-size: 0.25rem;
      //font-size: 0.23rem;
      line-height: 0.32rem;
    }
    .div-defi {
      .DEFI_p_s {
        font-size: torem(12);
      }
    }

    .open-protocol-ecosystem {
      padding: 0.5rem 0;
      .D_p_Second {
        margin-top: 0.6rem;
        font-size: 0.39rem;
      }

      div.list {
        > div {
          margin-top: 0;
        }
        div.item-box {
          width: 2.8rem;
          padding: 0.44rem 0.46rem;
          margin: 0 auto 0;
          border-radius: 0.16rem;
          width: 100%;
          text-align: center;

          background-image: none;

          border-radius: torem(6);
          p {
            text-align: left;
          }
        }
      }
    }
    .DEFI_div {
      margin-top: 0.2rem;
    }
    .DEFI_group {
      margin: torem(40) auto 0;

      border-radius: torem(16);
      .DEFI_p {
        margin-left: 0;
        width: auto;
        /* text-align: left; */
        padding: 0 torem(10);
      }
    }
  }

  .page-home {
    padding: 0 0 0;
    .D_p_Second {
      line-height: 0.5rem;
      font-size: 0.42rem;
    }
    .div-defi {
      .D_p_Second {
        font-size: 0.36rem;
        margin-top: 0.4rem;
        img {
          width: 3.8rem;
        }
      }
    }

    .div-body > .ad_img {
      margin-top: 0.4rem;
    }
    .ad_big_img {
      height: auto;
      width: 110%;
      max-width: 110%;
      transform: translateX(-5%);
    }
    div.ad_big_img {
      max-width: 100%;
      width: 100%;
      transform: translateX(0);
      overflow: hidden;
      .div-text {
        .title {
          font-size: torem(16);
          margin-bottom: 0.1rem;
        }
        p {
          font-size: torem(12);
        }
      }
    }
  }
}
@import '~@assets/css/xdrop.scss';
</style>
