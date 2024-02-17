<script setup>
import {ref} from 'vue'

const data = ref({
        dialog: false,
    })
</script>

<template>
    <v-row class="px-7 pt-2 pb-4">
        <v-dialog v-model="data.dialog" persistent width="800">
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
                                <v-text-field label="Name*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-select :items="['Active', 'Inactive']" label="Store State*" required></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Phone*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Country*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Province*" hint="" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="City*" hint="" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Address*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field label="Shop Email*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field label="Owner Email*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Latitude*"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Longitude"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Zip Code"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="data.dialog = false">
                        Close
                    </v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="data.dialog = false">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>