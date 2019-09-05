import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
Vue.config.productionTip = false
import Button from "ant-design-vue/lib/button"
import "ant-design-vue/dist/antd.css"

Vue.component(Button.name, Button);
Vue.use(Antd)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')