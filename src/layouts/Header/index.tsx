import styles from "./index.module.scss";
import Logo from "../../components/Logo";
import Container from "../Container";
import { NavLink, useLocation } from "react-router";
import LanguageDrowdown from "../../components/LanguageDropdown";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t } = useTranslation();
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__list__item}>
          <NavLink to="/books">{t("header.books")}</NavLink>
        </li>
        <li className={styles.nav__list__item}>
          <NavLink to="/characters">{t("header.characters")}</NavLink>
        </li>
        <li className={styles.nav__list__item}>
          <NavLink to="/houses">{t("header.houses")}</NavLink>
        </li>
        <li className={styles.nav__list__item}>
          <NavLink to="/spells">{t("header.spells")}</NavLink>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  const headerContentStyles = { rowGap: isHomePage ? "0" : "1em" };

  return (
    <header className={styles.header}>
      <Container maxWidth="1240px">
        <div className={styles.header__content} style={headerContentStyles}>
          <Logo />
          {!isHomePage && <Navigation />}
          <p
            style={{ gridArea: "language", justifySelf: "end" }}
            className="language"
          >
            <LanguageDrowdown />
          </p>
        </div>
      </Container>
    </header>
  );
};

export default Header;
