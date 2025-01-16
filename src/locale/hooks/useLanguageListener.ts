import { useState, useEffect } from "react";
import i18next from "i18next";

const useLanguageListener = (): string => {
  // Initialize with the normalized language
  const [language, setLanguage] = useState<string>(
    i18next.resolvedLanguage || "en"
  );

  useEffect(() => {
    const handleLanguageChange = () => {
      // Update the state with the resolved language whenever it changes
      setLanguage(i18next.resolvedLanguage || "en");
    };

    i18next.on("languageChanged", handleLanguageChange);

    return () => {
      i18next.off("languageChanged", handleLanguageChange); // Cleanup listener
    };
  }, []);

  return language;
};

export default useLanguageListener;
