import styles from "./index.module.scss";
import Logo from "../../components/Logo";
import Container from "../Container";
import { NavLink, useLocation } from "react-router";

const Navigation = () => {
  
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__list__item}>
          <NavLink to="/books">
            Books
          </NavLink>
        </li>
        <li className={styles.nav__list__item}>
          <NavLink to="/characters">
            Characters
          </NavLink>
        </li>
        <li className={styles.nav__list__item}>
          <NavLink to="/houses">
            Houses
          </NavLink>
        </li>
        <li className={styles.nav__list__item}>
          <NavLink to="/spells">
            Spells
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  const headerContentStyles = {rowGap: isHomePage ? "0" : "1em"};

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
            LANG
          </p>
        </div>
      </Container>
    </header>
  );
};

export default Header;
