import clsx from "clsx";
import styles from "./index.module.css";
import React from "react";

type TitleProps = React.HTMLAttributes<HTMLHeadingElement>;

const Title = ({ children, className, ...props }: TitleProps) => {
  return (
    <h1 className={clsx(styles.title, className)} {...props}>
      {children}
    </h1>
  );
};

export default Title;
