<template>
<div class="microShow">
    <div class="scroll-list-wrap">
        <cube-scroll
                ref="scroll"
                :data="items"
                :options="options"
                @pulling-down="onPullingDown"
                @pulling-up="onPullingUp">
                <ul class="microShowUl">
                    <li v-for="microData in items">
                        <div class="microShowBg" @click="microShowFun">
                            <img src="../../assets/arrows.png" class="microShowArrows">
                            <div class="microShowBor"></div>
                            <div class="microShowName">团队名称</div>
                        </div>
                    </li>
                </ul>
        </cube-scroll>
    </div>
<!--展现风采按钮-->
<div class="microShowBut">展现风采</div>
<!--底部菜单栏-->
<div class="microClassFoot">
    <div class="microClassFootBox">
        <div class="flexBut">
            <router-link :to="{path:'/microClass/microClassDefault'}">
                <img src="../../assets/but_3.png">
                <div class="flexFont">微课堂</div>
            </router-link>
        </div>
        <div class="flexBut">
            <router-link :to="{path:'/microFourm/microFourmDefault'}">
                <img src="../../assets/but_2.png">
                <div class="flexFont">微论坛</div>
            </router-link>
        </div>
        <div class="flexBut">
            <router-link :to="{path:'/'}">
                <img src="../../assets/but_1.png">
                <div class="flexFont">首页</div>
            </router-link>
        </div>
        <div class="flexBut">
            <router-link :to="{path:'/broadcast/broadcastDefault'}">
                <img src="../../assets/but_4.png">
                <div class="flexFont">动态播报</div>
            </router-link>
        </div>
    </div>

</div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                items:[1,2,3,4,5,6,7,1,1,1,1,11,11,1,1,1,],
                pullDownRefresh: this.pullDownRefreshObj,
                pullUpLoad: this.pullUpLoadObj,
                scrollbar: true
            }
        },
        computed: {
            options() {
                return {
                    pullDownRefresh: this.pullDownRefreshObj,
                    pullUpLoad: this.pullUpLoadObj,
                    scrollbar: true
                }
            }
        },
        methods: {
            onPullingUp() {
                console.log(32322)
                // 模拟更新数据
                setTimeout(() => {
                    if (Math.random() > 0.5) {
                        // 如果有新数据
                        let newPage = _foods.slice(0, 5)
                        this.items = this.items.concat(newPage)
                    } else {
                        // 如果没有新数据
                        this.$refs.scroll.forceUpdate()
                    }
                }, 1000)
            },
            onPullingDown() {
                console.log(1111111)
                // 模拟更新数据
                setTimeout(() => {
                    if (Math.random() > 0.5) {
                        // 如果有新数据
                        this.items.unshift(_foods[1])
                    } else {
                        // 如果没有新数据
                        this.$refs.scroll.forceUpdate()
                    }
                }, 1000)
            },
            microShowFun(){
                this.$router.push({
                    path:"/microShow/microShowDetails",
                    query:{           //路由传参时push和query搭配使用 ，作用时传递参数
                        id:"212",
                    }
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
.microShow
 width: 100%
 height 100%
 background-color #fff
 font-family:"微软雅黑";
 .microClassFoot
    position absolute
    left 0
    bottom 0
    width 100%;
    height 120px
    background #ACE9C5
    .microClassFootBox
        width 650px
        height 120px
        margin 0 auto
        display flex
        flex-direction row
        flex-wrap wrap
        .flexBut
            text-align center
            width 120px;
            height 90px
            margin 0 20px
            margin-top 13px
            img
                height 66px
        .flexFont
            font-family:"微软雅黑";
            margin-top 2px
            font-size 24px;
            color #000000
            font-weight bold

 .scroll-list-wrap
     width 100%
     height 800px
     overflow-x hidden
     .microShowUl
       width 700px
       margin 0 auto
       display flex
       flex-direction row
       flex-wrap wrap
       .microShowBg
           position relative
           width 320px
           height 220px
           margin 28px 10px
           margin-bottom 20px
           border-radius 5%
           background url("../../assets/slideShow1.png") no-repeat
           box-shadow: 2px 8px 10px #bcbcbc;
           .microShowArrows
              width 24px
              height 24px
              position absolute
              bottom 15px
              right 20px
              z-index 100
            .microShowBor
               position absolute
               bottom -5px
               width 320px
               height 60px
               border-bottom-right-radius 20px
               border-bottom-left-radius: 20px
               background-color:rgba(61,65,72,0.8)
            .microShowName
                font-family:"微软雅黑";
                position absolute
                bottom 15px
                left 12px
                font-size 20px
                color #fff


 .microShowBut
    position absolute
    font-size 28px
    bottom 200px
    width 175px
    height 55px
    text-align center
    color:#fff
    background-color #ace9c5
    border-radius 30px
    left 50%
    transform:translate(-50%,0)
    line-height 55px

</style>