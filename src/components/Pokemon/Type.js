import { StyleSheet, View, Text } from "react-native";

// Lodash (Array functions)
import { map, capitalize } from "lodash";

// Utils
import { getColorByPokemonType } from "../../utils/getColorByPokemonType";

const Type = ({ types }) => {
  return (
    <View style={styles.content}>
      {
        // Por cada elemento del array types, ejecuta la función map
        map(types, (item, index) => (
          <View
            key={index}
            style={{
              ...styles.pill,
              backgroundColor: getColorByPokemonType(item.type.name),
            }}
          >
            <Text>{capitalize(item.type.name)}</Text>
          </View>
        ))
      }
    </View>
  );
};

// Creando estilos
const styles = StyleSheet.create({
  content: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});

export { Type };
