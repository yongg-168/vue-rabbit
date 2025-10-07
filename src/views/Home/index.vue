<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProducts />
  <HomePanel title="新鲜好物" sub-title="新鲜好物 好多商品">
    <div>我是新鲜好物的内容</div>
  </HomePanel>
  <HomePanel title="人气推荐" sub-title="人气推荐 好多商品">
    <div>我是人气推荐的内容</div>
  </HomePanel>
</template>
<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeProducts from './components/HomeProducts.vue'
import HomePanel from './components/HomePanel.vue'
</script>
<style scoped></style>
