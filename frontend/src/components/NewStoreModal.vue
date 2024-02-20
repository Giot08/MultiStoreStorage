<script setup>
import { ref } from 'vue'
import { createStore } from '@/api/storeApi.js'
import countryList from '@/api/countries.json';
import provinceList from '@/api/provinces.json';

const data = ref({
    modal: false,
    name: '',
    state: null,
    phone: null,
    country: '',
    countries: countryList.map((x) => x.name),
    province: '',
    provinces: [],
    city: '',
    address: '',
    domain: '',
    store_email: '',
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
});

const handleProvice = () => {
    data.value.province = ''
    data.value.provinces = provinceList.filter(x => x.country === data.value.country).map(x => x.name);
}
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
                                    v-model="data.name"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-select v-model="data.state" :rules="[data.rules.required]"
                                    :items="['Active', 'Inactive']" label="Store State*" required></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field :rules="[data.rules.required]" min="999999" prefix="+" type="number"
                                    label="Phone*" required v-model="data.phone"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-select v-model="data.country" :rules="[data.rules.required]" :items="data.countries"
                                    label="Country*" required @update:modelValue="handleProvice"></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-select v-model="data.province" :rules="[data.rules.required]" :items="data.provinces"
                                    label="Provinces*" required></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field :rules="[data.rules.required]" label="City*" v-model="data.city" hint=""
                                    required></v-text-field>
                            </v-col>
                            <v-col cols="12" md="8">
                                <v-text-field :rules="[data.rules.required]" v-model="data.address" label="Address*"
                                    required></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field :rules="[data.rules.required]" v-model="data.domain"
                                    label="Url"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field v-model="data.store_email" :rules="[data.rules.required, data.rules.email]"
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
</template>