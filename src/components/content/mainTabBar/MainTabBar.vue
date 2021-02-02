<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/sort">
      <img slot="item-icon" src="~assets/img/tabbar/sort.svg" alt="" />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="" />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="" />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBarItem from "../../common/tabbar/tab-bar-item";
import TabBar from "../../common/tabbar/TabBar";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
  data() {
    return {};
    // return {
    //   activeColor: {
    //     type: String,
    //     default: "pink",
    //   },
    // };
  },
};
</script>
 
<style scoped>
</style>