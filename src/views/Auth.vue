<template lang="pug">
.container
   h3.center-align.heading Авторизация Map Pointer
   .row
      form.col.s8.offset-s2
         .row
            .input-field.col.s12
               input#email(type='text', v-model='email')
               label(for='email') Email
         .row
            .input-field.col.s12
               input#password(type='password', v-model='password')
               label(for='password') Пароль
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
   data: () => ({
      email: '',
      password: '',
   }),
   computed: mapGetters(['Auth']),
   methods: {
      ...mapActions(['Login']),
      onLogin() {
         if (!this.Login) {
            window.M.toast({ html: 'Неверный логин или пароль' });
         }

         this.$router.push('/');
      },
   },
   mounted() {
      if (this.Auth) {
         this.$router.push('/');
      }
   },
};
</script>

<style lang="less">
</style>