import { Link } from "react-router";
import styles from "./index.module.scss";

const Logo = () => {
  return (
    <Link className={styles.logo} to="/" title="Home Page">
      <h5>
        Harry Potter <br />
        World
      </h5>
    </Link>
  );
};

export default Logo;
