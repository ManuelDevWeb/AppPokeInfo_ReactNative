import { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

// Function to get favorites
import { getPokemonsFavoritesApi } from "../api/favorite";

const Favorite = () => {
  // const [favorites, setFavorites] = useState([]);

  // Function to get favorites
  const handleFavorites = async () => {
    const response = await getPokemonsFavoritesApi();
    console.log(response);
    // setFavorites(response);
  };

  // useEffect(() => {
  //   handleFavorites();
  // }, []);

  return (
    <View>
      <Text>Favorite</Text>
      <Button title="Get favorites" onPress={handleFavorites} />
    </View>
  );
};

export { Favorite };
