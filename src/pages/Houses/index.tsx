import { useTranslation } from "react-i18next";
import useHousesQuery from "../../assets/api/queries/useHouses";
import ErrorMessage from "../../layouts/ErrorMessage";
import Loading from "../../layouts/Loading";
import styles from "./index.module.scss";

const Houses = () => {
  const { data: houses, isLoading, isError, error } = useHousesQuery();
  const { t } = useTranslation();
  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage error={error} />;
  return (
    <div className={styles.houses}>
      {houses?.map((house) => {
        return (
          <article key={house.index}>
            <h4>{house.house}</h4>
            <br />
            <ul>
              <li>
                {t("foundedBy")}:<b> {house.founder}</b>
              </li>
              <li>
                {t("symbol")}:<b> {house.animal} </b>
                <span>{house.emoji}</span>
              </li>
              <li>
                {t("colors")}:<b> {house.colors.join(", ")}</b>
              </li>
            </ul>
          </article>
        );
      })}
    </div>
  );
};

export default Houses;
