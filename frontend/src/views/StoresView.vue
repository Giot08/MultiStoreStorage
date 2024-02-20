<script setup>
import MainNav from '@/components/MainNav.vue';
import NewStoreModal from '@/components/NewStoreModal.vue';
import { useStoreStorage } from '../stores/storeStore.js'

const tableHeaders = ["Name", "Location", "Address", "Store email", "Phone"];

const useStore = useStoreStorage();
useStore.getStores();
</script>

<template>
  <MainNav />
  <v-container class="my-6 bg-primary">
    <v-table fixed-header class="bg-primary">
      <thead>
        <tr>
          <th class="text-left bg-primary" v-for="(header, index) in tableHeaders" :key="index">
            {{header}}
          </th>
        </tr>
      </thead>
      <tbody v-if="useStore.isLoadingStores" >
        <tr>
          <td>
            <v-skeleton-loader color="primary" type="paragraph" ></v-skeleton-loader>
          </td>
          <td>
            <v-skeleton-loader color="primary" type="paragraph" ></v-skeleton-loader>
          </td>
          <td>
            <v-skeleton-loader color="primary" type="paragraph" ></v-skeleton-loader>
          </td>
          <td>
            <v-skeleton-loader color="primary" type="paragraph" ></v-skeleton-loader>
          </td>
          <td>
            <v-skeleton-loader color="primary" type="paragraph" ></v-skeleton-loader>
          </td>
        </tr>

      </tbody>
      <tbody v-if="!useStore.isLoadingStores">
        <tr v-for="store in useStore.stores" :key="store.id">
          <td>{{ store.name }}</td>
          <td>
            {{ store.country_code }} / 
            {{ store.country }},
            {{ store.province }} -
            {{ store.city }}
          </td>
          <td>{{ store.address }}</td>
          <td>{{ store.store_email }}</td>
          <td>{{ store.phone }}</td>
          <td>
            <v-btn variant="text" :data-id="store.id">
              <box-icon color="rgb(3,169,244)" type='solid' name='edit'></box-icon>
            </v-btn>
            <v-btn variant="text" :data-id="store.id">
              <box-icon color="rgb(244,67,54)" type='solid' name='trash-alt'></box-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <NewStoreModal/>
  </v-container>
</template>