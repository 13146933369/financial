<template>
    <div class="shopRecommendBox">
        <div class="shopRecommend" v-for="item in recommendData">
            <div class="shopRecommendImg">
                <router-link :to="{name:'detailDefault',query:{shopArgument:item.goodsjson.jsonpath,backSite:'productDefault'}}">
                    <img :src="item.goodsinfo.pic">
                </router-link>
            </div>
            <div class="shopRecommendCon">
                <div class="shopRecommendText recommendContenFont"> {{item.goodsinfo.name}}</div>
                <div class="shopRecommendSubhead classifyFont"> {{item.goodsinfo.subhead}}</div>
                <div class="shopRecommendPrice recommendContenFont">￥{{item.salesprice}}</div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        props:["recommendData"]
    }
</script>

<style scoped  lang="stylus">
.shopRecommendBox
    margin-top 30px;
    .shopRecommend
        display flex
        padding-bottom 60px
    .shopRecommendImg img
        width 250px
        height 250px
        margin-left 20px
    .shopRecommendText
        width 364px
        color #737373
        font-weight 700
        margin-left 50px
        margin-top 30px
        line-height 40px
    .shopRecommendSubhead
          width 364px
          color #737373
          font-weight 400
          margin-left 50px
          margin-top 15px
          line-height 40px
    .shopRecommendPrice
        color #E31436
        font-weight 700
        margin-left 50px
        margin-top 30px



</style>