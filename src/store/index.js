import { createStore } from 'vuex'
import user from './modules/user'
import permission from  './modules/permission'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    permission:permission,
    user:user,
  }
})
