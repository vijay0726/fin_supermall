<template>
  <div v-if="Object.keys(goods).length !== 0" class="detail-base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
/* .detail-base-info{
    
} */
.info-title {
  color: #222;
  margin: 10px 5px 8px;
}
.info-price {
  margin: 8px 5px;
}
.info-price .n-price {
  font-size: 20px;
  color: hotpink;
}
.info-price .o-price {
  font-size: 10px;
  padding: 0px 5px;
  text-decoration: line-through;
}
.info-price .discount {
  display: inline-block;
  /* height: 18px; */
  padding: 2px;
  margin-bottom: 10px;
  font-size: 16px;
  color: azure;
  background-color: deeppink;
  border-radius: 5px;
}
.info-other {
  display: flex;
  justify-content: space-between;
  margin: 10px 5px;
  padding-bottom: 5px;
  font-size: 10px;
  color: darkgray;
  border-bottom: 1px solid rgba(245, 245, 245);
}
/* .info-other span {
  flex: 1;
} */
.info-service {
  display: flex;
  justify-content: space-between;
  margin: 10px 5px;
  padding: 10px;
  font-size: 12px;
  color: #333;
  border-bottom: 3px solid rgba(245, 245, 245);
}
.info-service span img {
  padding-top: 2px;
  width: 12px;
  height: 12px;
}
</style>