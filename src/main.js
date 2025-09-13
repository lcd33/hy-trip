import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'
import './assets/css/index.css'


import router from './router'
import pinia from './stores'

const app = createApp(App)


app.use(pinia)
app.use(router)
app.mount('#app')
