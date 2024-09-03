import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createGtm } from '@gtm-support/vue-gtm';


const app = createApp(App)

app.use(
    createGtm({
      id: "G-Q9NS2VJYVR"
    })
  )

app.mount('#app')
