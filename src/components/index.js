import MenuItem from './menu/menu-item.vue'
import Breadcrumb from './breadcrumb/index.vue'

const components = [
  MenuItem,Breadcrumb
]

const install = (Vue) => {
  for (var key in components) {
    Vue.component(components[key].name, components[key])
  }
}

export default {
  install
}