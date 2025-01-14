import useBooksQuery from "../../assets/api/queries/useBooks";
import ErrorMessage from "../../layouts/ErrorMessage";
import Loading from "../../layouts/Loading";
import styles from "./index.module.scss";

const Books = () => {
  const { data: books, isLoading, isError, error } = useBooksQuery();
  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage error={error} />;
  return (
    <div className={styles.books}>
      {books?.map((book) => {
        return (
          <article key={book.index} className={styles.book}>
            <h4 className={styles.book__title}>{book.title}</h4>
            <img
              src={book.cover}
              alt={book.title}
              className={styles.book__image}
            />
            <div className={styles.book__details}>
              <h5 className={styles.book__details__title}>{book.title}</h5>
              <hr className={styles.book__details__divider} />
              <p className={styles.book__details__description}>
                {book.description}
              </p>
              <hr className={styles.book__details__divider} />
              <ul>
                <li>
                  Release Date:<b> {book.releaseDate}</b>
                </li>
                <li>
                  Number of pages: <b>{book.pages}</b>
                </li>
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Books;
