<template>
  <div id="detailNavBar">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="title-item"
          :class="{ active: index === currentIndex }"
          @click="itemClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "推荐", "评论", "参数"],
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      //有时会保存记录，有时又不保存？？
      //   this.$router.go(-1);
      this.$router.back();
    },
  },
};
</script>
<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back img {
  margin-top: 10px;
}
</style>