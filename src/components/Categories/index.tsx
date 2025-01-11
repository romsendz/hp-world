import styles from "./index.module.scss";
import booksImg from "../../assets/images/books.webp";
import charactersImg from "../../assets/images/characters.webp";
import housesImg from "../../assets/images/houses.webp";
import spellsImg from "../../assets/images/spells.webp";
import { Link } from "react-router";

const CATEGORIES = [
  {
    path: "/books",
    image: booksImg,
  },
  {
    path: "/characters",
    image: charactersImg,
  },
  {
    path: "/houses",
    image: housesImg,
  },
  {
    path: "/spells",
    image: spellsImg,
  },
];

const Categories = () => {
  return (
    <div className={styles.categories}>
      {CATEGORIES.map((category) => {
        return (
          <Link
            key={category.path}
            className={styles.category}
            to={category.path}
          >
            <img
              src={category.image}
              alt={category.path}
              className={styles.category__image}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
