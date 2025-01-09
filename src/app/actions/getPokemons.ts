import { baseUrl } from "../global";
import { PokemonType } from "../Types/Pokemon";

type searchParams = {
  query?: string;
};

export async function getPokemons(
  params?: searchParams
): Promise<Array<PokemonType>> {
  let queryUrl = "";

  if (params && params.query) {
    queryUrl = `?name=${params.query}`;
  }

  try {
    const response = await fetch(baseUrl + "/pokemons" + queryUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch from API");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    return [];
  }
}
