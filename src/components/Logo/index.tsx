import { Link } from "react-router";
import styles from "./index.module.scss";

const Logo = () => {
  return (
    <Link className={styles.logo} to="/" title="Home Page">
      <h4>
        Harry Potter <br />
        World
      </h4>
    </Link>
  );
};

export default Logo;
