import useCharactersQuery from "../../assets/api/queries/useCharacters";
import ErrorMessage from "../../layouts/ErrorMessage";
import Loading from "../../layouts/Loading";
import styles from "./index.module.scss";

const Characters = () => {
  const { data: characters, isLoading, isError, error } = useCharactersQuery();
  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage error={error} />;
  return (
    <div className={styles.characters}>
      {characters?.map((character) => {
        return (
          <article className={styles.character} key={character.index}>
            <img
              src={character.image}
              alt={character.fullName}
              className={styles.character__image}
            />
            <div className={styles.character__details}>
              <h6>{character.fullName}</h6>
              <br />
              <ul>
                <li>
                  House:<b> {character.hogwartsHouse}</b>
                </li>
                <li>
                  Birth date: <b>{character.birthdate}</b>
                </li>
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Characters;
