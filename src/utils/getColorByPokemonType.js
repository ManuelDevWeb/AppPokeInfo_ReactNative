// Constants
import { POKEMON_TYPE_COLOR } from "./constants";

const getColorByPokemonType = (type) => {
  return POKEMON_TYPE_COLOR[type.toLowerCase()];
};

export { getColorByPokemonType };
