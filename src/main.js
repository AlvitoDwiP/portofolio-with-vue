import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { MotionPlugin } from '@vueuse/motion'
import router from '@/router'
import App from './App.vue'
import '@/assets/styles/tokens.css'
import '@/assets/styles/main.css'

document.documentElement.classList.add('dark')
document.documentElement.setAttribute('lang', 'id')

const app = createApp(App)

app.use(createHead())
app.use(router)
app.use(MotionPlugin)
app.mount('#app')
