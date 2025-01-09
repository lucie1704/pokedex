import { baseUrl } from "../global";
import { PokemonType } from "../Types/Pokemon";

export async function getTypes(id: string): Promise<PokemonType | null> {
  try {
    const response = await fetch(baseUrl + "/types/" + id);

    if (!response.ok) {
      throw new Error(`Failed to fetch types ${id}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching types:", error);
    return null;
  }
}
