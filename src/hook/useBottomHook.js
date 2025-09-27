import useHomeStore from '@/stores/moudule/home.js'
import { onMounted, onUnmounted, onActivated, onDeactivated, ref } from 'vue'

// 节流
import { throttle } from 'underscore'

// const homeStore = useHomeStore()

const useBottomHook = (elRef) => {
  // 元素
  let el = window
  const isReacheBottom = ref(false)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)
  const clientHeight = ref(0)

  const listenerFn = throttle(() => {
    if (!elRef) {
      scrollTop.value = document.documentElement.scrollTop
      scrollHeight.value = document.documentElement.scrollHeight
      clientHeight.value = document.documentElement.clientHeight
    } else {
      scrollTop.value = elRef.value.scrollTop
      scrollHeight.value = elRef.value.scrollHeight
      clientHeight.value = elRef.value.clientHeight
    }
    // console.log('scrollTop.scrollHeight.clientHeight', scrollTop, scrollHeight, clientHeight)
    console.log('监听到了滚动事件', scrollTop.value, scrollHeight.value, clientHeight.value)
    if (scrollTop.value + clientHeight.value >= scrollHeight.value - 30) {
      isReacheBottom.value = true
    }
  }, 200)

  onMounted(() => {
    if (elRef) el = elRef.value
    el.addEventListener('scroll', listenerFn)
  })
  onActivated(() => {
    el.addEventListener('scroll', listenerFn)
  })

  onDeactivated(() => {
    el.removeEventListener('scroll', listenerFn)
  })
  onUnmounted(() => {
    el.removeEventListener('scroll', listenerFn)
  })

  return {
    isReacheBottom,
    scrollHeight,
    clientHeight,
    scrollTop
  }
}


export default useBottomHook
