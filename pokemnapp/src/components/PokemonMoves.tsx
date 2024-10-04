import React from "react";

interface PokemonMovesProps {
  moves: any[];
}

const PokemonMoves: React.FC<PokemonMovesProps> = ({ moves }) => {
  return (
    <div className="bg-gray-100 p-4 rounded">
      <h2 className="text-xl font-bold mb-2">Moves</h2>
      <ul>
        {moves.map((move: any) => (
          <li key={move.move.name} className="capitalize">
            {move.move.name.replace("-", " ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonMoves;
