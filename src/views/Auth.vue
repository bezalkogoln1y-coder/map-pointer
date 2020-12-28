<template lang="pug">
.container
   h3.center-align.heading Авторизация Map Pointer
   .row
      form.col.s8.offset-s2.form__login(@submit.prevent='onSubmit')
         .row
            .input-field.col.s12
               input#email(
                  type='text',
                  v-model='email',
                  :class='{ invalid: this.$v.$dirty && this.$v.email.$error }'
               )
               label(for='email') Email
               span.helper-text(
                  v-if='this.$v.$dirty && this.$v.email.$error',
                  data-error='Поле Email не должно быть пустым'
               )
         .row
            .input-field.col.s12
               input#password(
                  type='password',
                  v-model='password',
                  :class='{ invalid: this.$v.$dirty && this.$v.password.$error }'
               )
               label(for='password') Пароль
               span.helper-text(
                  v-if='this.$v.$dirty && this.$v.password.$error',
                  data-error='Поле Пароль не должно быть пустым'
               )
         button.btn.waves-effect.right.blue.darken-2(type='submit').
            Авторизоваться
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { required } from 'vuelidate/lib/validators';
export default {
   data: () => ({
      email: '',
      password: '',
   }),
   computed: mapGetters(['Auth']),
   validations: {
      email: {
         required,
      },
      password: {
         required,
      },
   },
   methods: {
      ...mapActions(['Login']),
      async onSubmit() {
         this.$v.$touch();

         if (!this.$v.$error) {
            await this.Login({ email: this.email, password: this.password });

            if (!this.Auth) {
               window.M.toast({ html: 'Неверный логин или пароль', classes: 'toast__error' });
               return false;
            }

            this.$router.push('/');
         }
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
.form__login {
   input {
      &:focus {
         border-bottom: 1px solid #1976d2 !important;
         box-shadow: 0 1px 0 0 #1976d2 !important;
      }
   }

   label {
      &.active {
         color: #1976d2 !important;
      }
   }
}
</style>