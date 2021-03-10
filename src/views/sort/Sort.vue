<template>
  <div id="Sort">
    <!-- 导航栏 -->
    <nav-bar class="navBar">
      <div slot="center" class="navBarContent">商品分类</div>
    </nav-bar>
    <!-- 左侧分类 -->
    <scroll class="contentFirst" :probe-type="3">
      <sort-left-bar :category="category" class="sort-left-bar" />
    </scroll>
    <!-- 右侧商品 -->
    <scroll class="contentSecond" ref="scroll" :probe-type="3">
      <goods-list :goods="showGoods" class="goodsList" />
    </scroll>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar";
import { getCategoryDatas, getCategoryGoods } from "network/sort.js";
import SortLeftBar from "./childComps/SortLeftBar.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import GoodsList from "@/components/content/goods/GoodsList";
export default {
  name: "Sort",
  components: {
    NavBar,
    SortLeftBar,
    Scroll,
    GoodsList,
  },
  data() {
    return {
      category: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    getCategoryDatas() {
      getCategoryDatas().then((res) => {
        // console.log(res);
        for (let key of res.data.category.list) {
          // this.category.push(res.data.list.title)
          this.category.push(key.title);
        }
        // console.log(this.category);
      });
    },
    getCategoryGoods(type) {
      const page = this.goods[type].page + 1;
      getCategoryGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        console.log(res);
      });
      // console.log(this.goods);
    },
    // shiyan() {
    //   let height = document.documentElement.clientHeight;
    //   let childH = this.$refs.leftBar.$el.offsetHeight;
    //   console.log("可视高度" + height);
    //   console.log("组件高" + childH);
    // },
    // leftItem(index) {},
  },
  created() {
    this.getCategoryDatas();
    this.getCategoryGoods("pop");
    this.getCategoryGoods("new");
    this.getCategoryGoods("sell");
  },
};
</script>

<style scoped>
#Sort {
  height: 100vh;
  width: 100%;
  position: relative;
}
.navBar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  background-color: var(--color-tint);
  color: #fff;
}

.contentFirst {
  height: calc(100% - 44px - 49px);
  width: 30%;
  overflow: hidden;
  position: absolute;
  top: 44px;
  /* bottom: 49px;
  left: 0;
  right: 0; */
}
.contentSecond {
  position: absolute;
  height: calc(100% - 44px - 49px);
  width: 70%;
  overflow: hidden;
  right: 0;
  top: 44px;
  /* position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0; */
}
/* .sort-left-bar {
  position: absolute;
  top: 44px;
} */
</style>