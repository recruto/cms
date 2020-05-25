import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from './plugins/firebase'
// import './index.css'

firebase
  .auth()
  .getRedirectResult()
  .then(() => {
    const app = createApp(App)
    app.use(router)
    app.mount('#app')
  })
