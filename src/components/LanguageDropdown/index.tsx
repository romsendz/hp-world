import i18next from "i18next";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";

const LanguageDrowdown = () => {
  const resources = i18next.options.resources || {};
  const languages = Object.keys(resources);
  const { i18n } = useTranslation();
  return (
    <select
      className={styles.language}
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
    >
      {languages.map((language) => (
        <option
          key={language}
          value={language}
          className={styles.language__option}
        >
          {language.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default LanguageDrowdown;
