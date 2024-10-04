import React from "react";

interface PokemonInfoProps {
  pokemon: any;
}

const PokemonInfo: React.FC<PokemonInfoProps> = ({ pokemon }) => {
  return (
    <div className="bg-gray-100 p-4 rounded">
      <h2 className="text-xl font-bold mb-2">Info</h2>
      <ul>
        <li>Height: {pokemon.height / 10}m</li>
        <li>Weight: {pokemon.weight / 10}kg</li>
        <li>
          HP:{" "}
          {pokemon.stats.find((stat: any) => stat.stat.name === "hp").base_stat}
        </li>
        <li>
          Attack:{" "}
          {
            pokemon.stats.find((stat: any) => stat.stat.name === "attack")
              .base_stat
          }
        </li>
        <li>
          Defense:{" "}
          {
            pokemon.stats.find((stat: any) => stat.stat.name === "defense")
              .base_stat
          }
        </li>
        <li>
          Special Attack:{" "}
          {
            pokemon.stats.find(
              (stat: any) => stat.stat.name === "special-attack"
            ).base_stat
          }
        </li>
        <li>
          Special Defense:{" "}
          {
            pokemon.stats.find(
              (stat: any) => stat.stat.name === "special-defense"
            ).base_stat
          }
        </li>
        <li>
          Speed:{" "}
          {
            pokemon.stats.find((stat: any) => stat.stat.name === "speed")
              .base_stat
          }
        </li>
      </ul>
    </div>
  );
};

export default PokemonInfo;
