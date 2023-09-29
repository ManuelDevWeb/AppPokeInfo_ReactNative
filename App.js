// React Navigation
import { NavigationContainer } from "@react-navigation/native";
// Tab Navigation
import { Navigation } from "./src/navigation/Navigation";

// Provider (Permite a los componentes hijos tener acceso al state)
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </NavigationContainer>
  );
}
