import styles from "./index.module.scss";

interface TypographyProps {
  component: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

const Typography = ({
  component = "span",
  children,
  ...props
}: TypographyProps) => {
  const Tag = component;
  return (
    <Tag className={styles.typography} {...props}>
      {children}
    </Tag>
  );
};

export default Typography;
