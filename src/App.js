import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Promotions from "./components/promotions/Promotions";
import Slogan from "./components/Slogan";
import Title from "./components/Title";

function App() {
  return (
    <div className="">
      <NavBar />
      <Promotions />
      <Slogan />
      <Title text="Test" />
    </div>
  );
}

export default App;
