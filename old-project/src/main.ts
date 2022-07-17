import { createApp } from 'vue'

/**
 * 注意css的引入顺序会互相影响
 */

// 加载tailwind.css
import './tailwind.css'
// 加载App及其中的css
import App from './App.vue'

// 实例化Vue App
const app = createApp(App)

/** === 安装pinia === */
import { createPinia } from 'pinia'
app.use(createPinia())

/** === 安装 vue-router === */
import router from './router'
app.use(router)

/** === 安装view-ui-plus组件 === */
import 'view-ui-plus/dist/styles/viewuiplus.css'
import './view-ui-theme.less'
import ViewUIPlus from 'view-ui-plus'
app.use(ViewUIPlus)

/** === 安装swiper === */
import 'swiper/css'
import 'swiper/css/pagination'

/** === vue实例挂载 */
app.mount('#app')
