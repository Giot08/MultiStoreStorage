<script setup>
import { ref } from 'vue'
import { routes } from '../../helpers/nav'

const leftNav = ref(true)

</script>

<template>
    <v-app-bar color="primary" density="compact">
        <template v-slot:prepend>
            <v-btn @click="leftNav = !leftNav">
                <box-icon size="md" name='menu'></box-icon>
            </v-btn>
        </template>
        <template v-slot:title>
            <nav class="d-flex ga-3">
                <div v-for="item in routes">
                    <RouterLink :to="item.route" class="route-link">
                        <box-icon color="#ffffff" type="solid" size="sm" :name='item.icon'></box-icon>
                        <div>
                            {{ item.name }}
                        </div>
                    </RouterLink>
                </div>
            </nav>
        </template>

        <!-- Ver si es necesario mas adelante. -->
        <template v-slot:append>
            <v-btn @click.stop="drawer = !drawer">
                <box-icon size="md" name='menu'></box-icon>
            </v-btn>
        </template>
    </v-app-bar>
    <nav v-show="leftNav">
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
    </nav>
</template>
