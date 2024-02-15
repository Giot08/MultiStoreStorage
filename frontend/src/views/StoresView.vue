<script setup>
import MainNav from '@/components/MainNav.vue';
import { useStoreStorage } from '../stores/store.js'

const useStore = useStoreStorage();
useStore.getStores();
</script>

<template>
  <MainNav />
  <v-container class="my-6 bg-primary">
    <v-table fixed-header class="bg-primary">
      <thead>
        <tr>
          <th class="text-left bg-primary">
            Name
          </th>
          <th class="text-left bg-primary">
            Location
          </th>
          <th class="text-left bg-primary">
            Address
          </th>
          <th class="text-left bg-primary">
            Store Email
          </th>
          <th class="text-left bg-primary">
            phone
          </th>
        </tr>
      </thead>
      <tbody v-if="useStore.isLoadingStores">
        <h1>
          is loading..
        </h1>
      </tbody>
      <tbody v-if="!useStore.isLoadingStores">
        <tr v-for="store in useStore.stores" :key="store.name">
          <td>{{ store.name }}</td>
          <td>
            {{ store.country_code }} / 
            {{ store.country }},
            {{ store.province }} -
            {{ store.city }}
          </td>
          <td>{{ store.address }}</td>
          <td>{{ store.main_email }}</td>
          <td>{{ store.phone }}</td>
          <td>
            <v-btn variant="text">
              <box-icon color="rgb(3,169,244)" type='solid' name='edit'></box-icon>
            </v-btn>
            <v-btn variant="text">
              <box-icon color="rgb(244,67,54)" type='solid' name='trash-alt'></box-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <v-col cols="auto">
      <v-btn class="bg-green text-white">
        new store
      </v-btn>
    </v-col>
  </v-container>
</template>
