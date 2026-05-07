import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { keys } from "ramda";
import { initReactI18next } from "react-i18next";

export const languages = {
  en: "English",
  uk: "Ukrainian",
  pl: "Polish",
  fr: "French",
  de: "German",
  be: "Belarusian",
  zh: "Chinese",
  es: "Spanish",
  ru: "Russian",
};

export const supportedLngs = keys(languages) as LanguagesType[];

export type LanguagesType = keyof typeof languages;

export type ItemKey = keyof (typeof import("./locales/en.json"))["item"];

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(resourcesToBackend((lng: string) => import(`./locales/${lng}.json`)))
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs,
    nonExplicitSupportedLngs: true,
    load: "languageOnly",
    debug: false,

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
  });

export default i18n;
