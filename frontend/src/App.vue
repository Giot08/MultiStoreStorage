<script setup>
  import { RouterView } from 'vue-router'
</script>

<template>
  <v-layout class="rounded rounded-md">
      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
         <RouterView />
      </v-main>
    </v-layout> 
</template>