import { useEffect, useState } from "react";
import { Footer, Header, LoadingScreen } from "../components";
import { Link } from "react-router-dom";

/* The line `import styles from "./pokemons.module.css";` is importing a CSS module file named
"pokemons.module.css". This allows the component to access the CSS styles defined in that module.
The `styles` object can be used to reference specific CSS classes defined in the module. */
import styles from "./pokemons.module.css";
import { fetchPokemons } from "../api/fetchPokemons";
import { Pokemon } from "../types/types";
import { formatName, waitFor } from "../utils/utils";

const Pokemons = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      setIsLoading(true);
      await waitFor(1000);
      const allPokemons = await fetchPokemons();
      setPokemons(allPokemons);
      setIsLoading(false);
    };
    fetchAllPokemons();
  }, []);

  /* The code block `if (isLoading || !pokemons) { return <LoadingScreen />; }` is checking if the
  `isLoading` state is true or if the `pokemons` state is empty. If either of these conditions is
  true, it means that the data is still being loaded or has not been fetched yet. In this case, the
  component will render a `LoadingScreen` component to indicate that the data is being loaded. */
  if (isLoading || !pokemons) {
    return <LoadingScreen />;
  }

  const filteredPokemons = pokemons?.filter((pokemon) =>
    pokemon.name.toLowerCase().match(query.toLowerCase())
  );

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>
        <nav>
          {filteredPokemons?.map((pokemon): any => {
            return (
              <Link
                key={pokemon.id}
                to={`/pokemons/${pokemon.name.toLowerCase()}`}
                className={styles.listItem}
              >
                <img
                  src={pokemon.imgSrc}
                  alt={formatName(pokemon?.name)}
                  className={styles.listItemIcon}
                />
                <div className={styles.listItemText}>
                  <span>{pokemon.name}</span>
                  <span>{pokemon.id}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default Pokemons;
