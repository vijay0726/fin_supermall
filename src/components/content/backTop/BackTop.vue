<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  methods: {},
};
</script>
<style scoped>
.back-top {
  position: fixed;
  z-index: 9;
  bottom: 60px;
  right: 5px;
}
.back-top img {
  width: 43px;
  height: 43px;
}
</style>