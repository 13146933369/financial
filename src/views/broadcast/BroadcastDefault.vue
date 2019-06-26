<template>
    <div class="broadcast">
        <div class="view-wrapper">
            <cube-recycle-list class="list" :size="size" :on-fetch="onFetch" :offset="offset">
                <template slot="item" slot-scope="{ data }">
                    <div :id="data.id" class="item" @click="handleClick(data)">
                        <div class="avatar" :style="{backgroundImage: 'url(' + (data.avatar || '') + ')'}"></div>
                        <div class="bubble">
                            <div class="broadcastBox">
                                <div class="broadcastBoxBor">
                                    <img src="../../assets/boradcastPic1.png" class="broadcastImg">
                                    <img src="../../assets/boradcastStart.png" class="broadcastStar">
                                    <div class="broadcastMainTitle">创意场景 智在未来</div>
                                    <div class="broadcasTitle">中国农业银行场景金融青年创意大赛</div>
                                    <img src="../../assets/boradcastEnter.png" class="broadcasEnter">
                                </div>

                            </div>
                        </div>
                    </div>
                </template>
            </cube-recycle-list>
        </div>
        <!--底部菜单栏-->
        <div class="microClassFoot">
            <div class="microClassFootBox">
                <div class="flexBut">
                    <router-link :to="{path:'/microClass/microClassDefault'}">
                        <img src="../../assets/but_4.png">
                        <div class="flexFont">微课堂</div>
                    </router-link>
                </div>
                <div class="flexBut">
                    <router-link :to="{path:'/microClass/microClassDefault'}">
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
                    <router-link :to="{path:'/microClass/microClassDefault'}">
                        <img src="../../assets/but_3.png">
                        <div class="flexFont">微展示</div>
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
                size: 30,
                offset: 100
            }
        },
        methods: {
            onFetch() {
                let items = []
                return new Promise((resolve) => {
                    // 模拟请求 50 条数据，因为 size 设置为 50
                    setTimeout(() => {
                        for (let i = 0; i < 30; i++) {
                            items.push({
                                id: i,
                                msg: '123',
                                time: 'Thu Oct 25 2018 15:02:12 GMT+0800 (中国标准时间)'
                            })
                        }
                        resolve(items)
                    }, 1000)
                })
            },
            handleClick(data) {
                console.log('Item:' + data)
            }
        }
    }
</script>

<style lang="stylus"scoped>
    .view-wrapper
        position: fixed
        top:0
        left: 0
        bottom: 0
        width: 100%
      .broadcastBox
        position relative
        width 660px;
        height 180px;
        margin 0 auto
        margin-top 40px
        .broadcastBoxBor
          width 600px
          height 180px
          margin 0 auto
          box-shadow: 1px 3px 1px #eaeaea;
          border 1px solid #f1f1f1
          border-radius 5%
          .broadcastImg
            width 146px
            height 141px
            position absolute
            top:20px;
            left 0
          .broadcastStar
            position absolute
            top:128px
            left 175px;
            width 167px
            height 25px
          .broadcastMainTitle
             position absolute
             top:45px
             left 176px
             font-size 30px
             color:#232323
             font-weight bold
          .broadcasTitle
              position absolute
              top:92px
              left 176px
              font-size 22px
              color:#535353
           .broadcasEnter
               position absolute
               right 0
               top:130px
               width 130px;
               height 45px
               line-height 40px
               background-color:#ace9c5
               font-size 20px
               text-align center
               color:#fff
               border-radius 10%





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

</style>