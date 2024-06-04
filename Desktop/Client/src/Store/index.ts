// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('count', {
  // 초기 상태 지정
  state: () => {
    return { count: 1 };
  },
  getters: {
    doubleCount: state => state.count * 2,
  },
  // 액션 함수 지정
  actions: {
    increment() {
      this.count++;
    },
  },
});