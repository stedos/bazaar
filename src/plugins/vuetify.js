import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import de from 'vuetify/es5/locale/de';
import { colors } from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { de },
    current: 'de',
  },
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.teal,
      }
    }
  },
});
