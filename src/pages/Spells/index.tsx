import { useTranslation } from "react-i18next";
import useSpellsQuery from "../../assets/api/queries/useSpells";
import ErrorMessage from "../../layouts/ErrorMessage";
import Loading from "../../layouts/Loading";
import styles from "./index.module.scss";

const Spells = () => {
  const { data: spells, isLoading, isError, error } = useSpellsQuery();
  const { t } = useTranslation();
  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage error={error} />;
  return (
    <table className={styles.spells}>
      <thead>
        <tr>
          <th>{t("spell")}</th>
          <th>{t("action")}</th>
        </tr>
      </thead>
      <tbody>
        {spells?.map((spell) => {
          return (
            <tr key={spell.index}>
              <td>{spell.spell}</td>
              <td>{spell.use}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Spells;
