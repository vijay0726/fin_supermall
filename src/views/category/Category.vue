<template>
  <div class="cart">
    <nav-bar class="navBar"
      ><div slot="center">购物车({{ cartLength }})</div></nav-bar
    >
    <cart-list></cart-list>
  </div>
</template>
<script>
import NavBar from "../../components/common/navbar/NavBar.vue";

// import { mapGetters } from "vuex";
import CartList from "./childComps/cartList.vue";

export default {
  name: "Category",
  components: { NavBar, CartList },
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