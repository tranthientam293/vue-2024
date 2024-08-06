import { createApp } from 'vue';

import './assets/main.css';
import 'primeicons/primeicons.css';
import 'vue-toastification/dist/index.css';

import App from './App.vue';
import router from './router';
import Toast from 'vue-toastification';

const app = createApp(App);

const toastOptions = {};

app.use(router);
app.use(Toast, toastOptions);

app.mount('#app');
