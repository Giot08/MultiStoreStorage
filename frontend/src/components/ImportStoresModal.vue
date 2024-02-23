<script setup>
import { ref } from 'vue'
import { importStores } from '../api/storeApi.js';

const data = ref({
    modal: false,
    import_file: undefined
});
</script>

<template>
    <v-row class="px-7 pt-2 pb-4">
        <v-dialog v-model="data.modal" persistent width="800">
            <template v-slot:activator="{ props }">
                <v-btn class="bg-blue text-white" v-bind="props">
                    Import
                </v-btn>
            </template>
            <v-card>
                <v-card-title class="text-center mt-3">
                    <span class="text-h5">Import Stores</span>
                </v-card-title>
                <v-card-text>
                    <v-container class="d-flex align-center ">
                        <box-icon size="md" type='solid' name='file' class="mx-1"></box-icon>
                        <v-file-input
                            v-model="data.import_file"
                            class="mx-1"
                            :rules="rules"
                            accept=".csv"
                            prepend-icon=""
                            label="CSV"
                        ></v-file-input>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="data.modal = false">
                        Close
                    </v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="importStores(data)">
                        Send
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>