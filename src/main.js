import './assets/main.css'
import '../node_modules/primeicons/primeicons.css';
import router from './router';
import { createApp } from 'vue';
import App from './App.vue'
import toast from 'vue-toastification';
import '/vue-toastification/dist/index.css';
const app = createApp(App)

// setting up router
app.use(router);
app.use(toast);
app.mount('#app')
