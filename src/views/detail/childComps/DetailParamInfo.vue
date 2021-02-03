<template>
  <div class="param-info" v-if="Object.keys(paramsInfo).length !== 0">
    <table
      v-for="(table, index) in paramsInfo.sizes"
      :key="index"
      class="info-size"
    >
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramsInfo.infos" :key="index">
        <td class="info-param-key">{{ info.key }}</td>
        <td class="param-value">{{ info.value }}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramsInfo.image.length !== 0">
      <img :src="paramsInfo.image" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramsInfo: {
      type: Object,
    },
  },
};
</script>
<style scoped>
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.param-info table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}
.param-info table tr {
  border-bottom: 1px solid rgba(245, 245, 245);
}
.param-info table tr td {
  padding: 7px;
}
/* .param-info table tr td:nth-child(1) {
  width: 30%;
} */
.info-size tr td:nth-child(1) {
  width: 20%;
}

.info-param tr td:nth-child(1) {
  width: 30%;
}
.info-param tr td:nth-child(2) {
  color: #eb4868;
}
.info-img img {
  width: 100%;
}
</style>