<template>
  <div class="discovery">
    <div>
      <swipper :banners="banners"/>
    </div>
  </div>
</template>

<script>
import Swipper from 'components/common/swipper/Swipper';

import { getBanners } from 'network/discovery';

export default {
  name: "Discovery",
  components: { Swipper },
  data() {
    return {
      banners: []
    }
  },
  
  created() {
    getBanners().then(res => {
      this.banners = res.banners;
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
  max-width: 1100px;
  margin: 0 auto;
}
</style>
