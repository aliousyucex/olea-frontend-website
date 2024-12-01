import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import trJSON from "./locales/tr.json";
import enJSON from "./locales/en.json";

const lastChoosedLanguage = localStorage.getItem('language');
let currentLanguageCode = lastChoosedLanguage as 'tr' | 'en';

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: {...enJSON}, code: 'en' },
    tr: { translation: {...trJSON}, code: 'tr' },
  },
  lng: currentLanguageCode,
  fallbackLng: "en",
});

export const changeCurrentLanguage = () => {
  if (currentLanguageCode === 'en') {
    currentLanguageCode = 'tr';

  } else {
    currentLanguageCode = 'en';
  }

  i18next.changeLanguage(currentLanguageCode).catch((err) => {
    console.error('Cannot change i18n language', err);
  });

  localStorage.setItem('language', currentLanguageCode)
}

export const getCurrentLanguageCode = () => {
  return currentLanguageCode;
}
