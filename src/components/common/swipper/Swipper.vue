<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item
      :style="{ 'border-radius': radiusVal + 'px' }"
      v-for="(item, index) in banners"
      :key="index"
    >
      <img :src="item.imageUrl" alt="" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Swipper",
  props: {
    banners: {
      type: Array,
      default: [],
    },
    radiusVal: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
.el-carousel__item {
  overflow: hidden;
  /* border-radius: 10px; */
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item img {
  width: 100%;
  height: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
