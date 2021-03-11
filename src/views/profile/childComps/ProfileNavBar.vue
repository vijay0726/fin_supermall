<template>
  <div class="profileNavBar">
    <nav-bar>
      <div slot="center">我的档案</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  name: "ProfileNavBar",
  components: { NavBar },
};
</script>

<style scoped>
.profileNavBar {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>