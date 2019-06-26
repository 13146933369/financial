<template>
    <div class="distributionBox">
        <div class="distributionBg" v-show="distributionData.showBg" @click="distributionBgClick">
            <transition name="fade">
                <div class="distributionFBox" @click.stop>
                    <div class="distributionCenter">
                        <div class="close" @click="distributionBgClick"><img src="../../assets/close.png"></div>
                        <div class="title" v-if="rebateShow">立即分享给好友</div>
                        <div class="title" v-else>分享后预计最高可赚取佣金￥{{brokerage}}</div>
                        <div class="dis">朋友通过你分享的页面成功购买后，你可获得对应的佣金。佣金可“个人中心-分销员中心”里查看</div>
                        <div class="distributionBut">
                            <div class="flex-item" @click="weChat">
                                <img src="../../assets/d-1.png">
                                <div class="name">微信</div>
                            </div>
                            <!--<div class="flex-item" v-clipboard:copy="invitationCode"-->
                            <!--v-clipboard:success="copy"-->
                            <!--v-clipboard:error="onError">-->
                            <!--<img src="../../assets/d-2.png" >-->
                            <!--<div class="name">复制链接</div>-->
                            <!--</div>-->
                            <div class="flex-item" @click="weCharCode">
                                <img src="../../assets/d-3.png">
                                <div class="name">二维码</div>
                            </div>
                            <div class="flex-item" @click="imgTextColde">
                                <img src="../../assets/d-4.png">
                                <div class="name">图文二维码</div>
                            </div>
                        </div>
                        <div class="distributionCenter">
                            我的分销员中心
                        </div>

                    </div>
                </div>
            </transition>
        </div>
        <!--分享浮层-->
        <!--<div class="distributionShareBg" v-if="shareShow" @click="distributionShare">-->
        <!--<img src="../../assets/arrows.png" class="shareArrows">-->
        <!--<p class="shareTitle">立即分享给好友吧</p>-->
        <!--<p class="shareDis">点击屏幕右上角将本页面分享给好友</p>-->
        <!--</div>-->
        <!--二维码浮层-->
        <div class="distributionCodeBg" v-if="codeShow" @click="distributionCode">
            <div class="distributionCodeBox">
                <div class="distributionCodeBor"></div>
                <img :src="codePic" class="codeImg" @click.stop>
                <div class="distributionCodeFont">长按图片保存至相册</div>
                <img class="distributionCodeClose" src="../../assets/close.png" @click="distributionCodeClose"/>
            </div>
        </div>
        <!--图文二维码-->
        <div class="ImgTextCodeOne" v-show="imgTextShow" @click="ImgTextCodeFun">
            <canvas id="canvas" ref="canvas" v-show="canvasShow"></canvas>
            <div class="imgTextBox">
                <img :src="imgTextSrc" @click.stop>
                <img src="../../assets/close.png" class="ImgTextCodeClose" @click="ImgTextCodeCloseFun">
            </div>
        </div>
    </div>
</template>

<script>
    import {publicRequestPost} from '../../components/requerst/request'
    import wx from "weixin-js-sdk";
    export default {
        data() {
            return {
                site: "",
                shareShow: false,
                invitationCode: "",
                codeShow: false,
                canvas: "",
                imgBg: new Image(),
                imgPic: new Image(),
                imgPic1: new Image(),
                context: {},
                bg1: require("../../assets/canvasBg.png"),
                bg2: require("../../assets/canvasBgTwo.png"),
                imgCodeOne: "",
                imgTextSrc: "",
                imgTextShow: false,
                canvasShow: false,
                codePic: "",
                secene: "",
                brokerage:"",
                rebateShow: true,
                sharTitle:"",
                sceneCode:"",
                shareImg:"",
                data1: {
                    name: this.distributionData.name,
                    textColor: "#505050",
                    x: 20,
                    y: 330,
                    fontSize: "15px 黑体"
                },
                data2: {
                    name: "￥" + this.distributionData.price,
                    textColor: "#E73638",
                    x: 20,
                    y: 380,
                    fontSize: "bold 18px 黑体"
                }
            }
        },
        created() {
            this.getCode()
            if (this.distributionData.typePage == 1) {
                this.rebateShow = true
            } else if (this.distributionData.typePage == 2) {
                this.rebateShow = false
            }

        },
        props: {
            distributionData: {
                type: Object,
                required: true
            }
        },
        methods: {
            //获取二维码
            //获取json
            getCode() {
                let url = "/shop/distri/spread/getQrcode"
                this.site = window.location.href
                let parameter = {
                    type: 1,
                    merchant_uuid: this.$store.state.token.scene,
                    ukey: this.$store.state.token.ukey,
                    branch_addr: this.site,
                    goods_id: this.distributionData.goodsId
                }
                publicRequestPost(url, parameter, this.backCode)
            },
            backCode(callBack) {
                var self = this
                var urlSite = "http://hfshopimage.activityhh.com"
                let backData = callBack.data.data
                let backUrl = backData.qrcodeInfo
                this.codePic = urlSite + backUrl
                this.sceneCode = backData.scene
                if (self.distributionData.typePage == 1) {
                    self.sharTitle="汇峰商城"
                    self.shareImg="http://hfshopimage.mtadservice.com/ad/20190428/1556431953669030.jpeg"
                    self.initDraw(300, 420);
                    self.canvasBgOne(this.bg1, 300, 420);
                    self.canvasDrawImg(this.imgPic, this.codePic, 60, 135, 180, 180)
                } else if (self.distributionData.typePage == 2) {
                    self.sharTitle = this.distributionData.name
                    self.shareImg = self.distributionData.mainImg
                    this.brokerage =backData.brokerage
                    self.initDraw(300, 533);
                    self.canvasBgOne(this.bg2, 300, 533, this.drawText);
                    self.canvasDrawImg(this.imgPic1, this.distributionData.mainImg, 50, 70, 200, 200)
                    self.canvasDrawImg(this.imgPic, this.codePic, 200, 380, 80, 80)
                }
                this.shareFun()

            },
            distributionBgClick(ev) {
                ev.preventDefault = true;//阻止默认事件（原生方法）
                ev.stop;//阻止冒泡（原声方法）
                this.distributionData.showBg = false
            },
            weChat() {
                this.distributionData.showBg = false
                this.shareShow = true
            },
            distributionShare() {
                this.shareShow = false
            },
            //复制链接地址开始
            copy(e) {
                console.log(e.text);
            },
            onError(e) {
                console.log(e);
            },
            distributionCode() {
                this.codeShow = false
            },
            weCharCode() {
                this.codeShow = true
                this.distributionData.showBg = false
            },
            distributionCodeClose() {
                this.codeShow = false
            },
            //canvas 开始
            //初始化
            initDraw(w, h) {
                this.canvas = this.$refs.canvas
                this.canvas.setAttribute("width", w)
                this.canvas.setAttribute("height", h)
                this.context = this.canvas.getContext('2d')
            },
            // 画背景图
            canvasBgOne(img, w, h, callBack) {
                this.imgBg.src = img
                this.imgBg.onload = () => {
                    this.context.drawImage(this.imgBg, 0, 0, w, h)
                    if (callBack) {
                        callBack()
                    }
                }
            },
            //画二维码
            canvasDrawImg(imgObj, imgSrc, x, y, w, h) {
                imgObj.crossOrigin = 'anonymous';
                imgObj.src = imgSrc
                imgObj.onload = () => {
                    this.context.drawImage(imgObj, x, y, w, h)
                }
            },
            canvasText(data) {
                this.context.fillStyle = data.textColor;
                this.context.font = data.fontSize
                this.context.fillText(data.name, data.x, data.y);
            },

            getBase64() {
                this.imgTextSrc = this.canvas.toDataURL("image/jpeg");
            },
            imgTextColde() {
                this.imgTextShow = true
                this.distributionData.showBg = false
                this.getBase64()
            },
            ImgTextCodeCloseFun() {
                this.imgTextShow = false
            },
            ImgTextCodeFun() {
                this.imgTextShow = false
            },
            drawText() {
                this.canvasText(this.data1)
                this.canvasText(this.data2)
            },
            shareFun(){
                let postData = {
                    title: this.sharTitle,
                    image: this.shareImg,
                    sceneCode:this.sceneCode
                };
                console.log(this.sharTitle)
                console.log(this.shareImg)
                console.log(this.sceneCode)
                wx.miniProgram.postMessage({ data: JSON.stringify(postData) })
            }


        }

    }
