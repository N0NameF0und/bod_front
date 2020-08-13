import Vue from 'vue'
import App from './App.vue'
import globalComponents from './environments/globalComponents.vue'
import Router from './router/index.js'
import velocity from "velocity-animate";



//Plugins
Vue.use(velocity);


new Vue({
  el: '#app',
  router:Router,
  globalComponents,
  render: h => h(App)
})
