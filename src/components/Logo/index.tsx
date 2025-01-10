import { Link } from "react-router";
import styles from "./index.module.css";

const Logo = () => {
  return (
    <Link className={styles.logo} to="/">
      Harry Potter <br />
      World
    </Link>
  );
};

export default Logo;
