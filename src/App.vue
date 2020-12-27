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

export default {
   components: {
      BaseLayout,
   },
   computed: {
      Layout() {
         return this.$route.meta.layout;
      },
   },
};
</script>

<style>
</style>
