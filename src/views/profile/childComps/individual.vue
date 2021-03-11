<template>
  <div class="individual">
    <div class="headImg">
      <img src="~assets/img/profile/vijay.jpg" alt="" />
    </div>
    <div class="info">
      <div class="login"><a href="javascript:;">登录/注册</a></div>
      <div class="bindPhone">
        <a><span class="icon-mogu-phone"></span>暂无绑定手机</a>
      </div>
    </div>
    <div class="detail"><a href="javascript:;">&gt;</a></div>
  </div>
</template>

<script>
import "assets/icon/font_2413986_74ljy1qhwj7/iconfont.css";
export default {
  name: "Individual",
};
</script>

<style scoped>
.individual {
  display: flex;
  margin-top: 44px;
  height: 90px;
  width: 100%;
  color: rgb(240, 240, 240, 1);
  background-color: var(--color-tint);
}
.individual .headImg {
  width: 25%;
  /* background-color: red; */
  text-align: center;
}
.individual .headImg img {
  width: 50px;
  height: 50px;
  margin-top: 20px; /* 父盒子高度的一半 - 图片高度的一半 */
  border-radius: 25px;
}
.individual .info {
  width: 65%;
  /* background-color: green; */
}
.individual .info div {
  width: 50%;
  height: 20px;
}
.individual .info div a {
  color: #fff;
}

.individual .info .login {
  margin-top: 30px;
  font-size: 16px;
}
.individual .info .bindPhone {
  font-size: 14px;
}
.individual .detail {
  width: 10%;
  line-height: 90px;
  text-align: center;
  font-size: 24px;
  /* background-color: blue; */
}
.individual .detail a {
  color: #fff;
}
</style>