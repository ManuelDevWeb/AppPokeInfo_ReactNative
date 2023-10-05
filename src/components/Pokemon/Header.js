import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";

// Lodash (Array functions)
import { capitalize } from "lodash";

// Utils
import { getColorByPokemonType } from "../../utils/getColorByPokemonType";

const Header = ({ name, order, type, image }) => {
  // Obtenemos el color en hexadecimal dependiendo del tipo de pokemon
  const color = getColorByPokemonType(type);

  const bgStyle = {
    ...styles.bgCard,
    backgroundColor: color,
  };

  return (
    <>
      <View style={bgStyle} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
};

// Creando estilos
const styles = StyleSheet.create({
  bgCard: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 30,
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 27,
  },
  order: {
    color: "#fff",
    fontWeight: "bold",
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: "contain",
  },
});

export { Header };
