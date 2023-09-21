import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import { Account } from "../screens/Account";
import { PokeList } from "../screens/PokeList";
import { Favorite } from "../screens/Favorite";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Pokelist" component={PokeList} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export { Navigation };
