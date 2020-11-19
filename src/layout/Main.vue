<template>
  <div>
    <div>
      <!-- <div :class="{'fixed-header':fixedHeader}">
        <tags-view v-if="needTagsView" />
      </div> -->
      <router-view v-slot="{Component}" class="view">
        <keep-alive>
          <component :is="Component"/>
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script>
export default {
  setup(){
    return{
      needTagsView:true,
      fixedHeader:false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.fixed-header {
  position: fixed;
  top: 40px;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$menu-width});
  transition: width 0.28s;
}
.fixed-header + .view{
  margin-top: 30px;
}
</style>