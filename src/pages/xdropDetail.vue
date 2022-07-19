<template>
  <div class="xdrop-detail">
    <div class="xdrop-back"
         @click="handleBack">
      <img class="_back-icon"
           src="~@assets/img/xdrop/back.png" />
      <span>More Airdrop</span>
    </div>
    <div class="xdrop-dt"
         element-loading-spinner="el-icon-loading"
         element-loading-background="rgba(0, 0, 0, 0.8)"
         v-loading="detailLoading">
      <div class="xdrop-dtl"
           v-if="dropInfo">
        <div class="xdrop-dtlt">
          <div class="xdrop-dic"
               @click="innerVisible = true">
            <!-- <img class="xdrop-dtltl" :src="dropInfo.minioUrl" /> -->
            <nftAssets :nftInfo="dropInfo" />
          </div>
          <div class="xdrop-dtltr">
            <div class="xdrop-title">{{ dropInfo.assetTitle }}</div>
            <a :href="`https://twitter.com/${dropInfo.creator}`"
               target="_blank">
              <div class="avatar-name">
                <img class="avatar"
                     :src="dropInfo.creatorAvatar" />
                <a class="name">{{ dropInfo.creator }}</a>
              </div>
            </a>
            <div class="wining-rate">Wining Rate</div>
            <div class="wining-rate-line">
              <span></span>{{ dropInfo.hitRate*100 }}%
            </div>
          </div>
        </div>

        <div class="xdrop-dtlm">
          {{
            dropInfo.description ||
            `This NFT was created by 【${dropInfo.creator}】 using WebX, as [#${dropInfo.reservedNum}/${dropInfo.maxSupply}] in the collection. Retweet for a chance to win an NFT airdrop.`
          }}
        </div>

        <div class="div-install-text xdrop-dtlm">
          <p>
            Congratulations, if you are in winner list!
            {{ dropInfo.creator }} has already sent you [{{
              dropInfo.assetTitle
            }}] NFT on Twitter, install webx to claim it & unlock a new 'NFT
            gallery' on your Twitter profile.
          </p>
          <p>Click BACK to discover more events!</p>
          <p>
            <a href="http://discord.gg/5Qr3V7QxKH"
               target="_blank">
              Get more help in discord
            </a>
          </p>
        </div>
      </div>

      <div class="xdrop-dtr"
           v-if="dropInfo">
        <div class="xdrop-dtrt">
          <div class="title">
            <img class="_eth"
                 src="~@assets/img/xdrop/icn_logo@2x.png" />
            <div class="_title">where's &nbsp;my &nbsp;<i>NFT</i></div>
          </div>

          <!-- <img class="_install-btn"
                 src="~@assets/img/xdrop/_install-btn.png" /> -->
          <div class="xdrop-dmenu">
            <img src="~@assets/img/xdrop/arrow@2x.png" />

            <div class="item flex_center active">
              <a :href="$config.webx_down_url"
                 target="_blank"
                 class="btn flex_center">Install WebX to Claim</a>
              <div class="div-border"></div>
            </div>
          </div>
        </div>
        <div class="xdrop-dtrm">
          <div class="v-box-c">
            <div class="v-box">
              <i class="el-icon-loading"></i>
              <iframe src="https://www.youtube.com/embed/RxYojw5F83o"
                      title="INTRUSION.FINANCE"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen />
            </div>
          </div>
        </div>
      </div>
    </div>
    <OMenu class="xdrop-dmenu"
           :menus="menusReservedOrClaimed"
           @click="toggleReservedOrClaimed" />
    <template v-if="ReservedOrClaimed === 0">
      <div v-loading="loading"
           element-loading-spinner="el-icon-loading"
           element-loading-background="rgba(0, 0, 0, 0.8)">
        <table class="xdrop-table xdrop-table-reserved">
          <thead>
            <tr>
              <th>Title</th>
              <th>Winner</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in ReservedList"
                :key="index">
              <td>
                <div class="xdrop-td-user">
                  <div class="user-avatar">
                    <!-- <img :src="item.minioUrl"> -->
                    <img src="../assets/img/xdrop/activity_pic_blind box_large.png" />
                  </div>
                  <span>{{ item.assetTitle }}</span>
                </div>
              </td>
              <td>
                <a :href="`https://twitter.com/${item.userName}`"
                   target="_blank">
                  <div class="xdrop-td-winner">
                    <span>{{ item.userName }}</span>
                    <div class="winner-avatar">
                      <img :src="item.userAvatar" />
                    </div>
                  </div>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <empty v-if="!ReservedList.length" />
        <div class="xdrop-detail-pagination"
             v-if="ReservedList.length > pageSize">
          <el-pagination @current-change="pageChangeReserved"
                         layout="prev,pager,next"
                         :total="ReservedTotal"
                         :pager-count="5"
                         :current-page.sync="ReservedPage" />
        </div>
      </div>
    </template>
    <template v-if="ReservedOrClaimed === 1">
      <div v-loading="loading"
           element-loading-spinner="el-icon-loading"
           element-loading-background="rgba(0, 0, 0, 0.8)">
        <table class="xdrop-table xdrop-table-claimed">
          <thead>
            <tr>
              <th>Title</th>
              <th>
                Address<img @click="handleExportClaimed"
                     class="export-icon"
                     src="~@assets/img/xdrop/export.png" />
              </th>
              <th>Winner</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in claimedList"
                :key="index">
              <td>
                <div class="xdrop-td-user">
                  <div class="user-avatar">
                    <img :src="item.minioUrl" />
                  </div>
                  <span>{{ item.assetTitle }}</span>
                </div>
              </td>
              <td class="xdrop-td-address overflow-ellipsis">
                {{ item.userPublicKey }}
              </td>
              <td>
                <div class="xdrop-td-winner">
                  <a :href="`https://twitter.com/${item.userName}`"
                     target="_blank">
                    <span>{{ item.userName }}</span>
                    <div class="winner-avatar">
                      <img :src="item.userAvatar" />
                    </div>
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <empty v-if="!claimedList.length" />
        <div class="xdrop-detail-pagination"
             v-if="claimedList.length > pageSize">
          <el-pagination @current-change="pageChangeClaimed"
                         layout="prev,pager,next"
                         :total="claimedTotal"
                         :pager-count="5"
                         :current-page.sync="claimedPage" />
        </div>
      </div>
    </template>

    <el-dialog class="_webx-asset-full"
               title=""
               :close-on-click-modal="true"
               :visible.sync="innerVisible"
               append-to-body>
      <!-- <img :src="dropInfo.minioUrl" class="_nft-asset-full" /> -->
      <nftAssets :nftInfo="dropInfo"
                 v-if="dropInfo"
                 :isBgImg="false"
                 :isAutoPlay="true" />
    </el-dialog>
  </div>
