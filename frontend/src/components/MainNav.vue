<script setup>
import { mainRoutes } from '../helpers/nav'

defineProps({
    path: {
        type: String,
        required: true
    },
    secondaryRoutes: {
        type: Object,
        required: false
    }
});
</script>

<template>
    <v-app-bar color="primary" density="compact">
        <template v-slot:prepend>
            <RouterLink to="/home" class="route-link">
                <box-icon color="#ffffff" size="md" name='rocket'></box-icon>
                <div class="d-flex align-center ml-1 text-surface">
                    MSSPS By Giot
                </div>
            </RouterLink>
        </template>
        <template v-slot:title>
            <nav class="d-flex ga-3">
                <div v-for="item in mainRoutes" :key="item.name">
                    <RouterLink :to="item.route" class="route-link">
                        <box-icon color="#ffffff" type="solid" size="sm" :name='item.icon'></box-icon>
                        <div class="text-surface">
                            {{ item.name }}
                        </div>
                    </RouterLink>
                </div>
            </nav>
        </template>

        <!-- Ver si es necesario mas adelante. -->
        <template v-slot:append>
            <RouterLink to="/setup" class="route-link">
                <box-icon color="#ffffff" type="solid" size="sm" name='cog'></box-icon>
            </RouterLink>
        </template>
    </v-app-bar>
    <nav v-if="secondaryRoutes">
        <v-navigation-drawer class="secondary-routes">
            <div class="secondary-routes__container bg-primary">
                <v-list v-for="(route, index) in secondaryRoutes" :key="index">
                    <RouterLink :to="route.route">
                        <v-list-item :title="route.name" class="text-surface"></v-list-item>
                    </RouterLink>
                </v-list>
            </div>
        </v-navigation-drawer>
    </nav>
</template>
