<script setup>
import { createStore } from '@/api/storeApi.js'
import { ref } from 'vue'
import countryList from '@/api/countries.json';

const countries = countryList.map((x) => x.name);

const data = ref({
    modal: false,
    store: '',
    state: null,
    phone: null,
    country: '',
    province: '',
    city: '',
    address: '',
    shop_email: '',
    manager_email: '',
    latitude: null,
    longitude: null,
    zip_code: null,
    rules: {
        required: value => !!value || 'Required.',
        email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
        },
    }
})
</script>

<template>
    <v-row class="px-7 pt-2 pb-4">
        <v-dialog v-model="data.modal" persistent width="800">
            <template v-slot:activator="{ props }">
                <v-btn class="bg-green text-white" v-bind="props">
                    new store
                </v-btn>
            </template>
            <v-card>
                <v-card-title class="text-center mt-3">
                    <span class="text-h5">New Store</span>
                </v-card-title>

                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Name*" :rules="[data.rules.required]"
                                    v-model="data.store"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-select v-model="data.state" :rules="[data.rules.required]"
                                    :items="['Active', 'Inactive']" label="Store State*" required></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field :rules="[data.rules.required]" min="999999" prefix="+" type="number" label="Phone*"
                                    required v-model="data.phone"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">

                                <v-select v-model="data.country" :rules="[data.rules.required]"
                                    :items="countries" label="Country*" required></v-select>

                                <!-- <v-text-field :rules="[data.rules.required]" label="Country*" v-model="data.country"
                                    required>
                                </v-text-field> -->
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field :rules="[data.rules.required]" v-model="data.province" label="Province*"
                                    hint="" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field :rules="[data.rules.required]" label="City*" v-model="data.city" hint=""
                                    required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field :rules="[data.rules.required]" v-model="data.address" label="Address*"
                                    required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field v-model="data.shop_email" :rules="[data.rules.required, data.rules.email]"
                                    type="email" label="Shop Email*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field v-model="data.manager_email" :rules="[data.rules.required, data.rules.email]"
                                    type="email" label="Owner Email*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field type="number" label="Latitude" v-model="data.latitude"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Longitude" type="number" v-model="data.longitude"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field type="number" v-model="data.zip_code" label="Zip Code"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="data.modal = false">
                        Close
                    </v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="createStore(data)">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>@/api/storeApi.js