export interface PokemonType {
  name: string;
  pokedexId: number;
  image: string;
  stats: StatsType;
  generation: number;
  evolutions: EvolutionType;
  types: Array<TypeType>;
}

export interface StatsType {
  HP: number;
  speed: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
}

type EvolutionType = Pick<PokemonType, "name" | "pokedexId">;

export interface TypeType {
  id: number;
  name: string;
  image: string;
}
