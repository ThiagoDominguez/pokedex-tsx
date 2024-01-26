// NOTE API 2 https://unpkg.com/pokemon@2.3.6/data/es.json

export const fetchPokemons = async () => {
  const response = await fetch("https://unpkg.com/pokemon@2.3.6/data/es.json");

  if (!response.ok) {
    throw new Error("Failed to fetch pokemons");
  }

  const results = await response.json();
  console.log(results);

  const pokemons = results.map((pokemon: any) => ({
    name: pokemon.name,
    id: pokemon.national_number,
    imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`,
  }));

  const uniquePokemons = pokemons.filter(
    (pokemon: any, index: number) =>
      pokemons.findIndex((other: any) => other.id === pokemon.id) === index
  );

  return uniquePokemons;
};
