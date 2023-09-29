import { View, Text } from "react-native";

// Components
import { LoginForm } from "../components/Auth/LoginForm";
import { UserDetails } from "../components/Auth/UserDetails";

// Custom Hooks
import { useAuth } from "../hooks/useAuth";

const Account = () => {
  // Custom hook para obtener los valores (states) del contexto AuthContext
  const { auth } = useAuth();

  return (
    <View>
      {
        // Verificando si el usuario esta autenticado
        auth ? <UserDetails /> : <LoginForm />
      }
    </View>
  );
};

export { Account };
