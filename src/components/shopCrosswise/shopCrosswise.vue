<template>
    <div class="shopCrosswise">
        <div>
            <!--{{brandlist}}-->
        </div>
        <cube-scroll
                ref="scroll"
                :data="items"
                direction="horizontal"
                class="horizontal-scroll-list-wrap">
            <ul class="list-wrapper">
                <li v-for="item in items" class="list-item">
                    <div class="shopCrossCon">
                        <router-link :to="{name:'detailDefault',query:{shopArgument:item.json_path.jsonpath}}">
                            <img :src="item.pic">
                            <div class="shopCrossFont">
                                <div class="shopCrossTitle recommendContenFont">{{item.name}}</div>
                                <div class="shopCrossText recommendContenFont">￥{{item.get_types[0].salesprice}}</div>
                            </div>
                        </router-link>
                    </div>
                </li>
            </ul>
        </cube-scroll>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        props:["brandlist"],
        data() {
            return {
                items:[]
            }
        },
        watch: {
            brandlist: function(newVal,oldVal){
                this.items = newVal
            }
        },
        created: function () {

        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.shopCrosswise
    margin-bottom 30px;
    margin-top 35px;
    .horizontal-scroll-list-wrap
        border: 1px solid rgba(0, 0, 0, 0.1)
        border-radius: 5px
        .cube-scroll-content
            display: inline-block
        .list-wrapper
            padding: 0 20px
            line-height: 60px
            white-space: nowrap
        .list-item
            display: inline-block
        .shopCrossCon
            margin-right 40px
        .shopCrossCon img
            width 202px
            height 202px
        .shopCrossFont
            width 202px
            text-align center
            font-weight 400
            color #101010
            line-height 35px
            overflow hidden
        .shopCrosswiseBox
            margin-left 20px;
            margin-bottom 20px;
        .shopCrossText
           margin-top 10px;
           color: #e31436;
           font-weight: 700;
        .shopCrossTitle
            margin-top 10px;
</style>
