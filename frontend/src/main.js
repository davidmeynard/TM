import { createApp } from 'vue'
import App from './App.vue'
import Router from '../src/routes/index.js'
import Store from '../src/store/index.js'


const app = createApp(App)

app.use(Router)
app.use(Store)

app.mount("#app")

