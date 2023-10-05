import { useState, useEffect } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// Function to add favorites
import {
  addPokemonFavoriteApi,
  isPokemonFavoriteApi,
  removePokemonFavoriteApi,
} from "../../api/favorite";

const Favorite = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [reloadCheck, setReloadCheck] = useState(false);

  const Icon = isFavorite ? FontAwesome : FontAwesome5;

  useEffect(() => {
    const getFavorite = async () => {
      const response = await isPokemonFavoriteApi(id);
      setIsFavorite(response);
    };
    getFavorite();
  }, [id, reloadCheck]);

  const onReloadCheck = () => {
    setReloadCheck((prev) => !prev);
  };

  // Function to add from favorites
  const addFavorite = async () => {
    try {
      await addPokemonFavoriteApi(id);
      onReloadCheck();
    } catch (error) {
      throw error;
    }
  };

  // Function to remove from favorites
  const removeFavorite = async () => {
    try {
      await removePokemonFavoriteApi(id);
      onReloadCheck();
    } catch (error) {
      throw error;
    }
  };

  return (
    <Icon
      name="heart"
      color="#FFF"
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={{ marginRight: 20 }}
    />
  );
};

export { Favorite };
