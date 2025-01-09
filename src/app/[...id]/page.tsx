"use client";

import { useEffect, useState } from "react";
import { getPokemon } from "../actions/getPokemon";
import { useParams } from "next/navigation";
import { PokemonType } from "../Types/Pokemon";
import Image from "next/image";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState<PokemonType>();
  const { id } = useParams();

  useEffect(() => {
    async function fetchPokemon() {
      if (!id) {
        return;
      }

      try {
        const data = Array.isArray(id)
          ? await getPokemon(id[0])
          : await getPokemon(id);
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    }
    fetchPokemon();
  }, undefined);

  if (!pokemon) {
    return <div>No Pokemon found</div>;
  }

  const typesList =
    pokemon.types && Array.isArray(pokemon.types) ? (
      pokemon.types.map((type) => (
        <Image
          alt="Type Icon"
          key={type.id}
          width={20}
          height={20}
          src={type.image}
          className="object-cover"
        />
      ))
    ) : (
      <p>Pas de type </p>
    );

  return (
    <div className="flow-root bg-white p-10 m-5 rounded-xl">
      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Nom du Pokemon</dt>
          <dd className="sm:col-span-2">{pokemon.name}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Type(s)</dt>
          <dd className="sm:col-span-2 flex">{typesList}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Numéro dans le Pokedex</dt>
          <dd className="sm:col-span-2">{pokemon.pokedexId}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Photo</dt>
          {pokemon.image ? (
            <dd className="sm:col-span-2">
              <Image
                width={300}
                height={150}
                alt="Pokemon Photo"
                src={pokemon.image}
              />
            </dd>
          ) : (
            <dd>Pas de photo</dd>
          )}
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Évolution(s)</dt>
          {pokemon.evolutions ? (
            <dd className="sm:col-span-2">
              <a href={"/" + pokemon.evolutions.pokedexId}>
                {pokemon.evolutions.name}
              </a>
            </dd>
          ) : (
            <dd>Pas d&apos;évolution</dd>
          )}
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Statistiques</dt>
          <dd className="sm:col-span-2">
            {pokemon.stats ? (
              <div className="flex flex-wrap gap-4">
                <div className="w-1/2 sm:w-1/3 lg:w-1/4 p-4 bg-gray-100 rounded-lg shadow-md">
                  <div className="text-lg font-semibold text-center">HP</div>
                  <div className="text-xl font-bold text-center text-blue-600">
                    {pokemon.stats.HP}
                  </div>
                </div>

                <div className="w-1/2 sm:w-1/3 lg:w-1/4 p-4 bg-gray-100 rounded-lg shadow-md">
                  <div className="text-lg font-semibold text-center">
                    Vitesse
                  </div>
                  <div className="text-xl font-bold text-center text-blue-600">
                    {pokemon.stats.speed}
                  </div>
                </div>

                <div className="w-1/2 sm:w-1/3 lg:w-1/4 p-4 bg-gray-100 rounded-lg shadow-md">
                  <div className="text-lg font-semibold text-center">
                    Attaque
                  </div>
                  <div className="text-xl font-bold text-center text-blue-600">
                    {pokemon.stats.attack}
                  </div>
                </div>

                <div className="w-1/2 sm:w-1/3 lg:w-1/4 p-4 bg-gray-100 rounded-lg shadow-md">
                  <div className="text-lg font-semibold text-center">
                    Defense
                  </div>
                  <div className="text-xl font-bold text-center text-blue-600">
                    {pokemon.stats.defense}
                  </div>
                </div>

                <div className="w-1/2 sm:w-1/3 lg:w-1/4 p-4 bg-gray-100 rounded-lg shadow-md">
                  <div className="text-lg font-semibold text-center">
                    Attaque Spéciale
                  </div>
                  <div className="text-xl font-bold text-center text-blue-600">
                    {pokemon.stats.specialAttack}
                  </div>
                </div>

                <div className="w-1/2 sm:w-1/3 lg:w-1/4 p-4 bg-gray-100 rounded-lg shadow-md">
                  <div className="text-lg font-semibold text-center">
                    Défense Spéciale
                  </div>
                  <div className="text-xl font-bold text-center text-blue-600">
                    {pokemon.stats.specialDefense}
                  </div>
                </div>
              </div>
            ) : (
              <p>Pas de détail des statistiques</p>
            )}
          </dd>
        </div>
      </dl>
    </div>
  );
}
