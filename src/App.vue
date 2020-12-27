<template lang="pug">
#app
   component(:is='Layout')
</template>

<script>
/**
 * Определяем layouts
 *
 * @see @/layouts
 */

import BaseLayout from '@/layouts/Base';

import { mapActions, mapGetters } from 'vuex';

export default {
   components: {
      BaseLayout,
   },
   computed: mapGetters(['Layout']),
   methods: mapActions(['setLayout', 'fetchAuth']),
   created() {
      this.setLayout(this.$route.meta.layout);
      this.fetchAuth();
   },
};
</script>

<style lang="less">
.toast__error {
   background-color: #f44336 !important;
}

.heading {
   margin-bottom: 3rem;
}
</style>
