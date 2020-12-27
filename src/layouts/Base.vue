<template lang="pug">
main
   Header
   RouterView
</template>

<script>
/**
 * Импортируем компоненты
 *
 * @see @/components
 */
import Header from '@/components/app/Header';

export default {
   components: {
      Header,
   },
};
</script>

<style lang="less">
</style>