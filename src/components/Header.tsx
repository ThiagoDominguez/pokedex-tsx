import styles from "./header.module.css";

type Headerprops = {
  query: string;
  setQuery: (query: string) => void;
};

const Header = ({ query, setQuery }: Headerprops) => {
  return (
    <header className={styles.header}>
      <h1>POKEDEX</h1>
      <input
        className={styles.input}
        type="text"
        placeholder="Search a pokemon"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </header>
  );
};

export default Header;
