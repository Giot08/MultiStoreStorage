<script setup>
  import { RouterView } from 'vue-router'
  import Nav from './components/nav/Nav.vue';

</script>

<template>
  <v-layout class="rounded rounded-md">
      <Nav 
      />
      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
         <RouterView />
      </v-main>
    </v-layout> 
</template>