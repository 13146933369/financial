<template>
    <div class="shopShow">
        <div class="commodity">
            <div class="commodityTitle shopTitle">每日爆品</div>
            <div class="commodityPic">
                <div class="commdityPicBox" v-if="shopShowData.hotgoodlist.hotgood_1.goodsinfo">
                    <router-link :to="{name:'detailDefault',query:{shopArgument:shopShowData.hotgoodlist.hotgood_1.goodsjson.jsonpath}}">
                        <img :src="shopShowData.hotgoodlist.hotgood_1.goodsinfo.pic"class="commdityImgL">
                    </router-link>
                    <div class="commoditMoney">
                        <div class="commoditySum">￥{{shopShowData.hotgoodlist.hotgood_1.salesprice}}</div>
                        <div class="commodityCancelled">￥{{shopShowData.hotgoodlist.hotgood_1.marketprice}}</div>
                    </div>
                </div>
                <div class="commdityPicBox" v-if="shopShowData.hotgoodlist.hotgood_2.goodsinfo">
                    <router-link :to="{name:'detailDefault',query:{shopArgument:shopShowData.hotgoodlist.hotgood_2.goodsjson.jsonpath}}">
                        <img :src="shopShowData.hotgoodlist.hotgood_2.goodsinfo.pic" class="commdityImgR">
                    </router-link>
                    <div class="commodityMongyR">
                        <div class="commoditySum">￥{{shopShowData.hotgoodlist.hotgood_2.salesprice}}</div>
                        <div class="commodityCancelled">￥{{shopShowData.hotgoodlist.hotgood_2.marketprice}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="commodityBorder"></div>
        <div class="commodity">
            <div class="commodityTitle shopTitle">每日上新</div>
            <div class="commodityLittleTitle">每日9点 折扣超前</div>
            <div class="commodityPic">
                <div class="commdityPicL" v-if="shopShowData.newgoodsput.newshop_1">
                    <router-link :to="{name:'detailDefault',query:{shopArgument:shopShowData.newgoodsput.newshop_1.json_path.jsonpath}}">
                        <img :src="shopShowData.newgoodsput.newshop_1.pic" class="commdityImgL">
                    </router-link>
                </div>
                <div class="commdityPicR"  v-if="shopShowData.newgoodsput.newshop_2">
                    <router-link :to="{name:'detailDefault',query:{shopArgument:shopShowData.newgoodsput.newshop_2.json_path.jsonpath}}">
                        <img :src="shopShowData.newgoodsput.newshop_2.pic" class="commdityImgRTwo">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:["shopShowData"]
    }
</script>

<style scoped lang="stylus">
    .shopShow
        width 100%
        height 320px
        display flex
        flex-wrap wrap

    .commodity
        width 330px
        height 320px;
        flex 0 0 49%

    .commodityPic
        display flex
        flex-wrap wrap

    .commdityPicBox
        width 50%
        height 320px
        flex 0 0 50%

    .commodityTitle
        margin-top 30px;
        margin-left 40px;
        font-weight 550
        color #101010

    .commdityImgL
        width 120px;
        height 120px
        margin-top 35px;
        margin-left 50px;

    .commdityImgR
        width 120px;
        height 124px
        margin-top 35px;
        margin-left 35px;

    .commodityBorder
        border-left 2px solid rgb(242, 242, 242);

    .commodityCancelled
        font-weight:bold;
        font-size: 16px;
        color: #adadad;
        font-style: normal;
        letter-spacing: 2px;
        text-decoration: line-through;
        margin-top 10px
        text-align center

    .commoditMoney
        margin-left 20px;
    .commoditySum
        height 15px
        font-size 18px
        color #E41E3E
        font-weight bold;
        margin-top 5px
        text-align center
    .commodityMongyR
        margin-left 10px;

    .commodityLittleTitle
        margin-top 20px
        margin-left 45px
        font-weight 400
        font-size 11px
        color #000000
    .commdityImgRTwo
        width 118px
        height 118px
        margin-top 40px
        margin-left 30px

</style>