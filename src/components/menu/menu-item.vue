<template>
  <el-menu-item  v-if="!submenuData.children || submenuData.children.length===0" :index="String(submenuData.id)">{{submenuData.title}}</el-menu-item>
  <el-submenu :index="String(submenuData.id)" v-else>
    <template v-slot:title>{{submenuData.title}}</template>
    <template v-for="item in submenuData.children" :key="item.id">
      <y-menu-item :submenuData="item"/>
    </template>
  </el-submenu>
</template>

<script>
export default {
  name:'YMenuItem',
  props:{
    submenuData:{
      type:Object,
    }
  }
}
</script>

<style>

</style>