import { useState } from "react";
import { Footer, Header } from "../components";
import { Link } from "react-router-dom";

import Bulbasaur from "../assets/bulbasaur.gif";
import styles from "./pokemons.module.css";
const Pokemons = () => {
  const [query, setQuery] = useState("");

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>
        <nav>
          <Link to={"/"} className={styles.listItem}>
            <img src={Bulbasaur} alt="" className={styles.listItemIcon} />
            <div className={styles.listItemText}>
              <span>Bulbasaur</span>
              <span>001</span>
            </div>
          </Link>
          <hr />
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default Pokemons;
