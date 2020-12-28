<template lang="pug">
.card.card__custom.z-depth-0
   h5.card__heading Все точки на карте
   .google__map(:id='name', ref='$map')
</template>

<script>
import { mapGetters } from 'vuex';
export default {
   props: {
      name: String,
   },
   computed: {
      ...mapGetters(['Pointers']),
      Options() {
         return {
            zoom: 6,
            center: new window.google.maps.LatLng(this.Pointers[0].Lat, this.Pointers[0].Lon),
         };
      },
   },
   mounted() {
      const map = new window.google.maps.Map(this.$refs.$map, this.Options);
      this.Pointers.forEach((item) => {
         new window.google.maps.Marker({
            position: new window.google.maps.LatLng(item.Lat, item.Lon),
            map,
         });
      });
   },
};
</script>

<style lang="less">
.google__map {
   width: 100%;
   height: 500px;
}
</style>