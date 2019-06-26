<template>
    <div class="shopSearch">
        <!--<img src="../../assets/searchCode.png" class="shopSearchImg">-->
        <div class="el-icon-shopsousuo shopSearchPic"></div>
        <input type="text" placeholder="热卖商品" class="shopSearchInput searFont" @focus="handleinput()">
        <!--<div class="el-icon-shoppinglun iconNews"></div>-->
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data(){
            return{

            }
        },
        methods:{
            handleinput(){
                this.$router.push({
                    name:"searchDefault",
                })
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.shopSearch
    width 100%
    height 80px
    position relative
    .shopSearchImg
        width 40px;
        height 40px;
        position absolute
        left 15px
        top:20px;
    input
        width 710px
        height 56px
        position absolute
        top:10px;
        left 10px;
        background-color:#EAEBED
        border-radius:10px
        outline:none
        font-size 15px
        color:#444444
        padding-left:20px
        padding-top 2px
        line-height: 56px;
    input::-webkit-input-placeholder
        padding-left 40px;
        font-size: 22px;
        line-height:56px;
       text-align: center;


    .iconNews
         position absolute
         right 10px
         top:20px
         font-size 40px
    .shopSearchPic
        position absolute
        left 20px
        top:22px
        font-size:40px
        z-index 100

</style>
