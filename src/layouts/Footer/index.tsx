import Container from "../Container";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container maxWidth="1240px">
        <a
          className={styles.credits}
          href="https://github.com/RomanSendziuk/harry-potter-characters"
          target="_blank"
          rel="noopener noreferrer"
        >
          (ICON) Credits
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