</template>

<script>
import OMenu from "components/Layout/OMenu.vue";
import nftAssets from "components/nftAssets.vue";

export default {
  components: {
    OMenu,
    nftAssets
  },
  data () {
    return {
      dropId: null,
      dropInfo: null,
      menusReservedOrClaimed: ["Reserved", "Claimed"],
      ReservedOrClaimed: 0,
      ReservedList: [],
      ReservedPage: 1,
      ReservedTotal: 0,
      claimedList: [],
      claimedPage: 1,
      claimedTotal: 0,
      pageSize: 5,
      loading: false,
      detailLoading: false,
      innerVisible: false
    };
  },
  mounted () {

    // let dropInfo = localStorage.getItem('_wex-drop')
    // if (dropId && dropInfo) {
    //   dropId = dropId.replace('0xt', '')
    //   dropInfo = JSON.parse(dropInfo)
    //   console.log('dropInfo', dropInfo, 'dropId', dropId)
    //   if (dropInfo.id && dropId === dropInfo.id) {
    //     this.dropInfo = dropInfo
    //     this.dropId = dropId
    //     this.getReservedList()
    //   }
    // }
    this.queryDetail()
  },
  methods: {
    queryDetail () {
      let dropId = this.$route.params.id
      dropId = dropId.replace('0xt', '');
      this.dropId = dropId;
      console.log('this.$route.params', this.$route.params)
      this.detailLoading = true;
      this.$smAjax({
        type: 'webx',
        api: '/airdrop/detail',
        data: {
          airdropId: dropId
        },
        method: "post",
        loading: false,
        app: this,
        toast: false,
      }).then(res => {
        this.detailLoading = false;
        console.log('res', res)
        if (res.code == 200) {
          let dropInfo = res.data;

          const resourceUrl = dropInfo.minioUrl
          if (resourceUrl)
            dropInfo.fileType = this.getFileType(resourceUrl)
          dropInfo.fileValue = resourceUrl

          this.dropInfo = dropInfo;

          this.getReservedList()

        }
      })
    },
    toggleReservedOrClaimed (index) {
      this.ReservedOrClaimed = index;
      if (index) {
        this.claimedPage = 1
        this.getClaimedList();
      } else {
        this.ReservedPage = 1
        this.getReservedList();
      }
    },
    getReservedList () {
      this.loading = true;
      this.$smAjax({
        type: 'webx',
        api: '/airdrop/recipients/reservedPaged',
        data: {
          airdropId: this.dropId,
          page: this.ReservedPage,
          pageSize: this.pageSize,
        },
        method: "post",
        loading: false,
        app: this,
        toast: false,
      }).then((res) => {
        this.loading = false;
        if (res.code == 200) {
          const { content, totalElements } = res.data;
          this.ReservedList = content;
          this.ReservedTotal = totalElements;
        }
        // document.querySelector("#div_page_index>.body").scrollTop = 100
      })
    },
    pageChangeReserved (page) {
      this.ReservedPage = page;
      this.getReservedList();
    },
    getClaimedList () {
      this.loading = true;
      this.$smAjax({
        type: 'webx',
        api: '/airdrop/recipients/claimedPaged',
        data: {
          airdropId: this.dropId,
          page: this.claimedPage,
          pageSize: this.pageSize,
        },
        method: "post",
        loading: false,
        app: this,
        toast: false,
      }).then((res) => {
        this.loading = false;
        if (res.code == 200) {
          const { content, totalElements } = res.data;
          this.claimedList = content;
          this.claimedTotal = totalElements;
        }
      })
    },
    pageChangeClaimed (page) {
      this.claimedPage = page;
      this.getClaimedList();
    },
    handleExportClaimed () {
      this.$smAjax({
        type: 'webx',
        api: '/airdrop/recipients/claimed',
        data: {
          airdropId: this.dropId,
          page: this.claimedPage,
          pageSize: 5,
        },
        method: "post",
        responseType: 'text',
        loading: false,
        app: this,
        toast: false,
      }).then((res) => {
        const fileName = this.menusReservedOrClaimed[this.ReservedOrClaimed]
        const blob = new Blob([res], {
          type: 'text/csv,charset=UTF-8'
        })
        const elink = document.createElement('a')
        elink.download = fileName
        elink.style.display = 'none'
        elink.href = URL.createObjectURL(blob)
        document.body.appendChild(elink)
        elink.click()
        URL.revokeObjectURL(elink.href) // 释放URL 对象
        document.body.removeChild(elink)
      })
    },
    getFileType (url) {
      const fileArr = url.split('.')
      const suffix = (fileArr[fileArr.length - 1]).toLowerCase()
      let fileType = 'image'
      switch (suffix) {
        case 'mp3':
          fileType = 'audio'
          break
        case 'mp4':
          fileType = 'video'
          break
      }
      return fileType
    },
    handleBack () {
      let query = {
        isToList: 1
      }
      const page = this.$route.params.page
      if (page) {
        query.xdropPage = page
      }
      this.$router.push({ path: '/', query })
    }
  },
};
</script>

