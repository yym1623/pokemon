import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { isCustomElement, transformAssetUrls } from 'vue3-pixi/compiler'
// import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        // support for custom elements and remove the unknown element warnings
        compilerOptions: { isCustomElement },
        // support for asset url conversion
        transformAssetUrls,
      },
    }),
  ],
  base: './',
  server: {
    watch: {
      usePolling: true
    }
  }
})
