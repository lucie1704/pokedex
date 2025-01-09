"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import PokemonCard from "../components/PokemonCard";
import { getPokemons } from "./actions/getPokemons";
import { PokemonType } from "./Types/Pokemon";

export default function Home() {
  const [pokemons, setPokemons] = useState<Array<PokemonType>>([]);

  const handleSearch = async (query: string) => {
    const data = await getPokemons({ query });
    setPokemons(data);
  };

  useEffect(() => {
    handleSearch("");
  }, []);

  const pokemonCardsList = pokemons.map((pokemon) => (
    <PokemonCard pokemon={pokemon} key={pokemon.pokedexId} />
  ));

  return (
    <>
      <Header onSearch={handleSearch} />
      <main className="flex flex-wrap gap-4">
        {pokemons.length > 0 ? pokemonCardsList : <p>Chargement...</p>}
      </main>
    </>
  );
}
