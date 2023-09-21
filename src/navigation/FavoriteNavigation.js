// React navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import { Favorite } from "../screens/Favorite";

// Creamos el stack para permitir la navegación
const Stack = createNativeStackNavigator();

const FavoriteNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoriteStack"
        component={Favorite}
        options={{ title: "Favoritos", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
};

export { FavoriteNavigation };
