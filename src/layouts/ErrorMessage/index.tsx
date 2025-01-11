import styles from "./index.module.scss";

interface ErrorMessageProps {
  error: Error | null;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <div className={styles.error}>
      <p>Something went wrong while fetching data...</p>
      <p>Please try again</p>
      <hr />
      <p>Error: {error?.message}</p>
    </div>
  );
};

export default ErrorMessage;
