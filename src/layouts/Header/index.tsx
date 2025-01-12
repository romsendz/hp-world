import styles from "./index.module.scss";
import Logo from "../../components/Logo";
import Container from "../Container";
import { NavLink, useLocation } from "react-router";
import clsx from "clsx";

const Navigation = () => {
  const navLinkClassName = ({ isActive }: { isActive: boolean }) => {
    return clsx(styles.nav__link, {
      [styles["nav__link--active"]]: isActive,
    });
  };
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__links}>
        <li>
          <NavLink className={navLinkClassName} to="/books">
            Books
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkClassName} to="/characters">
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkClassName} to="/houses">
            Houses
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkClassName} to="/spells">
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
  return (
    <header className={styles.header}>
      <Container maxWidth="1240px">
        <div className={styles.header__content}>
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
