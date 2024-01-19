import "./assets/reset.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App);
app.use(router, BootstrapVue3, VueAxios, axios);
app.config.globalProperties.axios = axios;
axios.defaults.baseURL = "https://koreanjson.com";
app.mount("#app");