import { defineStore } from "pinia";
import { ref } from 'vue'
const start = new Date()
const end = new Date()
end.setDate(start.getDate() + 1)
const useMainStore = defineStore('main', () => {
  const isloading = ref(true)
  const startTime = ref(start)
  const endTime = ref(end)
  return {
    isloading,
    startTime,
    endTime
  }
})

export default useMainStore