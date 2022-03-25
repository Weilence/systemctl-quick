import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(router)

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)
app.mount('#app')
