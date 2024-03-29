// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
        en: {
            translations: require('./locales/en/translation.json')
          },
          id: {
            translations: require('./locales/id/translation.json')
          },
          cn: {
            translations: require('./locales/cn/translation.json')
          }
      },
    fallbackLng: "en",
    debug: true,

    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false,

    interpolation: {
      escapeValue: false,
      formatSeparator: ","
    },

    react: {
      wait: true
    }
  });

export default i18n;