</script>

<style lang="stylus" scoped>
    .distributionBg
        position absolute
        width: 100%
        height: 100%
        background-color: rgba(73, 73, 73, 0.9)
        z-index 200
        .distributionFBox
            width: 100%
            height 500px
            background-color: #fff
            position: absolute
            bottom 100px
            z-index 300
        .distributionCenter
            width 600px;
            height 300px;
            margin 0 auto
            & .title
                font-size: 28px;
                text-align center
                color: #333333
                line-height 28px
                margin-top 50px
            & .dis
                font-size: 23px;
                text-align center
                color: #ADADAD
                line-height 35px
                margin-top 30px;
            & .close
                position absolute
                top: 5px;
                right 15px
                z-index 900
            .distributionBut
                display flex
                flex-direction row
                flex-wrap wrap
                margin 0 auto
                margin-top 20px
            .flex-item
                flex 1
                text-align center
                width 120px
                margin 15px
                & img
                    width 88px
                    height 88px
                & .name
                    text-align center
                    font-size 23px
                    color: #A1A1A1
                    margin-top 5px
            .distributionCenter
                color: #333333
                text-align center
                font-size: 30px;
                line-height: 60px
                width: 600px
                height 60px
                border 1px solid #EBEDF0
                margin-top 35px

    .distributionShareBg
        position absolute
        width: 100%
        height: 100%
        background-color: rgba(14, 14, 14, 0.9)
        z-index 500

    .shareArrows
        width 134px
        position absolute
        top 20px
        right 50px

    .shareTitle
        width 300px
        position absolute
        text-align center
        top 280px
        left 50%
        margin-left -150px
        font-size 35px
        color #fff
        font-weight 500

    .shareDis
        width 400px
        position absolute
        text-align center
        top 340px
        left 50%
        margin-left -200px
        font-size 25px
        color #fff

    .distributionCodeBg
        position absolute
        width: 100%
        height: 100%
        background-color: rgba(73, 73, 73, 0.9)
        z-index 200
        .distributionCodeBox
            position relative
            text-align center
            width 400px
            height 500px
            left 50%
            top: 50%
            margin-left -200px
            margin-top -250px
            .distributionCodeBor
                position absolute
                width 400px
                height 400px
                top 0
                left 0
                background-color: #fff
                border-radius 2%
        .codeImg
            position absolute
            width 300px
            height 300px
            top 50px
            left 50px
        .distributionCodeFont
            width 100%
            position absolute
            text-align center
            bottom 35px
            font-size 25px
            color #fff
        .distributionCodeClose
            position absolute
            right 0
            top 0

    .ImgTextCodeOne
        position absolute
        width: 100%
        height: 100%
        background-color: rgba(14, 14, 14, 0.9)
        z-index 500

    .imgTextBox
        position relative
        text-align center
        margin 0 auto
        margin-top 200px
        .ImgTextCodeClose
            position absolute
            top: 0
            right 105px

    #canvas
        display block
        margin 0 auto
        margin-top 200px


</style>