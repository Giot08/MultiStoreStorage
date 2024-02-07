<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <v-layout class="rounded rounded-md">
      <v-app-bar>
        <template v-slot:prepend>
          <v-app-bar-title>Title</v-app-bar-title>
            <RouterLink to="/">
              <v-list-item link title="Home"></v-list-item>
            </RouterLink>
            <RouterLink to="/about">
              <v-list-item link title="About"></v-list-item>
            </RouterLink>
          <v-btn icon>
          </v-btn>          
        </template>

      </v-app-bar>

      <v-navigation-drawer>
        <v-list>
          <v-list-item title="Multi Store Storage" subtitle="Vuetify"></v-list-item>
          <v-divider></v-divider>
          <RouterLink to="/">
              <v-list-item link title="Home"></v-list-item>
          </RouterLink>
          <RouterLink to="/about">
              <v-list-item link title="About"></v-list-item>
          </RouterLink>
        </v-list>
      </v-navigation-drawer>
      
      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
         <RouterView />
      </v-main>
    </v-layout>
 
</template>