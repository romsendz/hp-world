import styles from "./index.module.css";
import React from "react";

type ContainerProps = {
  children: React.ReactNode; // Specify children as the only prop
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
