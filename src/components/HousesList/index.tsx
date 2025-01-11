import useHousesQuery from "../../assets/api/queries/useHouses";
import ErrorMessage from "../../layouts/ErrorMessage";
import Loading from "../../layouts/Loading";
import styles from "./index.module.css";

const HousesList = () => {
  const { data: houses, isLoading, isError, error } = useHousesQuery();
  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage error={error} />;
  return (
    <div className={styles.houses}>
      {houses?.map((house) => {
        return (
          <div key={house.index}>
            <h2>{house.house}</h2>
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
          </div>
        );
      })}
    </div>
  );
};

export default HousesList;
