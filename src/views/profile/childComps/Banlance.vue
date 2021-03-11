<template>
  <div class="banlance">
    <div class="surplus">
      <div class="marginTop"><strong>0.00</strong>元</div>
      <div>我的余额</div>
    </div>
    <div class="discount">
      <div class="marginTop"><strong>0</strong>个</div>
      <div>我的优惠</div>
    </div>
    <div class="integral">
      <div class="marginTop"><strong>0</strong>分</div>
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banlance",
};
</script>

<style scoped>
.banlance {
  display: flex;
  background-color: #fff;
  width: 100%;
  height: 100px;
  border-bottom: 15px solid rgba(245, 245, 245);
  text-align: center;
  font-size: 16px;
}
.banlance div {
  flex: 1;
}
.surplus {
  border-right: 4px solid rgba(245, 245, 245);
}
.discount {
  border-right: 4px solid rgba(245, 245, 245);
}
.integral {
  border-right: 4px solid rgba(245, 245, 245);
}
.banlance .marginTop {
  margin-top: 22px;
  margin-bottom: 5px;
}
.banlance .marginTop strong {
  font-size: 22px;
  color: darkorange;
}
</style>