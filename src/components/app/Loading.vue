<template lang="pug">
.loading
   .lds-ellipsis 
      div
      div
      div
      div
</template>

<style lang="less">
@import '~@less/_animations';

.loading {
   text-align: center;

   .lds-ellipsis {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;

      div {
         position: absolute;
         top: 33px;
         width: 13px;
         height: 13px;
         border-radius: 50%;
         background: #1976d2;
         animation-timing-function: cubic-bezier(0, 1, 1, 0);

         &:nth-child(1) {
            left: 8px;
            animation: lds-ellipsis1 0.6s infinite;
         }
         &:nth-child(2) {
            left: 8px;
            animation: lds-ellipsis2 0.6s infinite;
         }
         &:nth-child(3) {
            left: 32px;
            animation: lds-ellipsis2 0.6s infinite;
         }
         &:nth-child(4) {
            left: 56px;
            animation: lds-ellipsis3 0.6s infinite;
         }
      }
   }
}
</style>
