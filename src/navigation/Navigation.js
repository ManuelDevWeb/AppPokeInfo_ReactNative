import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

// Icons
import Icon from "react-native-vector-icons/FontAwesome5";

// Screens
import { Account } from "../screens/Account";
import { PokeList } from "../screens/PokeList";
import { Favorite } from "../screens/Favorite";

const Tab = createBottomTabNavigator();

// Function to get the image
function renderPokeball() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -17 }}
    />
  );
}

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Favorite") {
            iconName = focused ? "heart" : "heart";
          } else if (route.name === "Account") {
            iconName = focused ? "user" : "user";
          } else if (route.name === "Pokelist") {
            return renderPokeball();
          }

          if (focused) {
            return <Icon name={iconName} size={size} color={color} solid />;
          } else {
            return <Icon name={iconName} size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          // Title button
          tabBarLabel: "Favoritos",
          // Icon button
          // tabBarIcon: ({ size, color }) => {
          //   return <Icon name="heart" size={size} color={color} />;
          // },
          // tabBarActiveTintColor: "tomato",
        }}
      />
      <Tab.Screen
        name="Pokelist"
        component={PokeList}
        options={{
          // Title button
          tabBarLabel: "",
          // Image button
          // tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          // Title button
          tabBarLabel: "Mi Cuenta",
        }}
      />
    </Tab.Navigator>
  );
};

export { Navigation };
