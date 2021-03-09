<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      class="tabControl"
      v-show="isDisplay"
      ref="tabControl"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      @swiperImageLoad="swiperImageLoad"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
      ><!-- probeType需要v-bind绑定，否则传入的值始终是字符串类型 -->
      <home-swiper
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view />
      <tab-control
        :class="{ fixed: isFixed }"
        ref="tabControl"
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

import { debounce } from "common/utils";
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
      tabOffsetTop: 0,
      isFixed: false,
      isDisplay: false,
      saveY: 0,
      itemImgListener: null,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  destroyed() {
    console.log("home destroyed");
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    //1.保存y值
    this.saveY = this.$refs.scroll.getScrollY();
    //2.取消全局事件的监听
    this.$bus.$off("itemImgLoad", this.itemImgListener);
  },
  created() {
    //1.请求多个数据
    //组织代码，进行一次封装
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    // this.$bus.$on("itemImgLoad", () => {
    //   this.$refs.scroll.refresh();
    //   // console.log("---------");
    // });可能会出现itemImgLoad来得比$refs.scroll挂载的早这种情况，因此在mounted中调用更合适
  },
  mounted() {
    let refresh = debounce(this.$refs.scroll.refresh, 200);
    //对监听的事件进行保存
    this.itemImgListener = () => {
      //切换页面回来后，有refresh未定义的Bug
      refresh();
    };
    this.$bus.$on("itemImgLoad", this.itemImgListener);
  },
  methods: {
    tabClick(index) {
      //console.log(index);
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
      this.isDisplay = -position.y > this.tabOffsetTop;
      // if (position.y < -1000) this.isShowBackUp = true;
      // else this.isShowBackUp = false;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      // console.log("asdadaf");
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
      console.log(this.tabOffsetTop);
      console.log(this.$refs.tabControl.$el.offsetTop);
    },
    backClick() {
      // console.log(1);
      this.$refs.scroll.scrollTo(0, 0); //scrollTo(x,y,time,easing,extraTransform,isSilent)第三个参数为返回速度
    },
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log(res);
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
        this.$refs.scroll.finishPullUp();
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
  /* 在我们导航原生滚动时，为实现导航不跟随滚动而设置的定位,
  由于后来使用了开源框架Better-scroll优化滚动性能，已设置了滚动区域，
  因此这里的定位设置可以删去 */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;

  background-color: var(--color-tint);
  color: #fff;
}
.fixed,
.tabControl {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
  z-index: 9;
}
</style>