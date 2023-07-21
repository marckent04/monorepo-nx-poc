import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import useVuetify from "./plugins/use-vuetify";


const app = createApp(App);

useVuetify(app);

app.use(router)

app.mount("#app")

