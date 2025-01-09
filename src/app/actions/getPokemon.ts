import { baseUrl } from "../global";
import { PokemonType } from "../Types/Pokemon";

export async function getPokemon(id: string): Promise<PokemonType | null> {
  try {
    const response = await fetch(baseUrl + "/pokemons/" + id);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch Pokémon with ID ${id}: ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    return null;
  }
}
