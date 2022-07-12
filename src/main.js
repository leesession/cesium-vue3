import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueCesium from 'vue-cesium'
import 'vue-cesium/dist/index.css'

const app = createApp(App)

app.use(vueCesium)

app.use(store).use(router).mount('#app')
