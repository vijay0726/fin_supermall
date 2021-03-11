<template>
  <div class="VipArea">
    <div class="myMes">
      <a href="javascript:;">
        <span class="iconT icon-mogu-wodexiaoxi"></span>
        <span class="text">我的消息</span>
      </a>
    </div>
    <div class="plusMall">
      <a href="javascript:;">
        <span class="iconT icon-mogu-jifenshangcheng"></span>
        <span class="text">积分商城</span>
      </a>
    </div>
    <div class="vipCard">
      <a href="javascript:;">
        <span class="iconT icon-mogu-huangguan"></span>
        <span class="text">会员卡</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "VipArea",
};
</script>

<style scoped>
.VipArea {
  width: 100%;
  height: 160px;
  border-bottom: 15px solid rgba(245, 245, 245);
}
.VipArea div {
  padding: 10px 5px;
}
.VipArea div span {
  display: inline-block;
}
.VipArea div .text {
  display: inline-block;
  width: 90%;
  color: rgba(20, 20, 20, 1);
  margin-left: 8px;
  padding-bottom: 10px;
  border-bottom: 3px solid rgba(245, 245, 245, 1);
}
.VipArea div .iconT {
  font-size: 18px;
  color: #e8989a;
}
.VipArea .vipCard {
  margin-bottom: 15px;
}
</style>