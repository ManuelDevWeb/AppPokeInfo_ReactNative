import { StyleSheet, View, Text } from "react-native";

// Lodash (Array functions)
import { map, capitalize } from "lodash";

// Utils
import { getColorByPokemonType } from "../../utils/getColorByPokemonType";

const Stats = ({ stats, type }) => {
  const barStyles = (num) => {
    const opacity = num < 50 ? 0.5 : 1;

    return {
      width: `${num}%`,
      backgroundColor: getColorByPokemonType(type),
      opacity,
    };
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {
        // Por cada elemento del array stats, ejecuta la función map
        map(stats, (item, index) => (
          <View key={index} style={styles.block}>
            <View style={styles.blockTitle}>
              <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
            </View>
            <View style={styles.blockInfo}>
              <Text style={styles.number}>{item.base_stat}</Text>
              <View style={styles.bgBar}>
                <View style={[styles.bar, barStyles(item.base_stat)]} />
              </View>
            </View>
          </View>
        ))
      }
    </View>
  );
};

// Creando estilos
const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    paddingBottom: 5,
    fontWeight: "bold",
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTitle: {
    width: "30%",
  },
  statName: {
    fontSize: 12,
    color: "#6b6b6b",
  },
  blockInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "12%",
    fontSize: 12,
  },
  bgBar: {
    width: "88%",
    height: 5,
    borderRadius: 20,
    backgroundColor: "#dedede",
    overflow: "hidden",
  },
  bar: {
    height: "100%",
    borderRadius: 20,
  },
});

export { Stats };
