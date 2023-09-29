import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
// Formik
import { useFormik } from "formik";
// Yup
import * as Yup from "yup";

// Utils
import { user, userDetails } from "../../utils/userDB";

const LoginForm = () => {
  const [error, setError] = useState(null);

  const formik = useFormik({
    // Valores iniciales
    initialValues: initialValues(),
    // Validaciones
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    // Funcion que se ejecuta cuando se presiona el boton
    onSubmit: (formValue) => {
      const { username, password } = formValue;

      if (username !== user.username || password !== user.password) {
        setError("Usuario o contraseña incorrectos");
        console.log("Usuario o contraseña incorrectos");
      } else {
        console.log("Usuario logueado");
        console.log(userDetails);
      }
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        // Modificando el state de username
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        // Modificando el state de password
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Button title="Entrar" onPress={formik.handleSubmit} />

      <Text style={styles.error}>
        {Object.values(formik.errors).map((err) => `${err}\n`)}
      </Text>

      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

function initialValues() {
  return {
    username: "",
    password: "",
  };
}

function validationSchema() {
  return {
    username: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  };
}

// Creando estilos
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 10,
  },
});

export { LoginForm };
