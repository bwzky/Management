import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import { Button, Select } from 'element-ui';

// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);

Vue.config.productionTip = false

new Vue({
  router,
  store,
	// ElementUI,
  render: (h) => h(App)
}).$mount("#app")
