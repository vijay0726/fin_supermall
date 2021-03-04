<template>
  <div class="bottom-bar">
    <div class="left">
      <div class="check-button">
        <check-button @click.native="checkClick" :isChecked="isAllChecked" />
        <div>全选</div>
      </div>
      <div class="total-price">合计：{{ totalPrice }}</div>
    </div>
    <div class="right">去计算（{{ sumCount }}）</div>
  </div>
</template>

<script>
import CheckButton from "../../../../components/content/checkButton/CheckButton.vue";
import { mapGetters } from "vuex";
export default {
  components: { CheckButton },
  name: "CartBottomBar",
  methods: {
    checkClick() {
      if (this.isAllChecked) {
        this.cartList.forEach((item) => (item.checked = false));
      } else {
        this.cartList.forEach((item) => (item.checked = true));
      }
      this.$emit("allCheckClick");
      //   this.isAllChecked = this.flag;
    },
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return item.price.substring(1) * item.count + preValue;
          }, 0)
          .toFixed(2)
      );
    },
    sumCount() {
      return this.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return item.count + preValue;
        }, 0);
    },
    isAllChecked() {
      //1.filter遍历效率较低
      //   return !this.cartList.filter((item) => !item.checked).length;
      //2.find实时停止遍历，性能较好
      if (this.cartList.length == 0) return false;
      return !this.cartList.find((item) => !item.checked);
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  position: relative;
  /* bottom: 56px; */ /* PC和移动端浏览器显示效果不一 */
  /* justify-content: flex-start; */
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  background-color: red;
}
.bottom-bar .left {
  display: flex;
  background-color: rgba(245, 245, 245);
  width: 70%;
  padding: 1px 5px;
}
.bottom-bar .left .check-button {
  display: flex;
  line-height: 30px;
  margin: 4px 8px;
}
.bottom-bar .left .check-button .check-button {
  width: 20px;
  height: 20px;
}
.bottom-bar .left .total-price {
  margin-left: 20px;
}
.bottom-bar .right {
  width: 30%;
  color: #fff;
  text-align: center;
}
.checked {
  background-color: red;
}
</style>