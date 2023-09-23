import { useState, useEffect } from "react";
import { View, Text } from "react-native";

// Functions API
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";

// Components
import { PokemonList } from "../components/PokemonList";

const PokeList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch data
  const loadPokemons = async () => {
    try {
      setLoading(true);

      const dataPokemons = await getPokemonsApi(nextUrl);

      setNextUrl(dataPokemons.next);

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
    } finally {
      setLoading(false);
    }
  };

  // Se ejecuta cuando se monta el componente
  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <View>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
        isLoading={loading}
      />
    </View>
  );
};

export { PokeList };
