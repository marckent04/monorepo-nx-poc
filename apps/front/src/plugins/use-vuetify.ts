import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {App} from "vue";

export default (app: App) => {
  const vuetify = createVuetify({
    components,
    directives,
  })
    app.use(vuetify)
}
