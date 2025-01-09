import { PokemonType } from "../Types/Pokemon";

const baseUrl = "https://nestjs-pokedex-api.vercel.app";

export async function getPokemons(): Promise<Array<PokemonType>> {
  const response = await fetch(baseUrl + "/pokemons");
  const data = response.json();

  return data;
}
