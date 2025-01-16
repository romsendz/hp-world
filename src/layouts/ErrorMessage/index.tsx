interface ErrorMessageProps {
  error: Error | null;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <>
      <h6>Something went wrong while fetching data...</h6>
      <p>Please try again</p>
      <hr />
      <p>
        Error: {error?.message}
        {error?.name}
      </p>
    </>
  );
};

export default ErrorMessage;
