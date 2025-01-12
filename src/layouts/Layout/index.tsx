import Container from "../Container";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./index.module.scss";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Container maxWidth="1240px">{children}</Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
