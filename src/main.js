import './assets/main.css'
import 'primeicons/primeicons.css'
import router from './router';
import { createApp } from 'vue';
import App from './App.vue'

const app = createApp(App)

// setting up router
app.use(router);
app.mount('#app')
