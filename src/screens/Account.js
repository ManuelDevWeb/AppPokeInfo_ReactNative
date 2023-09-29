import { View, Text } from "react-native";

// Components
import { LoginForm } from "../components/Auth/LoginForm";
import { UserDetails } from "../components/Auth/UserDetails";

const Account = () => {
  const auth = null;

  return (
    <View>
      {
        // Verificando si el usuario esta autenticado
        auth ? <UserDetails /> : <LoginForm />
      }
      <Text>Acount</Text>
    </View>
  );
};

export { Account };
