import { useTranslation } from "react-i18next";

type LocalizeOptions = Intl.DateTimeFormatOptions;

const useLocalizer = () => {
  const { i18n } = useTranslation();

  /**
   * Localizes a given date based on the current language.
   * @param date - The date to localize. Can be a Date object, string, or number.
   * @param options - Optional Intl.DateTimeFormat options.
   * @returns A localized date string.
   */
  const localize = (
    date: Date | string | number,
    options: LocalizeOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  ): string => {
    const parsedDate = new Date(date);

    if (isNaN(parsedDate.getTime())) {
      // Handle invalid date
      console.warn(`Invalid date provided: ${date}`);
      return "";
    }

    try {
      return new Intl.DateTimeFormat(i18n.language, options).format(parsedDate);
    } catch {
      // Fallback for unsupported locales or invalid options
      return parsedDate.toLocaleDateString("en-US", options);
    }
  };

  return { localize };
};

export default useLocalizer;
