import { createApp } from 'vue';

import './assets/main.css';
import 'primeicons/primeicons.css';
import 'vue-toastification/dist/index.css';

import App from './App.vue';
import router from './router';
import Toast from 'vue-toastification';
import { createPinia } from 'pinia';

const app = createApp(App);

const toastOptions = {
  timeout: 1000,
  pauseOnHover: false,
  maxToasts: 1,
  hideProgressBar: true
};

const pinia = createPinia()

app.use(router);
app.use(Toast, toastOptions);
app.use(pinia)

app.mount('#app');
