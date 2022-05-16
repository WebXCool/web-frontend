<template>
    <div class="xdrop-container">
        <div class="xdrop-item">
            <div class="xdrop-img">
                <div class="badge"><img class="badge-ico" src="~@assets/img/xdrop/badge.png">BSC</div>
                <img class="xdrop-asset" :src="dropItem.minioUrl">
            </div>
            <div class="xdrop-dec">
                <div class="xdrop-title">{{dropItem.assetTitle}}</div>
                <div class="avatar-name">
                    <img class="avatar" src="~@assets/img/xdrop/badge.png">
                    <a class="name" href="#">{{dropItem.creator}}</a>
                </div>
                <div class="wining-rate">Wining Rate</div>
                <div class="wining-rate-line"><span></span>0.1%</div>
                <div class="xdrop-amount">
                    <div class="amount-item">
                        <i>Airdrop Amount</i>
                        <span>198,000,000</span>
                    </div>
                    <div class="amount-item">
                        <i>Participants</i>
                        <span>999,9</span>
                    </div>
                </div>
                <div class="count-down">
                    1
                </div>
                <a :href="dropItem.tweetURL" target="_bank" class="retweet">Retweet</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dropItem: {
            type: Object,
            default: () => {}
        }
    },
    data () {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~@assets/css/mixin.scss';

.xdrop-container{
    width: 33.33%;
    padding: 0 0.12rem;
    margin-bottom: 0.4rem;
}
.xdrop-item{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-align: left;
    background: #06091A;
}
.xdrop-img{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: torem(230);
    overflow: hidden;
    cursor: pointer;
    .xdrop-asset{
        width: 100%;
    }
    .badge{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 0.89rem;
        height: 0.3rem;
        font-size: 0.14rem;
        padding: 1px;
        color: #FFFFFF;
        border-image: linear-gradient(175deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.6)) 1 1;
        border-radius: 0px 0px 0.2rem 0px;
        &::before{
            position: absolute;
            left: 0;
            top: 0;
            content: '';
            width: 100%;
            height: 100%;
            border-radius: 0px 0px 0.2rem 0px;
            background: rgba(255, 255, 255, 0.2);
        }
    }
}
.badge-ico{
    width: 0.16rem;
    height: 0.16rem;
    margin-right: 0.04rem;
}
.xdrop-dec{
    padding:0.16rem 0.2rem 0;
}
.xdrop-title{
    font-size: 0.18rem;
    font-family: TypoPRO-Montserrat-BlackItalic, TypoPRO-Montserrat;
    font-weight: normal;
    color: #FFFFFF;
    line-height: 0.22rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.avatar-name{
    display: flex;
    align-items: center;
    padding: 0.08rem 0 0.12rem;
    .avatar{
        width: 0.24rem;
        height: 0.24rem;
        border-radius: 50%;
        margin-right: 0.08rem;
    }
    .name{
        font-size: 0.14rem;
        font-family: Sora-Medium, Sora;
        font-weight: 500;
        color: #7B7C8A;
    }
}
.wining-rate{
    font-size: 14px;
    font-family: Sora-Regular, Sora;
    font-weight: 400;
    color: #7B7C8A;
    line-height: 18px;
    padding-bottom: 0.08rem;
}
.wining-rate-line{
    display: flex;
    align-items: center;
    padding-bottom: 0.12rem;
    font-size: 0.14rem;
    font-family: Sora-Medium, Sora;
    font-weight: 500;
    color: #FFFFFF;
    span{
        width: 0.08rem;
        height: 0.08rem;
        border-radius: 50%;
        margin-right: 0.06rem;
        background: #FFFFFF;
    }
}
.xdrop-amount{
    display: flex;
    padding-bottom: 0.16rem;
    .amount-item{
        display: flex;
        flex-direction: column;
        &:nth-child(1){
            padding-right: 0.24rem;
        }
    }
    i{
        padding-bottom: 0.08rem;
        font-style: normal;
        font-size: 0.14rem;
        font-family: Sora-Regular, Sora;
        font-weight: 400;
        color: #7B7C8A;
    }
    span{
        font-family: Sora-Medium, Sora;
        font-weight: 500;
        color: #FFFFFF;
    }
}
.count-down{
    padding: 0.11rem 0 0.18rem;
    border-top: dotted 1px #7B7C8A;
}
.retweet{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 98%;
    height: 0.42rem;
    margin: 0 auto;
    font-size: 0.16rem;
    font-family: Sora-Regular_SemiBold, Sora;
    color: #FFFFFF;
    background: linear-gradient(229deg, #1EDEFF 0%, rgba(95, 88, 241, 0.96) 69%, #654CF0 100%) #634DEF;
    border-radius: 0px 0px 0.1rem 0.1rem;
}
</style>