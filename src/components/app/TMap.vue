<template lang="pug">
.card.card__custom.z-depth-0
   h5.card__heading Все точки в таблице
   table
      thead
         tr
            th Ключ
            th Широта
            th Долгота
      tbody
         tr(v-for='{ key, Lat, Lon } in Pointers')
            td {{ key }}
            td {{ Lat }}
            td {{ Lon }}
</template>

<script>
import { mapGetters } from 'vuex';
export default {
   computed: mapGetters(['Pointers']),
};
</script>

<style lang="less">
</style>