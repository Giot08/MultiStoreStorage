import { createApp } from 'vue'
import { createPinia } from 'pinia'

// vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/util/colors'
const vuetify = createVuetify({
    theme: {
        themes: {
          light: {
            dark: false,
            colors: { //colors.red.darken1
              primary: colors.grey.darken4,
              secondary: colors.lightBlue.base,
              background: '#ff0000',
              error: colors.red.base,
              info: colors.grey.lighten1,
              success: colors.lightBlue.base,
              warning: colors.yellow.base,
              surface: colors.shades.white
            }
          },
        },
      },
    components,
    directives,
})

import 'boxicons'
import './assets/main.css'

import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(createPinia())
app.use(vuetify)
app.use(router)

app.mount('#app')
