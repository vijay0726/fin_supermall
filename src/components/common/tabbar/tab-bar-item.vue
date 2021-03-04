<template>
  <div class="tab-bar-item" @click="itemClick">
    <div><slot name="item-icon"></slot></div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "hotpink",
    },
  },
  //   data() {
  //     return {};
  //   },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  /* line-height: 49px; */
}
.tab-bar-item img {
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
  width: 26px;
  height: 26px;
}
/* .active {
  color: pink;
} */
</style>