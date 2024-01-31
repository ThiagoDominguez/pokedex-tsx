import { PokemonDetails } from "../types/types";
import { formatName } from "../utils/utils";

// NOTE API https://pokeapi.co/api/v2/pokemon/
export async function fetchPoke(name: string): Promise<PokemonDetails> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${formatName(name)}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch ${name}`);
  }

  const results = await response.json();
  const pokemon = {
    name: results.name,
    id: results.id,
    imgSrc: results.sprites.front_default,
    hp: results.stats[0].base_stat,
    attack: results.stats[1].base_stat,
    defense: results.stats[2].base_stat,
  };
  return pokemon;
}
