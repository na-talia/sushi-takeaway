import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Promotions from "./components/promotions/Promotions";
import Slogan from "./components/Slogan";
import Title from "./components/Title";
import SushiByCategory from "./components/sushi-by-category/SushiByCategory";
import PopularProducts from "./components/PopularProducts";
import Reviews from "./components/reviews/Reviews";

function App() {
  return (
    <div className="">
      <NavBar />
      <Promotions />
      <Slogan />
      <Title text="Test" />
      <SushiByCategory />
      <PopularProducts />
      <Reviews />
    </div>
  );
}

export default App;
