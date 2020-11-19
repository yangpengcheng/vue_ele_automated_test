import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// reset styles
import "normalize.css"

// 
import "@/styles/index.scss"

// customize components
import ui from './components'

// mock
const { mockXHR } = require('../mock')
mockXHR()

// 
import "./navi"

import 'element3/lib/theme-chalk/index.css'
import {
  ElLink,
  ElAlert,
  ElInput,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElSelect,
  ElOption,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElScrollbar,
  ElButton,
  setupGlobalOptions,
} from 'element3'



const app = createApp(App)
app.use(store).use(router).use(ui)
.use(ElAlert)
.use(ElLink)
.use(ElInput)
.use(ElMenu)
.use(ElMenuItem)
.use(ElSubmenu)
.use(ElDropdown)
.use(ElDropdownItem)
.use(ElDropdownMenu)
.use(ElSelect)
.use(ElBreadcrumb)
.use(ElBreadcrumbItem)
.use(ElScrollbar)
.use(ElOption)
.use(ElButton)
.use(setupGlobalOptions({ size: 'small', zIndex: 3000 }))
.mount('#app')

