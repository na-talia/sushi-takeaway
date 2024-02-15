import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Promotions from "./components/promotions/Promotions";
import Slogan from "./components/Slogan";

function App() {
  return (
    <div className="">
      <NavBar />
      <Promotions />
      <Slogan />
    </div>
  );
}

export default App;
