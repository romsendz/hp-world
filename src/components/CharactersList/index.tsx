import useCharactersQuery from "../../assets/api/queries/useCharacters";
import ErrorMessage from "../../layouts/ErrorMessage";
import Loading from "../../layouts/Loading";
import styles from "./index.module.css";

const CharactersList = () => {
  const { data: characters, isLoading, isError, error } = useCharactersQuery();
  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage error={error} />;
  return (
    <div className={styles.characters}>
      {characters?.map((character) => {
        return (
          <div className={styles.character} key={character.index}>
            <img
              src={character.image}
              alt={character.fullName}
              className={styles.character__img}
            />
            <div className={styles.character__details}>
              <h2>{character.fullName}</h2>
              <ul>
                <li>
                  House:<b> {character.hogwartsHouse}</b>
                </li>
                <li>
                  Birth date: <b>{character.birthdate}</b>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CharactersList;
