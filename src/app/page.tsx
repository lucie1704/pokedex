"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import PokemonCard from "../components/PokemonCard";
import { getPokemons } from "./actions/getPokemons";
import { PokemonType } from "./Types/Pokemon";

export default function Home() {
  const [pokemons, setPokemons] = useState<Array<PokemonType>>([]);

  useEffect(() => {
    async function fetchPokemons() {
      const data = await getPokemons();
      setPokemons(data);
    }
    fetchPokemons();
  }, []);

  const pokemonCardsList = pokemons.map((pokemon) => (
    <PokemonCard pokemon={pokemon} key={pokemon.pokedexId} />
  ));

  return (
    <>
      <Header />
      <main className="flex flex-wrap gap-4">
        {pokemons.length > 0 ? pokemonCardsList : <p>Chargement...</p>}
      </main>
    </>
  );
}
