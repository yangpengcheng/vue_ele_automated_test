<template>
  <div class="nav">
    <div class="left flex">
      <el-link :underline="false" style="color:white;">自动化测试平台</el-link>
    </div>
    <div class="middle flex">
      <!-- <y-bread-crumb></y-bread-crumb> -->
    </div>
    <div class="right flex">
      <!-- <header-search style="margin-right:10px"/> -->
      <el-dropdown style="margin-top:7px">
        <span class="el-dropdown-link" style="color:white">
          {{$store.state.user.name}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu>
          <el-dropdown-item @click="handelLogout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {computed,getCurrentInstance} from 'vue'
export default {
  setup(){
    const { proxy } = getCurrentInstance()
    const router_path = computed(()=>proxy.$root.$route.path)
    const handelLogout = () =>{
      console.log('handelLogout')
      console.log('router_path',router_path.value)
      proxy.$store
        .dispatch('user/logout')
        .then(() => {
          // 重定向
          proxy.$router.push({ path: '/login',query:{redirect:`${router_path.value}`}})
        })
        .catch((error) => {
          console.log(error)
        })
    }
    const click = () =>{
      console.log(click)
    }
    return {
      handelLogout,
      click
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  display:inline-flex;
  flex-direction: row;
  display: inline-flex;
  flex-wrap: nowrap;
  justify-content:flex-start;
  align-content: center;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  background-color: #7952B3;
}
.middle{
  flex-grow: 1;
  justify-content: flex-start;
}
.left{
  width: 200px;
  justify-content: flex-start;
}
.right{
  flex-grow: 1;
  justify-content: flex-end;
}
.flex{
  display: flex;
  display: inline-flex;
  flex-direction: row;
  padding: 5px;
  align-content: center;
}
</style>