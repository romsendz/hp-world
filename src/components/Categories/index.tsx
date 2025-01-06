import { useNavigate } from "react-router";
import Button from "../Button";
import styles from "./index.module.css";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.categories}>
      <article className={styles.category}>
        <img src="./images/students.png" alt="students" />
        <Button
          className={styles.category__button}
          onClick={() => navigate("/students")}
        >
          Students
        </Button>
      </article>
      <article className={styles.category}>
        <img src="./images/staff.png" alt="staff" />
        <Button
          className={styles.category__button}
          onClick={() => navigate("/students")}
        >
          Staff
        </Button>
      </article>
      <article className={styles.category}>
        <img src="./images/houses.png" alt="houses" />
        <Button
          className={styles.category__button}
          onClick={() => navigate("/students")}
        >
          Houses
        </Button>
      </article>
    </div>
  );
};

export default Categories;
