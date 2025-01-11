import styles from "./index.module.css";
import Logo from "../../components/Logo";
import Container from "../Container";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className={styles.header} title="Home Page">
      <Container maxWidth="1240px">
        <nav className={styles.nav}>
          <Logo />
          <ul className={styles.nav__links}>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <Link to="/houses">Houses</Link>
            </li>
            <li>
              <Link to="/spells">Spells</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
