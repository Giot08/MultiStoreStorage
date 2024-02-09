<script setup>
  import MainNav from '@/components/MainNav.vue';
  import { stores } from '@/helpers/stores.seed';
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
            Address
          </th>
          <th class="text-left bg-primary">
            Last product sync
          </th>
          <th class="text-left bg-primary">
            Last PIS sync
          </th>
          <th class="text-left bg-primary">
            Last DAD sync
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="store in stores" :key="store.name">
          <td>{{ store.name }}</td>
          <td>{{ store.address }}</td>
          <td>{{ store.last_product_sync }}</td>
          <td>{{ store.last_pis_sync }}</td>
          <td>{{ store.last_dad_sync }}</td>
          <td>
            <v-btn variant="text">
              <box-icon 
                color="rgb(3,169,244)"
                type='solid'
                name='edit'></box-icon>
            </v-btn>
            <v-btn variant="text">
              <box-icon 
                color="rgb(244,67,54)"
                type='solid'
                name='trash-alt'></box-icon>
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
