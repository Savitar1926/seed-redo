import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LottieVuePlayer from "@lottiefiles/vue-lottie-player";
import LottieAnimation from 'lottie-web-vue'
import { ColorPicker, ColorPanel } from 'one-colorpicker'
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);



Vue.use(LottieAnimation);
Vue.use(LottieVuePlayer);
Vue.use(ColorPanel)
Vue.use(ColorPicker)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
