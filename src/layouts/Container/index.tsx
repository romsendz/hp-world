// Desc: Container layout component

interface ContainerProps {
  children: React.ReactNode;
  maxWidth: string;
}

const Container = ({ children, maxWidth }: ContainerProps) => {
  return (
    <div style={{ margin: "0 auto", width: "100%", maxWidth: maxWidth }}>
      {children}
    </div>
  );
};

export default Container;
