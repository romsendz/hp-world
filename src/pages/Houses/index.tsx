import useHousesQuery from "../../assets/api/queries/useHouses";
import ErrorMessage from "../../layouts/ErrorMessage";
import Loading from "../../layouts/Loading";
import styles from "./index.module.scss";

const Houses = () => {
  const { data: houses, isLoading, isError, error } = useHousesQuery();
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
                Founder:<b> {house.founder}</b>
              </li>
              <li>
                Animal:
                <b> {house.animal} </b>
                <span>{house.emoji}</span>
              </li>
              <li>
                Colors:<b> {house.colors.join(", ")}</b>
              </li>
            </ul>
          </article>
        );
      })}
    </div>
  );
};

export default Houses;
