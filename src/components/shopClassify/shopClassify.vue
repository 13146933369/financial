<template>
    <div class="shopClassify">
        <template v-for="item in classifyData">
            <div class="pic-item">
                <router-link :to="{name:'classifyDefault',query:{id:item.id}}">
                    <img :src="item.c_ico">
                    <div class="classifyFont picClass">{{item.name}}</div>
                </router-link>
            </div>
        </template>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        props: ["classifyData"],

        methods:{

        }

    };
</script>

<style lang="stylus" scoped>
    .shopClassify
        width: 100%
        height: 342px
        display: flex
        flex-wrap: wrap
        align-content: flex-start
        margin: 0 auto
    .pic-item
        width: 84px
        height: 128px;
        flex: 0 0 20%;
        text-align: center
        margin-top: 40px

    .pic-item .picClass
        margin-top: 15px
        font-weight bold
    .pic-item img
        width: 84px
        height: 84px
    .picClass
        text-align: center
</style>