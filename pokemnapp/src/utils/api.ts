import axios from "axios";

export const fetchPokemon = async (id: number) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
    throw error;
  }
};
