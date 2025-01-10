import { baseUrl } from "../global";
import { PokemonType } from "../Types/Pokemon";

export async function getTypes(): Promise<PokemonType | null> {
  try {
    const response = await fetch(baseUrl + "/types");

    if (!response.ok) {
      throw new Error("Failed to fetch types");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching types:", error);
    return null;
  }
}
