<template>
  <div id="Sort">
    <!-- 导航栏 -->
    <nav-bar class="navBar">
      <div slot="center" class="navBarContent">商品分类</div>
    </nav-bar>
    <!-- 左侧分类 -->
    <scroll class="content" ref="scroll">
      <sort-left-bar
        :category="category"
        class="sort-left-bar"
        :leftClick="leftItem(index)"
      />
    </scroll>
    <goods-list :goods="showGoods" />
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar";
import { getCategoryDatas } from "network/sort.js";
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
      goods: {},
    };
  },
  methods: {
    leftItem(index) {},
  },
  created() {
    getCategoryDatas().then((res) => {
      console.log(res);
      for (let key of res.data.category.list) {
        // this.category.push(res.data.list.title)
        this.category.push(key.title);
      }
      // console.log(this.category);
    });
  },
};
</script>

<style scoped>
#Sort {
  height: 100vh;
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

.content {
  height: calc(100% - 44px - 49px);
  /* overflow: hidden; */
}
.sort-left-bar {
  position: absolute;
  top: 44px;
}
</style>