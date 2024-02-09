<script setup>
  import MainNav from '../components/MainNav.vue';
  import { indexRoutes } from '../helpers/nav'

</script>

<template>
  <MainNav :secondary-routes="indexRoutes"/>
  HomePage
</template>
