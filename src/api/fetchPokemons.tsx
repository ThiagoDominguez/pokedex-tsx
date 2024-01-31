// NOTE API 2 https://unpkg.com/pokemon@2.3.6/data/es.json

import { Pokemon } from "../types/types";
import { formatName } from "../utils/utils";

export async function fetchPokemons(): Promise<Pokemon[]> {
  const response = await fetch(
    "https://unpkg.com/pokemons@1.1.0/pokemons.json"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch pokemons");
  }

  const results = await response.json();

  const pokemons = results.results.map((pokemon: any) => ({
    name: pokemon.name,
    id: pokemon.national_number,
    imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatName(
      pokemon.name.toLowerCase()
    )}.gif`,
  }));

  const uniquePokemons = pokemons?.filter(
    (pokemon: any, index: number) =>
      pokemons.findIndex((other: any) => other.id === pokemon.id) === index
  );

  return uniquePokemons;
}
