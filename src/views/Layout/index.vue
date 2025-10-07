<template>
  <div>
    <LayoutNav />
    <LayoutFixed />
    <LayoutHeader />
    <RouterView />
    <LayoutFooter />
  </div>
</template>
<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'
const { getCategory } = useCategoryStore()
onMounted(async () => {
  await getCategory()
})
</script>