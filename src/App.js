import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Promotions from "./components/promotions/Promotions";
import Slogan from "./components/Slogan";
import Title from "./components/Title";
import SushiCategoryContainer from "./components/sushi-by-category/SushiCategoryContainer";

function App() {
  return (
    <div className="">
      <NavBar />
      <Promotions />
      <Slogan />
      <Title text="Test" />
      <SushiCategoryContainer />
    </div>
  );
}

export default App;
