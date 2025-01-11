import useBooksQuery from "../../assets/api/queries/useBooks";
import ErrorMessage from "../../layouts/ErrorMessage";
import Loading from "../../layouts/Loading";
import styles from "./index.module.scss";

const BooksList = () => {
  const { data: books, isLoading, isError, error } = useBooksQuery();
  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage error={error} />;
  return (
    <div className={styles.books}>
      {books?.map((book) => {
        return (
          <div key={book.index} className={styles.book}>
            <img
              src={book.cover}
              alt={book.title}
              className={styles.book__image}
            />
            <div className={styles.book__details}>
              <h2>{book.title}</h2>
              <hr />
              <p>{book.description}</p>
              <hr />
              <ul>
                <li>
                  Release Date:<b> {book.releaseDate}</b>
                </li>
                <li>
                  Number of pages: <b>{book.pages}</b>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BooksList;
