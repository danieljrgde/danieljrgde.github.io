import "dayjs/locale/pt-br";
import "dayjs/locale/fr";

import LocaleEN from "@portfolio/assets/locales/en.json";
import LocaleFR from "@portfolio/assets/locales/fr.json";
import LocalePTBR from "@portfolio/assets/locales/pt-br.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    "en": { translation: LocaleEN },
    "fr": { translation: LocaleFR },
    "pt-BR": { translation: LocalePTBR },
  },
});

export default i18n;