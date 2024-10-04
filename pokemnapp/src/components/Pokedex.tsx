"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import PokemonInfo from "./PokemonInfo";
import PokemonMoves from "./PokemonMoves";
import { fetchPokemon } from "../utils/api";

const Pokedex: React.FC = () => {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemon, setPokemon] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<"info" | "moves">("info");

  useEffect(() => {
    const loadPokemon = async () => {
      const data = await fetchPokemon(pokemonId);
      setPokemon(data);
    };
    loadPokemon();
  }, [pokemonId]);

  const handlePrevious = () => {
    if (pokemonId > 1) setPokemonId(pokemonId - 1);
  };

  const handleNext = () => {
    setPokemonId(pokemonId + 1);
  };

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-2xl font-bold mb-4">
        Bits of Good Mid-Semester Project
      </h1>
      <div className="mb-4">
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width={200}
          height={200}
          className="mx-auto"
        />
        <p className="text-center text-xl capitalize">{pokemon.name}</p>
        <div className="flex justify-center mt-2">
          {pokemon.types.map((type: any) => (
            <span
              key={type.type.name}
              className="px-2 py-1 rounded mr-2 text-xs"
              style={{ backgroundColor: `#${getTypeColor(type.type.name)}` }}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-between mb-4">
        <button
          onClick={handlePrevious}
          className="bg-gray-200 px-4 py-2 rounded"
        >
          &lt;
        </button>
        <button onClick={handleNext} className="bg-gray-200 px-4 py-2 rounded">
          &gt;
        </button>
      </div>
      <div className="flex mb-4">
        <button
          onClick={() => setActiveTab("info")}
          className={`flex-1 py-2 ${
            activeTab === "info" ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
        >
          Info
        </button>
        <button
          onClick={() => setActiveTab("moves")}
          className={`flex-1 py-2 ${
            activeTab === "moves" ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
        >
          Moves
        </button>
      </div>
      {activeTab === "info" ? (
        <PokemonInfo pokemon={pokemon} />
      ) : (
        <PokemonMoves moves={pokemon.moves} />
      )}
    </div>
  );
};

export default Pokedex;

const getTypeColor = (type: string): string => {
  const colors: { [key: string]: string } = {
    normal: "A8A77A",
    fire: "EE8130",
    water: "6390F0",
    electric: "F7D02C",
    grass: "7AC74C",
    ice: "96D9D6",
    fighting: "C22E28",
    poison: "A33EA1",
    ground: "E2BF65",
    flying: "A98FF3",
    psychic: "F95587",
    bug: "A6B91A",
    rock: "B6A136",
    ghost: "735797",
    dragon: "6F35FC",
    dark: "705746",
    steel: "B7B7CE",
    fairy: "D685AD",
  };
  return colors[type] || "CCCCCC";
};
