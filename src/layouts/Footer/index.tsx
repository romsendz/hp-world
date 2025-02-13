import GithubLogo from "../../assets/svgs/github.svg?react";
import Container from "../Container";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container maxWidth="1240px">
        <a
          className={styles.credits}
          href="https://github.com/romsendz/hp-world"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubLogo width={"1.5em"} />
          Credits
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
