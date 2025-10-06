import httpInstance from "@/utils/http"
export function getCategory() {
  return httpInstance({
    method: 'GET',
    url: 'home/category/head'
  })
}