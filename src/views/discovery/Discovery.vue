<template>
  <div class="discovery">
    <h1>Discovery</h1>
    <el-button @click="clickMe" type="success">成功按钮</el-button>
  </div>
</template>

<script>

export default {
  name: "Discovery",
  methods: {
    clickMe() {
      this.$message({
        message: "警告哦，这是一条警告消息",
        type: "warning",
      });
    },
  },
  mounted() {
      console.log(111);
  }
};
</script>

<style scoped>
.discovery {
  -webkit-box-flex: 1;
  flex: 1;
  overflow-y: scroll;
  padding: 10px 20px;
}
</style>
