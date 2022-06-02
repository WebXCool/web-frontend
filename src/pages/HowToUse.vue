<template>
  <div class="HowToUse">
    <div class="box">
      <div class="h-top">
        <div class="title">HOW TO <span>USE</span></div>
        <p>
          Future of SocialFi on Web3. An NFT driven platform that allows all
          users to easily access and airdrop crypto assets to anyone.
        </p>
      </div>
      <div class="body">
        <div class="step">
          <div class="row">
            <div class="line">
              <div class="item"></div>
              <div class="item">
                <div class="circle flex_center bg-cover">1</div>
              </div>
            </div>
            <div class="content bg-cover">
              <div class="left">
                <p>1. Install WebX for Chrome.</p>
                <a :href="$config.webx_down_url"
                   target="_blank">
                  <img src="../assets/img/how_to_use/btn.png" />
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="line">
              <div class="item"></div>
              <div class="item">
                <div class="circle flex_center bg-cover">2</div>
              </div>
            </div>
            <div class="content bg-cover"></div>
          </div>
          <div class="row">
            <div class="line">
              <div class="item"></div>
              <div class="item">
                <div class="circle flex_center bg-cover">3</div>
              </div>
            </div>
            <div class="content bg-cover"></div>
          </div>
        </div>
        <div class="video">
          <img src="../assets/img/how_to_use/use_decorate_arrow_down@2x.png" />
          <div class="v-box-c">
            <div class="v-box">
              <i class="el-icon-loading"></i>
              <iframe src="https://www.youtube.com/embed/3WEoSQqGEww"
                      title="INTRUSION.FINANCE"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen />
              <!-- <video
                                className="video"
                                playsInline
                                muted
                                loop
                                preload="auto"


                            />   -->
            </div>
          </div>
          <img src="../assets/img/how_to_use/use_decorate_arrow_up@2x.png" />
        </div>
      </div>
      <a href="https://whitepaper.webx.cool/faq"
         target="_blank">I still need help</a>
    </div>
  </div>
</template>

<script >
import { mapGetters, mapActions } from 'vuex';

export default {
  mounted () {

  },
  methods: {
    down () {
      window.open(this.$config.webx_down_url)
    }
  }
};
</script>

<style lang="scss" >
@import '~@assets/css/mixin.scss';

.HowToUse {
  // background-image: url(../assets/img/how_to_use/bg.png);
  // background-repeat: no-repeat;
  // background-position: center 10%;
  // background-size:cover;
  // padding-top:1.1rem;
  height: 100%;
  .box {
    width: 12rem;
    margin: 0 auto 0;
    padding-top: 0.8rem;
    padding-bottom: 0.76rem;
    > a {
      display: block;
      width: torem(138);
      height: torem(22);
      font-size: torem(18);
      font-family: Sora-Regular, Sora;
      font-weight: 400;
      color: #7b7c8a;
      line-height: torem(22);
      border-bottom: torem(1) solid currentColor;
      margin: 0 auto;
    }
    .h-top {
      margin-bottom: 0.2rem;
      p {
        font-family: Sora-Medium, Sora;
      }
      img {
        width: 4.02rem;
      }
      .title {
        font-size: torem(40);
        font-family: TypoPRO-Montserrat-BlackItalic, TypoPRO-Montserrat;
        font-weight: normal;
        color: #ffffff;
        font-style: italic;
        span {
          color: #1edeff;
        }
      }
      p {
        width: 10.42rem;
        height: 1rem;
        font-size: 0.26rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 0.4rem;
        margin-top: 0.3rem;
        margin-bottom: 0;
      }
    }
    .body {
      display: flex;
      padding-bottom: 0.6rem;

      .video {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        padding: 0.1rem 0 0.1rem 0.96rem;
        > img {
          width: 0.54rem;
          margin: 0 auto;
        }
        .v-box-c {
          width: torem(550);
          height: torem(380);
          border-radius: torem(24);
          border: torem(2) solid #fff;

          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0.62rem 0;
          .v-box {
            width: torem(494);
            height: torem(336);
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
    }
    .step {
      padding-left: 0.5rem;
      .row {
        display: flex;
        //  height: 3.15rem;
        height: 2.8rem;

        align-items: center;
        &:nth-child(1) .content {
          background-image: url(../assets/img/how_to_use/use_card_1_bg.png);
        }
        &:nth-child(2) .content {
          background-image: url(../assets/img/how_to_use/use_card_2@2x.png);
        }
        &:nth-child(3) .content {
          background-image: url(../assets/img/how_to_use/use_card_3@2x.png);
        }
        .line {
          display: flex;
          flex-direction: column;
          padding: 0 0.8rem 0 0;
          height: 100%;
          .item {
            flex: 1;
            width: 0;
            border-right: torem(2) dashed #8601ff;
            border-left: torem(2) dashed #8601ff;

            border-right: torem(1) dashed rgba(255, 255, 255, 0.5);
            border-left: torem(1) dashed rgba(255, 255, 255, 0.5);
            position: relative;
          }

          .item:nth-child(2) {
            .circle {
              width: 0.56rem;
              height: 0.56rem;

              /* background: linear-gradient(154deg, #9601ff 0%, #5000ff 100%); */
              background-image: url(../assets/img/how_to_use/serial-number_bg@2x.png);
              /* border-radius: 50%; */
              position: absolute;
              top: -0.28rem;
              left: -0.28rem;
              font-size: 0.28rem;
              color: #fff;
            }
          }
        }

        .content {
          width: 4.6rem;
          // height: 2.15rem;
          height: 1.75rem;

          /* background: rgba(255, 255, 255, 0.19); */
          /* border-radius: 0.25rem; */
          display: flex;
          justify-content: space-between;
          padding: 0.3rem;
          .left {
            text-align: left;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0.1rem 0;
            p {
              font-size: 0.18rem;
              font-weight: 600;
              color: #ffffff;
              // line-height: 0.22rem;
              padding: 0;
            }
            img {
              cursor: pointer;
              width: 1.52rem;
            }
          }
          .right {
            width: 1.58rem;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              // width: 1.4rem;
              height: 0.96rem;
            }
          }
        }
      }

      .row:first-child {
        .line .item:nth-child(1) {
          border: 0;
        }
      }
      .row:last-child {
        .line .item:nth-child(2) {
          border: 0;
        }
      }
    }
  }
}
</style>
