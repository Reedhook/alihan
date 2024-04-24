import './bootstrap';
import { createApp } from 'vue';
import vuetify from "./vuetify.js";
import IndexComponent from './components/Index.vue';

const app = createApp({});

app.use(vuetify)

app.component('index-component', IndexComponent);

app.mount('#app');
