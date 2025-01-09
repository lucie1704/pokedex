"use client";

import Image from "next/image";
import { PokemonType } from "../app/Types/Pokemon";

type PokemonCardProps = {
  pokemon: PokemonType;
};
export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const typesList = pokemon.types.map((type) => (
    <Image
      alt="Type Icon"
      key={type.id}
      width={20}
      height={20}
      src={type.image}
      className="object-cover"
    />
  ));

  return (
    <a
      href={"/" + pokemon.pokedexId}
      className="bg-white rounded-xl m-3 block w-fit"
    >
      <div className="w-44 h-36 p-3">
        <Image
          width={300}
          height={150}
          alt="Pokemon Photo"
          src={pokemon.image}
          className="object-cover"
        />
      </div>
      <div className="text-center bg-gray-100 rounded-b-xl">
        <h3 className="mt-4 text-lg pt-2 font-bold">{pokemon.name}</h3>
        <p>#{pokemon.pokedexId}</p>
        <div className="pb-3 flex justify-center">{typesList}</div>
      </div>
    </a>
  );
}
