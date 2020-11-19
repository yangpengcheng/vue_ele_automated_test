<template>
  <div class="main">
    <div class="top">
      <div class="header">
        <h4 class="logo">让测试更简单</h4>
      </div>
      <h2>欢迎登录</h2>
      <h3>力争作最好用的开源接口测试平台</h3>
    </div>
    <div class="login">
      <form>
        <div style="text-align:center">
          <img src="@/assets/login.svg" alt="" class="avatar"/>
        </div>
        <div class="field">
          <el-input v-model="username"></el-input>
        </div>
        <div class="field">
          <el-input
            v-model="password"
            show-password
          ></el-input>
        </div>
        <div class="field">
          <el-button @click.prevent="handleLogin">Login</el-button>
        </div>
      </form>
    </div>
    <el-alert
      title="用户名/密码指南"
      type="success"
      :closable="false"
      description="用户名：admin,密码(eg. @a123456),角色:管理员;   用户名：tester,密码(eg. @a123456),角色:测试员;
        用户名：任意,密码(eg. @a123456),角色:游客">
    </el-alert>
    <div class="footer">
      <p>copyright &copy; 2020-present yangpengcheng. all rights reserved</p>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance, reactive, toRefs, computed } from 'vue'
export default {
  setup() {
    const { proxy } = getCurrentInstance()
    const router_query = computed(() => proxy.$root.$route.query.redirect)
    console.log('router_query', router_query.value)
    const UserInfo = reactive({
      username: '',
      password: '',
    })
    const handleLogin = () => {
      if (UserInfo.username !== '' && UserInfo.password !== '') {
        proxy.$store
          .dispatch('user/login', UserInfo)
          .then(() => {
            // 重定向
            proxy.$router.push({ path: router_query.value || '/' })
          })
          .catch((err) => {
            console.log('error', err)
          })
      }
    }
    return {
      ...toRefs(UserInfo),
      handleLogin,
    }
  },
}
</script>

<style lang="scss" scoped>
.main {
  background-color: #e9eaef;
  padding: 4rem;
  width: 100%;
  height: 100vh;
}
.top {
  background-color: #7952b3;
}
.header {
  display: flex;
  justify-content: space-between;
}
.logo {
  color: white;
  font-size: 1.1rem;
  font-family: 'Courier New', Courier, monospace;
  padding-top: 5px;
  padding-left: 20px;
  font-weight: normal;
}
h2 {
  color: white;
  text-align: center;
  font-size: 2rem;
  padding: 70px 0 25px;
  font-weight: normal;
}
h3 {
  color: white;
  text-align: center;
  font-size: 1rem;
  padding-bottom: 140px;
  font-weight: normal;
}
.login {
  width: 400px;
  margin: auto;
  background-color: white;
  position: relative;
  top: -71px;
  padding: 30px;
}
.login .y-input {
  display: block;
  width: 100%;
  border: none;
  outline: none;
  color: gray;
  font-size: 1rem;
  :focus {
    border-bottom: 1px solid #7852b1;
  }
}
.login button {
  display: block;
  width: 100%;
  outline: none;
  background-color: #7952b3;
  border: 1px solid #7852b1;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 5px;
  padding: 10px;
}

.login .field {
  margin-top: 30px;
  position: relative;
}
.avatar{
  width: 80px;
}
.footer {
  display: block;
  text-align: center;
  width: 100%;
  height: 30px;
  font-size: 12px;
  background-color: #F5F5F7;
  color: #86868b;
  padding-top: 7px;
}
</style>