<template>
  <div id="tab-bar"><slot></slot></div>
</template>

<script>
export default {
  name: "tab-bar",
  components: {},
};
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #f2f2f2;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>