import { StyleSheet, Text, FlatList } from "react-native";

// Components
import { PokemonCard } from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <FlatList
      // Datos que se van a renderizar
      data={pokemons}
      // Key
      keyExtractor={(pokemon) => String(pokemon.id)}
      // Numero de columnas
      numColumns={2}
      // Ocultar barra de scroll
      showsVerticalScrollIndicator={false}
      // Item a renderizar
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      // Styles
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
};

// Creando estilos
const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    paddingVertical: 40,
  },
});

export { PokemonList };
