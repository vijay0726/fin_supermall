<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll"
      ><!-- probeType需要v-bind绑定，否则传入的值始终是字符串类型 -->
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view />
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackUp"></back-top
    ><!-- .native修饰符用于监听原生组件 -->
  </div>
</template>

<script>
//childComps组件
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";
//common组件
import NavBar from "components/common/navbar/NavBar.vue";
import GoodsList from "components/content/goods/GoodsList";
import TabControl from "../../components/content/tabControl/TabControl.vue";
//network请求
import { getHomeMultidata, getHomeGoods } from "network/home";
import Scroll from "../../components/common/scroll/Scroll.vue";
import BackTop from "../../components/content/backTop/BackTop.vue";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackUp: false,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    //1.请求多个数据
    //组织代码，进行一次封装
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    contentScroll(position) {
      this.isShowBackUp = -position.y > 1000;
      // if (position.y < -1000) this.isShowBackUp = true;
      // else this.isShowBackUp = false;
    },
    backClick() {
      // console.log(1);
      this.$refs.scroll.scrollTo(0, 0); //scrollTo(x,y,time,easing,extraTransform,isSilent)第三个参数为返回速度
    },
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1; //不要写死
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // console.log(res);
      });
    },
  },
};
</script>


<style scoped>
/* .content {
  height: calc(100% - 93px);
  overflow: hidden;
  height: 500px; 
  position: absolute; 
  margin-top: 44px;
  top: 44px; 
  bottom: 49px;
  left: 0;
  right: 0;
} */
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
#home {
  position: relative;
  height: 100vh; /*100%视口高度viewport height*/
  padding-top: 44px;
}
.home-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;

  background-color: var(--color-tint);
  color: #fff;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>