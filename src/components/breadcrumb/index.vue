<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item) in levelList" :key="item.path" >
        <a @click="handleLink(item)" style="color:white">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import { ref, watch } from 'vue'
import { getCurrentInstance } from 'vue'
export default {
  name:'YBreadCrumb',
  setup(props, ctx) {
    const {proxy} = getCurrentInstance()
    const levelList = ref()
    watch(
      () => {
        return proxy.$route
      },
      (route) => {
        getBreadcrumb()
      }
    )
    const getBreadcrumb = () => {
      levelList.value = proxy.$route.matched
    }
    const handleLink = (item) => {
      const { redirect, path } = item
      if (redirect) {
        proxy.$router.push(redirect)
        return
      }
      proxy.$router.push(path)
    }
    getBreadcrumb()
    return {
      handleLink,
      levelList
    }
  }
}
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 30px;
  margin-left: 8px;
}
</style>
