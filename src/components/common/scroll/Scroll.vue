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
    pullUpLoad: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    //不要通过document.querySelector('.wrapper')获取元素，不准确
    //可以使用this.$refs.wrapper
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    //1.监听滚动位置
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
      // console.log(position);
    });
    //2.监听上拉事件
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
      // console.log("sdsa");
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      // this.scroll.scrollTo(x, y, time);
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp(); // 可能有版本问题, read property 'threshod' of undefined
      this.scroll.refresh();
      // console.log(2);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>
<style scoped>
</style>