import Title from "../../components/Title";
import Categories from "../../components/Categories";

const Home = () => {
  return (
    <>
      <Title style={{ fontSize: "2em", margin: "2em 0" }}>Select topic</Title>
      <Categories />
    </>
  );
};

export default Home;
