<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default() {
        return 1;
      },
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
  },
  mounted() {
    //不要通过document.querySelector('.wrapper')获取元素，不准确
    //可以使用this.$refs.wrapper
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: true,
      click: true,
    });

    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
  },
};
</script>
<style scoped>
</style>