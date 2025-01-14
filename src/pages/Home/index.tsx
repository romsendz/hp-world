import styles from "./index.module.scss";
import booksImg from "../../assets/images/books.webp";
import charactersImg from "../../assets/images/characters.webp";
import housesImg from "../../assets/images/houses.webp";
import spellsImg from "../../assets/images/spells.webp";
import { Link } from "react-router";

const CATEGORIES = [
  {
    name: "Books",
    path: "/books",
    image: booksImg,
  },
  {
    name: "Characters",
    path: "/characters",
    image: charactersImg,
  },
  {
    name: "Houses",
    path: "/houses",
    image: housesImg,
  },
  {
    name: "Spells",
    path: "/spells",
    image: spellsImg,
  },
];

const Home = () => {
  return (
    <>
      <div className={styles.hero}>
        <h1 className={styles.hero__title}>
          Welcome to the Harry Potter World!
        </h1>
        <h5>Explore the categories below:</h5>
      </div>
      <div className={styles.categories}>
        {CATEGORIES.map((category) => {
          return (
            <Link
              key={category.path}
              className={styles.category}
              to={category.path}
            >
              <h2 className="sr-only">{category.name}</h2>
              <img
                src={category.image}
                alt={category.path}
                className={styles.category__image}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;
