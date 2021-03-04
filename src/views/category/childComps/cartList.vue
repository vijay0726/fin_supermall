<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :product="item"
      />
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import { mapGetters } from "vuex";
import CartListItem from "./CartListItem.vue";

export default {
  components: { CartListItem, Scroll },
  name: "CartList",
  computed: {
    ...mapGetters(["cartList"]),
  },
  data() {
    return {
      flag: true,
    };
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>
<style scoped>
.cart-list {
  height: calc(100% - 44px - 49px - 40px);
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>