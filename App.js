import { StyleSheet, Text, View } from "react-native";

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
// Tab Navigation
import { Navigation } from "./src/navigation/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
