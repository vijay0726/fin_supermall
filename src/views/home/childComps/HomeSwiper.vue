<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.link">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isLoad: true,
    };
  },
  components: {
    SwiperItem,
    Swiper,
  },
  methods: {
    imageLoad() {
      //限流阀
      if (this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = !this.isLoad;
        console.log("000000");
      }
    },
  },
};
</script>
<style scoped>
</style>