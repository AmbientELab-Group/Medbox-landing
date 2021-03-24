import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      translations: require("../locales/en/translations.json"),
    },
    pl: {
      translations: require("../locales/pl/translations.json"),
    },
  },
  ns: ["translations"], // namespace - name of the file with translations
  defaultNS: "translations",
  returnObjects: true,
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: true,
  },
});

i18next.languages = ["en", "pl"];

export default i18next;
