<template>
  <div class="discovery">
    <!-- <h1>Discovery</h1>
    <el-button @click="clickMe" type="success">成功按钮</el-button> -->
    <div>
      <swipper :banners="banners"/>
    </div>
  </div>
</template>

<script>
import Swipper from 'components/common/swipper/Swipper';

import axios from 'axios'
export default {
  name: "Discovery",
  components: { Swipper },
  data() {
    return {
      banners: []
    }
  },
  created() {
    axios({
      url: 'https://autumnfish.cn/banner',
      method: 'get',
    }).then(res => {
      this.banners = res.data.banners;
      console.log(this.banners);
    })
  }
};
</script>

<style scoped>
.discovery {
  overflow: hidden;
  position: absolute;
  top: 70px;
  bottom: 70px;
  left: 220px;
  right: 30px;
}
</style>
