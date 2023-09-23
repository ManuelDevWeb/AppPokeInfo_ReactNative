import { useState, useEffect } from "react";
import { View, Text } from "react-native";

// Functions API
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";

// Components
import { PokemonList } from "../components/PokemonList";

const PokeList = () => {
  const [pokemons, setPokemons] = useState([]);

  // Fetch data
  const loadPokemons = async () => {
    try {
      const dataPokemons = await getPokemonsApi();

      const pokemonsArray = await Promise.all(
        dataPokemons.results.map(async (pokemon) => {
          const pokemonInfo = await getPokemonDetailsByUrlApi(pokemon.url);

          return {
            id: pokemonInfo.id,
            name: pokemonInfo.name,
            type: pokemonInfo.types[0].type.name,
            order: pokemonInfo.order,
            image: pokemonInfo.sprites.other["official-artwork"].front_default,
          };
        })
      );

      // Necesitamos spread operator para la paginacion
      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.log(error);
    }
  };

  // Se ejecuta cuando se monta el componente
  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <View>
      <PokemonList pokemons={pokemons} />
    </View>
  );
};

export { PokeList };
