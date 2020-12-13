import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store/store";
import AOS from "aos";
import "aos/dist/aos.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import vuetify from "./plugins/vuetify";

Vue.use(Buefy);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;
Vue.use(AOS);
AOS.init();

new Vue({
  store: store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
