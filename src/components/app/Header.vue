<template lang="pug">
nav.blue.darken-2.lx-2
   .nav-wrapper
      RouterLink.brand-logo(to='/') Map Pointer
      ul#nav-mobile.right.hide-on-med-and-down
         li
            RouterLink(to='/logout') Выйти
</template>

<script>
export default {};
</script>

<style lang="less">
nav {
   padding: 0 15px;
}
</style>