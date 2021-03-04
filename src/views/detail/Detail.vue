<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav" />
    <scroll class="content" ref="scroll" @scroll="contentScroll">
      <!-- <ul>
        <li v-for="item in $store.state.cartList">{{ item }}</li>
      </ul> -->
      <detail-swiper :top-images="topImages"> </detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detailInfo="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-param-info
        :paramsInfo="paramsInfo"
        ref="params"
      ></detail-param-info>
      <detail-comment-info
        :commentInfo="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackUp" />
    <toast :message="message" :show="show"></toast>
  </div>
</template>

<script>
import { debounce } from "common/utils.js";
import Scroll from "../../components/common/scroll/Scroll.vue";
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import {
  getDetails,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail.js";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";
import BackTop from "../../components/content/backTop/BackTop.vue";

import Toast from "@/components/common/toast/Toast";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    Scroll,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop,
    Toast,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommends: [],
      itemImgListener: null,
      themeTopYs: [],
      getThemeY: null,
      currentIndex: 0,
      isShowBackUp: false,
      message: "",
      show: false,
    };
  },
  created() {
    //1.保存传入的iid
    this.iid = this.$route.params.iid;
    //2.根据iid请求详情数据
    getDetails(this.iid).then((res) => {
      // console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      //1.创建商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //2.创建店铺信息
      this.shop = new Shop(data.shopInfo);
      //3.获取商品展示信息
      this.detailInfo = data.detailInfo;
      //4.取出参数的信息
      this.paramsInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //5.取出评论的信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    //3.请求推荐数据
    getRecommend().then((res) => {
      // console.log(res);
      this.recommends = res.data.list;
    });
    //4.给getThemeY赋值(对给this.getThemeY赋值的操作进行防抖)
    this.getThemeY = debounce(() => {
      //获取标题对应各组件offset值
      //根据最新的数据，对应的DOM是已经被渲染出来了
      //但是图片依然是没有加载完的，目前获取到的offsetTop是不包含图片的
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
      console.log(this.themeTopYs);
    });
  },
  mounted() {
    let refresh = debounce(this.$refs.scroll.refresh, 200);
    //监听全局事件
    this.itemImgListener = () => {
      refresh();
    };
    this.$bus.$on("itemImgLoad", this.itemImgListener);
  },
  destroyed() {
    this.$bus.$off("itemImgLoad", this.itemImgListener);
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getThemeY();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 0);
      // console.log(index);
    },
    contentScroll(position) {
      //1.获取y值
      const positionY = -position.y;
      //2.positionY和主题中值进行对比
      //[0,7938,9120,9452]

      //positionY 在各个区间对应的主题
      let length = this.themeTopYs.length;
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      //返回顶部监听
      if (positionY > 1500) this.isShowBackUp = true;
      else this.isShowBackUp = false;
    },
    backClick() {
      // console.log(1);
      this.$refs.scroll.scrollTo(0, 0); //scrollTo(x,y,time,easing,extraTransform,isSilent)第三个参数为返回速度
    },
    addToCart() {
      //获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.detailInfo.desc;
      product.price = this.goods.newPrice;
      product.iid = this.iid;
      //2.将商品添加到购物车里
      //this.$store.cartList.push(product)
      this.$store.dispatch("addCart", product).then((res) => {
        this.show = true;
        this.message = res;

        setTimeout(() => {
          this.show = false;
          this.message = "";
        }, 1500);
      });
    },
  },
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 90;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px);
}
.detail-nav {
  position: relative;
  background-color: #fff;
  z-index: 9;
}
</style>