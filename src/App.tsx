import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/App.css";
import { Poke, Pokemons, Items } from "./pages/";

const App = () => {
  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/pokemons/:name" element={<Poke />} />
            <Route path="/pokemons" element={<Pokemons />} />
            <Route path="/items" element={<Items />} />
            <Route path="/" element={<Pokemons />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
