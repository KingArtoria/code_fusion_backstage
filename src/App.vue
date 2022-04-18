<template>
  <div id="app" style="display: flex">
    <NavMenu />
    <router-view style="width: calc(100% - 200px)" />
  </div>
</template>
<script>
import NavMenu from '@/components/nav_menu/index.vue';
export default {
  components: { NavMenu },
};
</script>
<style>
@import './index.css';
</style>
<style lang="scss"></style>
