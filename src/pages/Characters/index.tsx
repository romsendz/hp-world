import { useTranslation } from "react-i18next";
import useCharactersQuery from "../../assets/api/queries/useCharacters";
import ErrorMessage from "../../layouts/ErrorMessage";
import Loading from "../../layouts/Loading";
import styles from "./index.module.scss";
import useLocalizer from "../../locale/hooks/useLocalizer";

const Characters = () => {
  const { data: characters, isLoading, isError, error } = useCharactersQuery();
  const { t } = useTranslation();
  const { localize } = useLocalizer();
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
              <h5>{character.fullName}</h5>
              <br />
              <ul>
                <li>
                  {t("house")}:<b> {character.hogwartsHouse}</b>
                </li>
                <li>
                  {t("birthDate")}: <b>{localize(character.birthdate)}</b>
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
