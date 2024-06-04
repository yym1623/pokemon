export default {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting', // tailwindcss 전역  - 중첩된 선언에 대한 지원을 추가
    tailwindcss: {},
    autoprefixer: {},
  }
}