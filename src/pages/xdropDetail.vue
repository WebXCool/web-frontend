<template>
  <div class="xdrop-detail" v-if="dropInfo">
    <div class="xdrop-back" @click="handleBack">
      <img class="_back-icon" src="~@assets/img/xdrop/back.png" />
      <span>Back</span>
    </div>
    <div class="xdrop-dt">
      <div class="xdrop-dtl">
        <div class="xdrop-dtlt">
          <div class="xdrop-dic">
            <img
              class="xdrop-dtltl"
              :src="dropInfo.minioUrl"
            />
          </div>
          <div class="xdrop-dtltr">
            <div class="xdrop-title">{{ dropInfo.assetTitle }}</div>
            <div class="avatar-name">
              <img class="avatar" :src="dropInfo.creatorAvatar" />
              <a class="name" href="#">{{ dropInfo.creator }}</a>
            </div>
            <div class="wining-rate">Wining Rate</div>
            <div class="wining-rate-line"><span></span>{{dropInfo.rarity[0] === 1 ? '100%' : '100%'}}</div>
          </div>
        </div>
        <div class="xdrop-dtlm">{{dropInfo.description}}</div>
      </div>

      <div class="xdrop-dtr">
        <div class="xdrop-dtrt">
          <img class="_eth" src="~@assets/img/xdrop/icn_logo@2x.png" />
          <div class="_title">where's my <i>NFT</i></div>
          <img class="_install-btn" src="~@assets/img/xdrop/_install-btn.png" />
        </div>
        <div class="xdrop-dtrm">1</div>
      </div>
    </div>
    <OMenu
        class="xdrop-dmenu"
        :menus="menusReservedOrClaimed"
        @click="toggleReservedOrClaimed"
    />
    <template v-if="ReservedOrClaimed === 0">
      <div v-loading="loading"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)">
        <table class="xdrop-table xdrop-table-reserved">
          <thead>
            <tr>
              <th>Titile</th>
              <th>Winner</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in ReservedList" :key="index">
              <td>
                <div class="xdrop-td-user">
                  <div class="user-avatar">
                    <img :src="item.minioUrl">
                  </div>
                  <span>{{item.assetTitle}}</span>
                </div>
              </td>
              <td>
                <div class="xdrop-td-winner">
                  <span>{{item.userName}}</span>
                  <div class="winner-avatar">
                    <img :src="item.userAvatar">
                  </div>
                </div>
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
            :current-page.sync="ReservedPage"/>
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
              <th>Titile</th>
              <th>Address<img @click="handleExportClaimed" class="export-icon" src="~@assets/img/xdrop/export.png" /></th>
              <th>Winner</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in claimedList" :key="index">
              <td>
                <div class="xdrop-td-user">
                  <div class="user-avatar">
                    <img :src="item.minioUrl">
                  </div>
                  <span>{{item.assetTitle}}</span>
                </div>
              </td>
              <td class="xdrop-td-address">
                {{item.userPublicKey}}
              </td>
              <td>
                <div class="xdrop-td-winner">
                  <span>{{item.userName}}</span>
                  <div class="winner-avatar">
                    <img :src="item.userAvatar">
                  </div>
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
            :current-page.sync="claimedPage"/>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import OMenu from "components/Layout/OMenu.vue";
export default {
  components: {
    OMenu,
  },
  data() {
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
      loading: false
    };
  },
  mounted () {
    const dropId = this.$route.params.id
    let dropInfo = localStorage.getItem('_wex-drop')
    if (dropId && dropInfo) {
      dropInfo = JSON.parse(dropInfo)
      if(dropInfo.id && dropId === dropInfo.id){
        this.dropInfo = dropInfo
        this.dropId = dropId
        this.getReservedList()
      }
    }
  },
  methods: {
    toggleReservedOrClaimed(index) {
      this.ReservedOrClaimed = index;
      if (index) {
        this.claimedPage = 1
        this.getClaimedList();
      } else {
        this.ReservedPage = 1
        this.getReservedList();
      }
    },
    getReservedList() {
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
      })
    },
    pageChangeReserved (page) {
      this.ReservedPage = page;
      this.getReservedList();
    },
    getClaimedList() {
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
    handleExportClaimed(){
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
    handleBack(){
      this.$router.go(-1)
    }
  },
};
</script>