<style lang="scss">
@import '~@assets/css/mixin.scss';
@import '~@assets/css/xdrop.scss';
.xdrop-detail {
  width: 12rem;
  margin: 0 auto 0;
  padding-bottom: 0.76rem;
  .EmptyBox {
    margin-top: 0.4rem;
  }
}
.xdrop-back {
  display: flex;
  align-items: center;
  padding-top: 0.4rem;
  padding-bottom: 0.32rem;
  cursor: pointer;
  img {
    width: 0.24rem;
    height: 0.24rem;
    margin-right: 0.12rem;
  }
  span {
    font-size: 24px;
    font-family: Sora-Medium, Sora;
    font-weight: 500;
    color: #ffffff;
  }
}
.xdrop-dt {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.64rem;
  .xdrop-dtl {
    /* width: 7.63rem; */
    flex: 1;
    margin-right: 0.32rem;
    height: 4.12rem;
    padding: 0.32rem;
    background: #191b25;
    border-radius: 0.16rem;
  }
  .xdrop-dtr {
    width: 4.05rem;
    // width: 5.3rem;
    height: 4.12rem;
    background: #20222d;
    border-top-left-radius: 0.16rem;
    border-top-right-radius: 0.16rem;
    border-bottom-left-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
.xdrop-dtlt {
  display: flex;
  margin-bottom: 0.24rem;
  .xdrop-dic {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.88rem;
    height: 1.44rem;
    background: linear-gradient(7deg, #15062d 0%, #15062d 49%, #401d51 100%);
    border-radius: 0.16rem;
    border: 2px solid #3aa3f7;
    /* border-image: linear-gradient(
        154deg,
        rgba(32, 220, 254, 1),
        rgba(96, 80, 236, 1)
      )
      2 2; */
    margin-right: 0.24rem;
    overflow: hidden;
  }
  .xdrop-dtltl {
    width: 100%;
  }
  .avatar-name {
    padding: 0.12rem 0 0.12rem;
  }
  .xdrop-dtltr {
    padding-top: 0.1rem;
  }
}
.xdrop-dtlm {
  font-size: 14px;
  font-family: Sora-Regular, Sora;
  font-weight: 400;
  line-height: 0.22rem;
  color: #fff;
}
.div-install-text {
  p {
    color: #7b7c8a;

    margin-top: 0.1rem;
  }

  a {
    color: #4cd6ff;
  }
}
.xdrop-dtrt {
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
  height: 1rem;
  padding-right: 0.02rem;
  padding: 0 0.14rem 0 0.02rem;
  padding: 0 0.26rem;
  > .title {
    display: flex;
    margin: 0.28rem 0 0.3rem;
  }
  .xdrop-dmenu {
    width: auto;
    width: 100%;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    padding: 0 0.04rem;
    > img {
      width: 0.74rem;
      height: 0.24rem;
    }

    .item {
      width: auto;
      margin-right: 0;
    }
  }
  ._eth {
    width: 0.42rem;
    height: 0.42rem;
    // margin-left: 0.18rem;
    margin-right: 0.12rem;
  }
  ._title {
    font-size: 0.22rem;
    font-family: TypoPRO-Montserrat-BlackItalic, TypoPRO-Montserrat;
    font-weight: normal;
    color: #ffffff;
    display: flex;
    align-items: center;
    i {
      color: #4cd6ff;
    }
  }
  ._install-btn {
    width: 1.18rem;
    height: 0.4rem;
    margin-left: 0.27rem;
    cursor: pointer;
  }
}
.xdrop-dtrm {
  // height: 3.14rem;
  height: 2.3rem;
  border-radius: 0.2rem;
  /* background: red; */

  .v-box-c {
    width: 100%;
    height: 100%;
    border-radius: torem(24);
    /* border: torem(2) solid #fff; */

    display: flex;
    justify-content: center;
    align-items: center;
    /* margin: 0.62rem 0; */
    .v-box {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      border-radius: torem(18);
      backdrop-filter: blur(torem(2));
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      iframe {
        width: 100%;
        height: 100%;
        position: absolute;
      }
      .el-icon-loading {
        color: #fff;
        font-size: torem(36);
      }
    }
  }
}

.xdrop-dmenu {
  width: 3.25rem;
  justify-content: space-between;
  margin-bottom: 0.35rem;
  .div-border {
    display: none;
  }
  .item {
    width: 1.55rem;
    height: 0.5rem;
    border-radius: 0.04rem;
    opacity: 0.5;
    border: 1px solid;
    width: 2.23rem;
    height: 0.44rem;
    margin-right: 0.2rem;
    border-image: linear-gradient(
        154deg,
        rgba(32, 220, 254, 1),
        rgba(96, 80, 236, 1)
      )
      1 1;
    .btn {
      font-size: 0.18rem;
      font-family: Sora-Medium, Sora;
      font-weight: 500;
      color: #ffffff;
    }
    &.active {
      opacity: 1;
      border-width: 0;
      background: linear-gradient(
        229deg,
        #1edeff 0%,
        rgba(95, 88, 241, 0.96) 69%,
        #654cf0 100%
      );
      .btn {
        font-family: Sora-Medium, Sora;
        font-weight: normal;
      }
    }
  }
}
.xdrop-table {
  width: 100%;
  border-radius: 0.16rem;
  overflow: hidden;
  table-layout: fixed;
  border-collapse: separate;
  a {
    color: inherit;
  }
  .export-icon {
    width: 0.2rem;
    height: 0.2rem;
    margin-left: 0.12rem;
    cursor: pointer;
  }
  td,
  th {
    &:first-child {
      text-align: left;
      padding-left: 0.4rem;
    }
    &:last-child {
      text-align: right;
      padding-right: 0.4rem;
    }
  }
  tbody {
    td:last-child {
      text-align: right;
      padding-right: 0.1rem;
    }
  }
  th {
    font-size: 0.2rem;
    font-family: Sora-Medium, Sora;
    font-weight: 500;
    color: #ffffff;
    height: 0.68rem;
    background: linear-gradient(
      180deg,
      rgba(100, 76, 239, 0) 0%,
      rgba(100, 76, 239, 0.2) 100%
    );
  }
  td {
    font-size: 0.16rem;
    font-family: Sora-Regular, Sora;
    font-weight: 400;
    color: #ffffff;
    padding-top: 0.17rem;
    padding-bottom: 0.17rem;
    background: #191b25;
  }
  tbody {
    tr {
      .xdrop-td-address {
        text-align: center;
      }
      &:first-child {
        td {
          padding-top: 0.29rem;
        }
      }
      &:last-child {
        td {
          padding-bottom: 0.29rem;
        }
      }
    }
  }
  .xdrop-td-user,
  .xdrop-td-winner {
    display: flex;
    align-items: center;
    a {
      display: flex;
      align-items: center;
      .winner-avatar {
        margin-left: 4px;
      }
    }
  }
  .user-avatar {
    width: 0.34rem;
    height: 0.34rem;
    background: linear-gradient(7deg, #15062d 0%, #15062d 49%, #401d51 100%);
    border-radius: 0.04rem;
    border: 1px solid;
    border-image: linear-gradient(
        154deg,
        rgba(32, 220, 254, 1),
        rgba(96, 80, 236, 1)
      )
      1 1;
    margin-right: 0.15rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .xdrop-td-winner {
    flex-direction: row-reverse;
  }
  .winner-avatar {
    width: 0.24rem;
    height: 0.24rem;
    margin-right: 0.12rem;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.xdrop-table-reserved {
  td,
  th {
    width: 50%;
  }
}
.xdrop-table-claimed {
  td,
  th {
    width: 33.3%;
  }
}
.xdrop-detail-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem 0 0.46rem;
}
</style>
