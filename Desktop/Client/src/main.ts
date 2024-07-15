import { createApp } from 'vue'

import App from '@/App.vue'

// css
import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primevue/resources/primevue.min.css';


// lib
import PrimeVue from 'primevue/config';
import Router from '@/Router/index'
import { createPinia } from 'pinia'


createApp(App).use(PrimeVue).use(Router).use(createPinia).mount('#app')