<style lang="scss">
@import "~@assets/css/mixin.scss";
@import "~@assets/css/xdrop.scss";
.xdrop-detail {
  width: 12rem;
  margin: 0 auto 0;
  padding-top: 0.8rem;
  padding-bottom: 0.76rem;
  .EmptyBox{
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
    width: 7.63rem;
    height: 4.12rem;
    padding: 0.32rem;
    background: #191b25;
    border-radius: 0.16rem;
  }
  .xdrop-dtr {
    width: 4.05rem;
    height: 4.12rem;
    background: #20222d;
    border-top-left-radius: 0.16rem;
    border-top-right-radius: 0.16rem;
    border-bottom-left-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
  }
}
.xdrop-dtlt {
  display: flex;
  margin-bottom: 0.24rem;
  .xdrop-dic{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.88rem;
    height: 1.44rem;
    background: linear-gradient(7deg, #15062D 0%, #15062D 49%, #401D51 100%);
    border-radius: 0.1rem;
    border: 2px solid;
    border-image: linear-gradient(154deg, rgba(32, 220, 254, 1), rgba(96, 80, 236, 1)) 2 2;
    margin-right: 0.24rem;
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
  font-size: 0.14rem;
  font-family: Sora-Regular, Sora;
  font-weight: 400;
  color: #7b7c8a;
  line-height: 0.18rem;
}
.xdrop-dtrt {
  display: flex;
  align-items: center;
  height: 1rem;
  padding-right: 0.02rem;
  ._eth {
    width: 0.26rem;
    height: 0.26rem;
    margin-left: 0.18rem; 
    margin-right: 0.12rem;
  }
  ._title {
    font-size: 0.22rem;
    font-family: TypoPRO-Montserrat-BlackItalic, TypoPRO-Montserrat;
    font-weight: normal;
    color: #ffffff;
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
  height: 3.12rem;
  border-radius: 0.2rem;
  background: red;
}

.xdrop-dmenu{
    width: 3.25rem;
    justify-content: space-between !important;
    margin-bottom: 0.35rem;
    .div-border{
        display: none;
    }
    .item{
        width: 1.55rem;
        height: 0.5rem;
        border-radius: 0.04rem;
        opacity: 0.5;
        border: 1px solid;
        border-image: linear-gradient(154deg, rgba(32, 220, 254, 1), rgba(96, 80, 236, 1)) 1 1;
        .btn{
            font-size: 0.18rem;
            font-family: Sora-Medium, Sora;
            font-weight: 500;
            color: #FFFFFF;
        }
        &.active{
          opacity: 1;
          border-width: 0;
          background: linear-gradient(229deg, #1EDEFF 0%, rgba(95, 88, 241, 0.96) 69%, #654CF0 100%);
          .btn{
            font-family: Sora-Regular_SemiBold, Sora;
            font-weight: normal;
          }
        }
    }
}
.xdrop-table{
  width: 100%;
  border-radius: 0.16rem;
  overflow: hidden;
  table-layout: fixed;
  border-collapse: separate;
  .export-icon{
    width: 0.2rem;
    height: 0.2rem;
    margin-left: 0.12rem;
    cursor: pointer;
  }
  td,th{
    &:first-child{
      text-align: left;
      padding-left: 0.4rem;
    }
    &:last-child{
      text-align: right;
      padding-right: 0.4rem;
    }
  }
  th{
    font-size: 0.2rem;
    font-family: Sora-Medium, Sora;
    font-weight: 500;
    color: #FFFFFF;
    height: 0.68rem;
    background: linear-gradient(180deg, rgba(100, 76, 239, 0) 0%, rgba(100, 76, 239, 0.2) 100%);
  }
  td{
    font-size: 0.16rem;
    font-family: Sora-Regular, Sora;
    font-weight: 400;
    color: #FFFFFF;
    padding-top: 0.17rem;
    padding-bottom: 0.17rem;
    background: #191B25;
  }
  tbody{
    tr{
      .xdrop-td-address{
        text-align: center;
      }
      &:first-child{
        td{
          padding-top: 0.29rem;
        }
      }
      &:last-child{
        td{
          padding-bottom: 0.29rem;
        }
      }
    }
  }
  .xdrop-td-user,.xdrop-td-winner{
    display: flex;
    align-items: center;
  }
  .user-avatar{
    width: 0.34rem;
    height: 0.34rem;
    background: linear-gradient(7deg, #15062D 0%, #15062D 49%, #401D51 100%);
    border-radius: 0.04rem;
    border: 1px solid;
    border-image: linear-gradient(154deg, rgba(32, 220, 254, 1), rgba(96, 80, 236, 1)) 1 1;
    margin-right: 0.15rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .xdrop-td-winner{
    flex-direction: row-reverse;
  }
  .winner-avatar{
    width: 0.24rem;
    height: 0.24rem;
    margin-right: 0.12rem;
    border-radius: 50%;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
    }
  }
}

.xdrop-table-reserved{
  td,th{
   width: 50%;
  }
}
.xdrop-table-claimed{
  td,th{
   width: 33.3%;
  }
}
.xdrop-detail-pagination{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem 0 0.46rem;
}
</style>