<template>
  <div class="myCart">
    <div class="cart">
      <a href="javascript:;">
        <span class="iconT icon-mogu-gouwucheman"></span>
        <span class="text">我的购物车</span>
      </a>
    </div>
    <div class="plusMall">
      <a href="javascript:;">
        <span class="iconT icon-mogu-icon--"></span>
        <span class="text">下载购物APP</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCart",
};
</script>

<style scoped>
.myCart {
  width: 100%;
}
.myCart div {
  padding: 10px 5px;
}
.myCart div span {
  display: inline-block;
}
.myCart div .text {
  display: inline-block;
  width: 90%;
  color: rgba(20, 20, 20, 1);
  margin-left: 8px;
  padding-bottom: 10px;
  border-bottom: 3px solid rgba(245, 245, 245, 1);
}
.myCart div .iconT {
  font-size: 18px;
  color: #e8989a;
}
</style>