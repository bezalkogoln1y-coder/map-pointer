<template lang="pug">
.container
   h3.center-align.heading Приложение Map Pointer
   Loading(v-if='loading')
   TMap(v-if='!loading')
   GMap(:name='mapName', v-if='!loading')
</template>

<script>
import GMap from '@/components/app/GMap';
import TMap from '@/components/app/TMap';
import Loading from '@/components/app/Loading';
import { mapActions, mapGetters } from 'vuex';

export default {
   data: () => ({
      mapName: 'map',
      loading: true,
   }),
   components: {
      Loading,
      GMap,
      TMap,
   },
   methods: mapActions(['fetchPointers']),
   computed: mapGetters(['Auth']),
   mounted() {
      if (!this.Auth) {
         this.$router.push('/auth');
      }

      this.fetchPointers({
         XTC549015K2519659: {
            lat: 55,
            lon: 52,
         },
         XTC549005J2512126: {
            lat: 54,
            lon: 52,
         },
      });

      this.loading = false;
   },
};
</script>

<style lang="less">
.card.card__custom {
   margin-bottom: 3rem;
   .card__heading {
   }
}
</style>