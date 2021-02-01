<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="" />
      <span class="title">{{ shop.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item item-left">
        <div class="info-sells">
          <div class="sells-count">
            {{ shop.sells }}
          </div>
          <div class="sell-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{ shop.goodsCount }}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item item-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.shop-top {
  position: relative;
  margin: 8px 5px;
  font-size: 16px;
  width: 100%;
}
.shop-top img {
  width: 60px;
  height: 60px;
  border-radius: 30px;
}
.shop-top span {
  display: inline-block;
  position: absolute;
  margin: 22px 5px;
}
.shop-middle {
  font-size: 14px;
  color: #000;
}
.shop-middle-item {
  display: inline-block;
  text-align: center;
  width: 50%;
  height: 60px;
}
.item-left {
  position: relative;
  height: 60px;
  bottom: 10px;
  /* background-color: pink; */
  border-right: 2px solid rgba(245, 245, 245);
}

.item-left .info-sells {
  display: inline-block;
}
.item-left .info-sells div {
  margin: 5px 20px;
}
.item-left .info-goods {
  display: inline-block;
}
.item-left .info-goods div {
  margin: 5px 20px;
}

.item-right table {
  text-align: left;
  margin: auto;
}
.item-right table tr td {
  padding: 5px;
  /* background-color: pink; */
}
.score {
  color: darkseagreen;
}
.score-better {
  color: red;
}
.better {
  background-color: darkseagreen;
  color: #fff;
}
.better-more {
  color: #fff;
  background-color: red;
  padding: 0px;
}
.shop-bottom {
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 40px;
  width: 100%;
  height: 60px;
}
.shop-bottom .enter-shop {
  /* position: absolute; */
  width: 100px;
  height: 25px;
  color: grey;
  background-color: rgba(245, 245, 245);
  padding: 5px;
  border-radius: 5px;
}
</style>