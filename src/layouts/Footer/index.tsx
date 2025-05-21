import Container from "../Container";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container maxWidth="1240px">
        <span className={styles.credits}>
          Designed and developed by{" "}
          <a
            href="https://portfolio-romsendz.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Roman Sendziuk
          </a>
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
