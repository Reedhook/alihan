import './bootstrap';
import { createApp } from 'vue';
import vuetify from "./vuetify.js";
import ExampleComponent from './components/ExampleComponent.vue';

const app = createApp({});

app.use(vuetify)

app.component('example-component', ExampleComponent);

app.mount('#app');
