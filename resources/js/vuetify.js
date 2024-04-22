import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'
import ru from 'vuetify/lib/locale/ru'
import '@mdi/font/css/materialdesignicons.css'

const app = createApp({})

// Создаем экземпляр Vuetify один раз
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        iconfont: 'mdi', // или 'fa'
    },
    lang: {
        locales: { ru },
        current: 'ru',
    },
    theme: {
        themes: {
            dark: {},
            light: {
                background: colors.grey.lighten5, // используйте конкретный цвет
            },
        },
    },
})

app.use(vuetify)

// Экспортируем существующий экземпляр
export default vuetify
