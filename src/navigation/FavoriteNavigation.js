// React navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import { Favorite } from "../screens/Favorite";
import { Pokemon } from "../screens/Pokemon";

// Creamos el stack para permitir la navegación
const Stack = createNativeStackNavigator();

const FavoriteNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoriteStack"
        component={Favorite}
        options={{ title: "", headerTransparent: true }}
      />
      {/* La pagina previa en pokemon (favorite) es el listado de pokemosn favoritos */}
      <Stack.Screen
        name="PokemonStack"
        component={Pokemon}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
};

export { FavoriteNavigation };
