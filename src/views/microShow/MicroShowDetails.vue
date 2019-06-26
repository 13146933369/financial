<template>
    <div class="microShowDetails">
        <div class="microShowDHead"></div>
        <div class="microShowDImg">
            <img src="../../assets/detailBg.png" class="microShowDpic">
            <div class="microShowDName">突击队名称</div>
            <div class="microShowDTitle">单位</div>
            <img src="../../assets/slideShow1.png" class="microShowDPic2"/>
            <div class="microShowDSlogan">d的撒爱上的撒的撒的撒大萨达萨达萨达阿萨德萨达撒大萨达萨达撒大萨达萨达爱上萨达爱上的撒撒的撒大萨达撒萨达萨达大大大大萨达萨达萨达撒多所多撒多撒多撒多撒多撒多撒多撒多撒多撒大多撒多撒</div>
        </div>
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
v
<script>
    export default {

    }
</script>

<style lang="stylus" scoped>
.microShowDetails
  width: 100%
  height 100%
  background-color #fff
  font-family:"微软雅黑";
  .microShowDHead
    position absolute
    width 100%
    height 125px
    background-color:#ace9c5
   .microShowDImg
     width 750px
     height 1104px
     position relative
     margin 0 auto
     .microShowDpic
       width 750px
       height 1104px
     .microShowDName
       position absolute
       left 50%
       transform translate(-50%,0)
       -webkit-transform translate(-50%,0)
       top 60px
       color #fff
       font-size 25px
       font-weight bold
     .microShowDTitle
       position absolute
       left 50%
       transform translate(-50%,0)
       -webkit-transform translate(-50%,0)
       top 95px
       font-size 23px
       font-weight bold
       color #fff
     .microShowDPic2
       width 510px
       position absolute
       left 50%
       transform translate(-50%,0)
       top:200px
     .microShowDSlogan
      font-family "微软雅黑"
      width 510px
      height 105px
      position absolute
      left 50%
      transform translate(-50%,0)
      top:580px
      font-size 25px
      color:#000000
      overflow-x hidden
      line-height 35px





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