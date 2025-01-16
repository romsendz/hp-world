import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import fr from "./fr.json";
import uk from "./uk.json";
import it from "./it.json";
import es from "./es.json";
import pt from "./pt.json";

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      uk: { translation: uk },
      es: { translation: es },
      it: { translation: it },
      pt: { translation: pt },
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // React handles escaping
    },
    detection: {
      order: ["localStorage", "navigator"], // Detect from localStorage first, then browser
      caches: ["localStorage"], // Persist in localStorage
    },
    supportedLngs: ["en", "fr", "uk", "es", "it", "pt"], // Only these languages are supported
    load: "languageOnly", // Normalize detected language codes to base language (e.g., 'en-GB' -> 'en')
  });

export default i18next;
