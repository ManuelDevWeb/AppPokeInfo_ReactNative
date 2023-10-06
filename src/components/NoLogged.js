import { StyleSheet, Button, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const NoLogged = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <Text style={styles.text}>
        Para ver esta pantalla tienes que iniciar sesion
      </Text>
      <Button
        title="Ir al Login"
        onPress={() => navigation.navigate("Account")}
      />
    </View>
  );
};

// Creando estilos
const styles = StyleSheet.create({
  content: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
});

export { NoLogged };
