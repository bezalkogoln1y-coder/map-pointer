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
   async created() {
      this.setLayout(this.$route.meta.layout);
      await this.fetchAuth();
   },
};
</script>

<style lang="less">
.toast__error {
   background-color: #f44336 !important;
   font-weight: bold !important;
}

.heading {
   margin-bottom: 3rem;
}
</style>
