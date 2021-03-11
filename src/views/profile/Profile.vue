<template>
  <div id="Profile">
    <profile-nav-bar />
    <individual />
    <banlance />
    <vip-area />
    <my-cart />
  </div>
</template>
<script>
import ProfileNavBar from "./childComps/ProfileNavBar.vue";
import individual from "./childComps/individual.vue";
import Banlance from "./childComps/Banlance.vue";
import VipArea from "./childComps/VipArea.vue";
import MyCart from "./childComps/MyCart.vue";

export default {
  components: { ProfileNavBar, individual, Banlance, VipArea, MyCart },
  name: "Profile",
};
</script>

<style scoped>
#Profile {
  height: 100vh;
  width: 100%;
}
</style>