import { StyleSheet, View, Text, Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";

// Lodash (Array functions)
import { size } from "lodash";

// Function to get favorites
import { getPokemonsFavoritesApi } from "../../api/favorite";

// Custom Hooks
import { useAuth } from "../../hooks/useAuth";

const UserDetails = () => {
  const [totalFavorites, setTotalFavorites] = useState(0);

  // Custom hook para obtener los valores (states) del contexto AuthContext
  const { auth, logout } = useAuth();

  // Se usa focus effect ya que en movil la screen no se desmonta. Cuando cambiamos de screen y volvemos a ella cambia es el "focus"
  useFocusEffect(
    useCallback(() => {
      const getCountFavorites = async () => {
        const response = await getPokemonsFavoritesApi();
        setTotalFavorites(size(response));
      };
      getCountFavorites();
    }, [])
  );

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido,</Text>
        <Text style={styles.title}>
          {auth.firstName} {auth.lastName}
        </Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={auth.firstName} />
        <ItemMenu title="Username" text={auth.username} />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu
          title="Total Favoritos"
          text={`${totalFavorites} Pokemones`}
        />
      </View>
      <View style={styles.btnButton}>
        <Button title="Descontectarse" onPress={logout} />
      </View>
    </View>
  );
};

function ItemMenu({ title, text }) {
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
}

// Creando styles
const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cfcfcf",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
  btnButton: {
    paddingTop: 20,
  },
});

export { UserDetails };
