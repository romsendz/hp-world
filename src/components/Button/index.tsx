import styles from "./index.module.css";
import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={clsx(styles.button, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
