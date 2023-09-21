import axios from "axios";

// Constants
import { API_HOST } from "../utils/constants";

// Función para obtener los pokemons
export const getPokemonsApi = async () => {
  try {
    const URL = `${API_HOST}/pokemon?limit=20&offset=0`;

    const { data } = await axios.get(URL);

    return data;
  } catch (error) {
    throw error;
  }
};

// Función para obtener la información de un pokemon
export const getPokemonDetailsByUrlApi = async (url) => {
  try {
    const { data } = await axios.get(url);

    return data;
  } catch (error) {
    throw error;
  }
};
