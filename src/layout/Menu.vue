<template>
  <el-menu text-color="#7952B3" @select="handleSelect" :collapse="isCollapse">
    <y-menu-item :submenuData="item" v-for="item in menuData" :key="item.path"/>
  </el-menu>
</template>

<script>
import { computed, getCurrentInstance } from 'vue'
import {useRouter} from 'vue-router'
import _ from 'lodash'
import {filterRouter} from '@/utils/util'
export default {
  setup(){
    const {proxy} = getCurrentInstance() 
    const route_data = computed(()=>proxy.$store.state.permission.routes)
    const router = useRouter()
    const genMenuData = (arr) =>{
      return _.map(arr,item => {
        return{
          path: item.path,
          icon: item.meta ? item.meta.icon:'',
          title: item.meta ? item.meta.title:'default',
          children:genMenuData(item.children),
          id:item.path
        }
      })
    }

    const menuData = genMenuData(filterRouter(route_data.value))
    console.log(menuData)

    const handleSelect= (index,indexPath) =>{
      router.push({path:indexPath.join('/').replace('//','/')})
    }

    return {
      handleSelect,
      isCollapse:false,
      menuData,
    }
  }
}
</script>

<style lang="scss" scoped>
</style>