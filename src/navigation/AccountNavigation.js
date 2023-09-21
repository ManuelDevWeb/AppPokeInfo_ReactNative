// React Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import { Account } from "../screens/Account";

// Creamos el stack para permitir la navegación
const Stack = createNativeStackNavigator();

const AccountNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountStack"
        component={Account}
        options={{ title: "Mi Cuenta", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
};

export { AccountNavigation };
