import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
} from "react-native";

// Components
import { PokemonCard } from "./PokemonCard";

const PokemonList = ({ pokemons, loadPokemons, isNext, isLoading }) => {
  // Funcion para cargar mas pokemons
  const loadMore = () => {
    loadPokemons();
  };

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
      // Funcion que se dispara al final de la lista y un delay de 0.1
      onEndReached={!isLoading && isNext && loadMore}
      onEndReachedThreshold={0.1}
      // Loader en el footer
      ListFooterComponent={
        isNext &&
        isLoading && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        )
      }
    />
  );
};

// Creando estilos
const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  },
});

export { PokemonList };
