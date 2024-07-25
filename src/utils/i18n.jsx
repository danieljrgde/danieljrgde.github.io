import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LocaleEN from "@portfolio/assets/locales/en.json";
import LocaleFR from "@portfolio/assets/locales/fr.json";
import LocalePT from "@portfolio/assets/locales/pt.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: { translation: LocaleEN },
    fr: { translation: LocaleFR },
    pt: { translation: LocalePT },
  },
});

export default i18n;