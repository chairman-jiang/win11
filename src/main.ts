import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import Vuex from 'vuex'
import store from './store'
import './assets/tailwind.css'


const app = createApp(App)

app.use(Vuex)
app.use(store)
app.use(router)

app.mount('#app')
