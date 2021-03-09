<template>
  <div class="sortLeftBar">
    <ul>
      <li
        v-for="(item, index) in category"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="itemClick(index)"
      >
        <a href="#javascript:;">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SortLeftBar",
  props: {
    category: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      // if (index == this.currentIndex) {
      //   this.currentIndex = index;
      //   this.isActive = false;
      // }
      this.currentIndex = index;
      // this.emit("leftClick", index);
    },
  },
};
</script>

<style scoped>
.sortLeftBar {
  width: 80px;
  border: 1px solid pink;
  background-color: rgba(242, 242, 242);
}
.sortLeftBar ul {
  text-align: center;
}
.sortLeftBar ul li {
  height: 40px;
  line-height: 40px;
  padding: 10px auto;
}
.active {
  background-color: #fff;
}
.active a {
  color: hotpink;
}
</style>
