import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', () => {
  // pinia state -> data
  let count = ref(0)
  // pinia getters -> computed
  const doubleCount = computed(() : number => count.value * 2)
  // pinia actions -> methods
  function increment() {
    count.value++
  }
  

  return { count, doubleCount, increment }
})