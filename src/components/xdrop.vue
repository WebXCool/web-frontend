<template>
    <div class="xdrop-container">
        <div class="xdrop-item">
            <div class="xdrop-img" @click="handleToDetail">
                <div class="badge"><img class="badge-ico" src="~@assets/img/xdrop/badge.png">BSC</div>
                <img class="xdrop-asset" :src="dropItem.minioUrl">
            </div>
            <div class="xdrop-dec">
                <div class="xdrop-title">{{dropItem.assetTitle}}</div>
                <div class="avatar-name">
                    <img class="avatar" :src="dropItem.creatorAvatar">
                    <a class="name" href="#">{{dropItem.creator}}</a>
                </div>
                <div class="wining-rate">Wining Rate</div>
                <div class="wining-rate-line"><span></span>{{dropItem.rarity[0] === 1 ? '100%' : '100%'}}</div>
                <div class="xdrop-amount">
                    <div class="amount-item">
                        <i>Airdrop Amount</i>
                        <span>{{dropItem.maxSupply}}</span>
                    </div>
                    <div class="amount-item">
                        <i>Participants</i>
                        <span>{{dropItem.reservedNum}}</span>
                    </div>
                </div>
                <div class="count-down">
                    <div>Drop in</div>
                    <div v-countdown="dropItem.deadLine"/>
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
    directives: {
        countdown: {
            bind(el, binding) {
                const { value } = binding
                const getDjs = (value) => {
                    const endTime = new Date(value).getTime()
                    const nowTime = new Date().getTime()
                    const laseTime = (endTime - nowTime) / 1000
                    let d,h,c,s
                    if (laseTime > 0) {
                        d = parseInt(laseTime / (60 * 60 * 24))
                        h = parseInt((laseTime / (60 * 60)) % 24)
                        c = parseInt((laseTime / 60) % 60)
                        s = parseInt(laseTime % 60)

                        d = d < 10 ? '0' + d : d
                        h = h < 10 ? '0' + h : h
                        c = c < 10 ? '0' + c : c
                        s = s < 10 ? '0' + s : s
                    } else {
                        d = h = c = s = '00'
                    }
                    return `${d}d:${h}h:${c}m:${s}s`
                }
                setInterval(() => {
                    el.innerHTML = getDjs(value)
                }, 1000)
            },
            unbind(){
                console.log('unbindunbindunbind')
            }
        }
    },
    data () {
        return {
            
        }
    },
    methods: {
        handleToDetail(){
            this.$emit("click", this.dropItem);
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.12rem;
    color: #7B7C8A;
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