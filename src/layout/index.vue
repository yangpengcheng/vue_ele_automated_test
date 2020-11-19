<template>
  <div class="layout">
    <nav-bar></nav-bar>
    <div class="container">
      <y-menu class="menu" ></y-menu>
      <y-main class="main"></y-main>
    </div>
    <y-footer class="footer"></y-footer>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import YMenu from './Menu.vue'
import YMain from './Main.vue'
import YFooter from './Footer.vue'
export default {
  components: {
    NavBar,
    YMenu,
    YMain,
    YFooter
  },
}
</script>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
.layout{
  display: inline-flex;
  display: flex;
  height: 100vh;
  flex-direction: column;
}
.container {
  display: flex;
  display: inline-flex;
  flex-direction: row;
  flex-grow: 1;
}
.menu{
  width: $menu-width;
}
.main{
  flex-grow: 1;
}
</style>