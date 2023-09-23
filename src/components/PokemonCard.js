import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { capitalize } from "lodash";

// Utils
import { getColorByPokemonType } from "../utils/getColorByPokemonType";

const PokemonCard = ({ pokemon }) => {
  const { id, image, name, order, type } = pokemon;

  // Tomamos los estilos definidos en el stylesheet y agregamos el color de fondo dependiendo del tipo de pokemon
  const bgStylesCard = {
    ...styles.bgCard,
    backgroundColor: getColorByPokemonType(type),
  };

  // Funcion para navegar a la vista de pokemon
  const goToPokemon = () => {
    console.log("Go to pokemon", name);
  };

  return (
    // Touchable permite que el componente sea clickeable y acceder a su vista
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStylesCard}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.title}>{capitalize(name)}</Text>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

// Creando estilos
const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgCard: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "white",
    fontSize: 11,
  },
  title: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});

export { PokemonCard };
