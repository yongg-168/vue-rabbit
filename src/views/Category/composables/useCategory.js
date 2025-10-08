//封装分类数据相关的代码
import { ref, onMounted, watch } from 'vue'
import { getCategoryAPI } from '@/apis/category'
import { useRoute } from 'vue-router'
export function useCategory() {
  const categoryData = ref({})
  const route = useRoute()
  const getCategory = async () => {
    const res = await getCategoryAPI(route.params.id)
    categoryData.value = res.result
  }
  onMounted(() => { getCategory() })
  // 解决路由缓存的问题
  watch(() => route.params.id, () => {
    getCategory()
  })
  return {
    categoryData
  }
}