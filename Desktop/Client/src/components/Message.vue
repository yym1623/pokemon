<script setup lang="ts">
import InputText from 'primevue/inputtext';


const props = defineProps<{
  msg: string
}>()


</script>

<template>
  <div class="background-image">
    <InputText type="text" class="non-border" v-model="props.msg" readonly />
  </div>
</template>


<style lang="scss" scoped>
.background-image {
  background-image: url('public/message.png');
  background-repeat: no-repeat;
  position: relative;
  height: 6rem;
  background-position: center;
  width: 32rem;
  .non-border {
    position: absolute;
    top: 17px;
    left: 18px;
    width: 30rem;
    height: 4rem;
    border: none;
    box-shadow: none;
    outline: none;
  }
}
</style>