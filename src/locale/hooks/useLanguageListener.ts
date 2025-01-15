import { useState, useEffect } from "react";
import i18n from "i18next";

const useLanguageListener = (): string => {
  const [language, setLanguage] = useState(i18n.language); // Initialize with the current language

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setLanguage(lng); // Update state when language changes
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange); // Cleanup listener
    };
  }, []);

  return language;
};

export default useLanguageListener;
