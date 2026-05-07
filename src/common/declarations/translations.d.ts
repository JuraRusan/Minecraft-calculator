import "i18next";

import type be from "../../localization/locales/be.json";
import type de from "../../localization/locales/de.json";
import type en from "../../localization/locales/en.json";
import type es from "../../localization/locales/es.json";
import type fr from "../../localization/locales/fr.json";
import type pl from "../../localization/locales/pl.json";
import type ru from "../../localization/locales/ru.json";
import type uk from "../../localization/locales/uk.json";
import type zh from "../../localization/locales/zh.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "en";
    resources: {
      en: typeof en;
      uk: typeof uk;
      pl: typeof pl;
      fr: typeof fr;
      de: typeof de;
      be: typeof be;
      zh: typeof zh;
      es: typeof es;
      ru: typeof ru;
    };
  }
}
