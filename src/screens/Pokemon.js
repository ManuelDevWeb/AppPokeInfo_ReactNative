import { useState, useEffect } from "react";
import { ScrollView } from "react-native";

// Icons
import Icon from "react-native-vector-icons/FontAwesome5";

// Functions API
import { getPokemonDetailsByIdApi } from "../api/pokemon";

// Components
import { Header } from "../components/Pokemon/Header";
import { Type } from "../components/Pokemon/Type";
import { Stats } from "../components/Pokemon/Stats";
import { Favorite } from "../components/Pokemon/Favorite";

// Custom Hook
import { useAuth } from "../hooks/useAuth";

const Pokemon = (props) => {
  // console.log("Pokemon", props);
  const {
    navigation,
    route: { params },
  } = props;

  const [pokemon, setPokemon] = useState(null);

  const { auth } = useAuth();

  // Se ejecuta cada que cambia el valor de los params y navigation
  useEffect(() => {
    // Modificamos la navegacion (Navigation solo llega cuando se trata de un screen)
    navigation.setOptions({
      headerRight: () => auth && <Favorite id={pokemon?.id} />,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          size={20}
          color="#fff"
          style={{ marginLeft: 15 }}
          onPress={
            // Lo devolvemos a la vista anterior
            navigation.goBack
          }
        />
      ),
    });
  }, [navigation, params, pokemon]);

  // Feth data
  const loadDetailsPokeom = async (id) => {
    try {
      const data = await getPokemonDetailsByIdApi(id);

      setPokemon(data);
    } catch (error) {
      console.log(error);
      // Lo devolvemos a la vista anterior
      navigation.goBack();
    }
  };

  // Se ejecuta cada que cambia el valor de los params
  useEffect(() => {
    loadDetailsPokeom(params.id);
  }, [params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} type={pokemon.types[0].type.name} />
    </ScrollView>
  );
};

export { Pokemon };
