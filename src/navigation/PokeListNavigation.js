// React Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import { PokeList } from "../screens/PokeList";
import { Pokemon } from "../screens/Pokemon";

// Creamos el stack para permitir la navegación
const Stack = createNativeStackNavigator();

const PokeListNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PokeListStack" component={PokeList} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
};

export { PokeListNavigation };
