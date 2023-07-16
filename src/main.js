import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import axios from 'axios'
import './style.css'
import App from './App.vue'

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
// console.log(router)
app.mount('#app')
