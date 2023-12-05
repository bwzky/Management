import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import http from "./http/http"
import '../src/assets/index.css'
// import { Button, Select } from 'element-ui';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
Vue.prototype.$http=http
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
	// ElementUI,
  render: (h) => h(App)
}).$mount("#app")
