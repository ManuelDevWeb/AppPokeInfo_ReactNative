import { useState, useCallback } from "react";
import { View, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

// Functions API
import { getPokemonDetailsByIdApi } from "../api/pokemon";

// Function to get favorites
import { getPokemonsFavoritesApi } from "../api/favorite";

// Custom hook
import { useAuth } from "../hooks/useAuth";

// Components
import { PokemonList } from "../components/PokemonList";
import { NoLogged } from "../components/NoLogged";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);

  // Custom hook para obtener los valores (states) del contexto AuthContext
  const { auth } = useAuth();

  // Se usa focus effect ya que en movil la screen no se desmonta. Cuando cambiamos de screen y volvemos a ella cambia es el "focus"
  useFocusEffect(
    useCallback(() => {
      if (auth) {
        const getFavorites = async () => {
          const response = await getPokemonsFavoritesApi();

          const pokemonsArray = await Promise.all(
            response.map(async (pokemon) => {
              const pokemonInfo = await getPokemonDetailsByIdApi(pokemon);

              return {
                id: pokemonInfo.id,
                name: pokemonInfo.name,
                type: pokemonInfo.types[0].type.name,
                order: pokemonInfo.order,
                image:
                  pokemonInfo.sprites.other["official-artwork"].front_default,
              };
            })
          );

          setFavorites(pokemonsArray);
        };
        getFavorites();
      }
    }, [])
  );

  return !auth ? (
    <NoLogged />
  ) : (
    <View>
      <PokemonList pokemons={favorites} />
    </View>
  );
};

export { Favorite };
