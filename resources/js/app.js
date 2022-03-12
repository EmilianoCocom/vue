require('./bootstrap');

// import axios
import VueAxios from 'vue-axios'
import axios from 'axios';


import {createApp} from 'vue'

// import file router
import router from './router'

// import PrimeVue
import PrimeVue from 'primevue/config'

// import component from primevue
import registerPrimeComponents from './prime-imports'

// import principal component
import App from './components/App'

const app = createApp(App)

app.use(router)

app.use(VueAxios, axios)

app.mount('#app')

app.use(PrimeVue.install)

// use components prime vue
registerPrimeComponents(app)