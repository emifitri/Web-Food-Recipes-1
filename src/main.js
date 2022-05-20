import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
// import GAuth from 'vue3-google-oauth2'
import GAuth from 'vue3-google-oauth2'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// import GAuth from 'vue3-google-oauth2'

const pinia = createPinia()
const baseURL = 'http://localhost:3000'

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

axios.defaults.baseURL = baseURL;

const gAuthOptions = { clientId: '993481496062-o9mequ2pomne1rcctldbpn5latt3g2pa.apps.googleusercontent.com' }
// const gAuthOptions = { clientId: '993481496062-o9mequ2pomne1rcctldbpn5latt3g2pa.apps.googleusercontent.com' }


createApp(App)
  .use(router)
  .use(pinia)
.use(GAuth, gAuthOptions)
  // .use(BootstrapVue)
  // .use(BootstrapVueIcons)
  .mount('#app')
