<template>
  <div class="cart">
    <nav-bar class="navBar"
      ><div slot="center">购物车({{ cartLength }})</div></nav-bar
    >
  </div>
</template>
<script>
import BScroll from "better-scroll";
import NavBar from "../../components/common/navbar/NavBar.vue";

export default {
  name: "Category",
  components: { NavBar },
  computed: {
    cartLength() {
      // return this.$store.state.cartList.length;
      return this.$store.getters.cartLength;
    },
  },
};
</script>
<style scoped>
.navBar {
  background-color: var(--color-tint);
  color: #fff;
  /* font-weight: 700; */
}
</style>