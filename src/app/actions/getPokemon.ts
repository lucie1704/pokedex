import { PokemonType } from "../Types/Pokemon";

const baseUrl = "https://nestjs-pokedex-api.vercel.app";

export async function getPokemon(id: string): Promise<PokemonType> {
  const response = await fetch(baseUrl + "/pokemons/" + id);
  const data = response.json();

  return data;
}
