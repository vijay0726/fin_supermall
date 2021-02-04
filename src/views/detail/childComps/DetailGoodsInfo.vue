<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clearfix">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">
      {{ detailInfo.detailImage[0].key }}
    </div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
        alt=""
        @load="imgLoad"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
    },
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0,
    };
  },
  methods: {
    imgLoad() {
      if (++this.counter === this.imagesLength) {
        this.$emit("imageLoad");
      }
    },
  },
  watch: {
    detailInfo() {
      this.imagesLength = this.detailInfo.detailImage[0].list.length;
    },
  },
};
</script>
<style scoped>
.goods-info {
  font-size: 12px;
  border-bottom: 5px solid #f2f5f8;
  margin-bottom: 30px;
}
.start {
  width: 6px;
  height: 6px;
  background-color: #000;
  border: 1px solid grey;
}
.end {
  float: right;
  width: 6px;
  height: 6px;
  background-color: #000;
  border: 1px solid grey;
}
.clearfix {
  clear: both;
}
.info-desc .start,
.end {
  margin: 10px;
}
.info-desc .desc {
  padding: 6px 10px;
  line-height: 1.5;
}
.info-key {
  padding: 6px 10px;
  font-size: 14px;
  font-weight: 500;
  color: #000;
}
.info-list img {
  width: 100%;
}
</style>