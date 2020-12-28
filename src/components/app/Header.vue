<template lang="pug">
nav.blue.darken-2
   .nav-wrapper
      RouterLink.brand-logo(to='/') Map Pointer
      ul#nav-mobile.right.hide-on-med-and-down(v-if='Auth')
         li
            a(href='/logout', @click.prevent='onLogout') Выйти
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
   computed: mapGetters(['Auth']),
   methods: {
      ...mapActions(['Logout']),
      async onLogout() {
         await this.Logout();
         this.$router.push('/auth');
      },
   },
};
</script>

<style lang="less">
nav {
   padding: 0 15px;
}
</style>