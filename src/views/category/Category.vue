<template>
  <div class="cart">
    <!-- 导航栏 -->
    <nav-bar class="navBar"
      ><div slot="center">购物车({{ cartLength }})</div></nav-bar
    >
    <!-- 购物列表 -->
    <cart-list></cart-list>
    <!-- 底部汇总 -->
    <cart-bottom-bar />
  </div>
</template>
<script>
import NavBar from "../../components/common/navbar/NavBar.vue";

// import { mapGetters } from "vuex";
import CartList from "@/views/category/childComps/CartList";
import CartBottomBar from "@/views/category/childComps/cartBottomBar/CartBottomBar";
export default {
  name: "Category",
  components: { NavBar, CartList, CartBottomBar },
  computed: {
    cartLength() {
      return this.$store.getters.cartLength;
    },
    //两种语法
    /* 1.
    ...mapGetters(['cartLength','cartList']) 数组中一一对应
       2.
    ...mapGetters({
      length:'cartLength',
      list:'cartList'
    })   
     */
  },
};
</script>
<style scoped>
.cart {
  height: 100vh;
}
.navBar {
  background-color: var(--color-tint);
  color: #fff;
  /* font-weight: 700; */
}
</style>