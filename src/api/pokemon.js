import axios from "axios";

// Constants
import { API_HOST } from "../utils/constants";

// Función para obtener los pokemons
export const getPokemonsApi = async (endpointNext) => {
  try {
    let URL;

    if (endpointNext === null) {
      URL = `${API_HOST}/pokemon?limit=20&offset=0`;
    } else {
      URL = endpointNext;
    }

    const { data } = await axios.get(endpointNext || URL);

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
