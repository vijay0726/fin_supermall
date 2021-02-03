<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div class="info-detail">
      <p>{{ commentInfo.content }}</p>
      <div class="info-other">
        <span class="date">{{ commentInfo.created | showDate }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
      <div class="info-imgs">
        <img
          :src="item"
          v-for="(item, index) in commentInfo.images"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { formatDate } from "common/utils.js";
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showDate(value) {
      //1.将时间戳转化为Date对象
      const date = new Date(value * 1000);

      //2.将date进行格式化
      return formatDate(date, "yyyy-MM-dd");
    },
  },
};
</script>
<style scoped>
.comment-info {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}
.info-header {
  position: relative;
  height: 30px;
}
.info-header .header-title {
  position: absolute;
  left: 0px;
}
.info-header .header-more {
  position: absolute;
  right: 0px;
}
.info-user {
  position: relative;
  height: 40px;
}
.info-user img {
  width: 40px;
  height: 40px;
}
.info-user span {
  position: absolute;
  margin: 0 5px;
  top: 12px;
}
.info-imgs img {
  width: 85px;
  height: 85px;
}
</style>