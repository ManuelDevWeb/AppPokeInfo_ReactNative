import Icon from "react-native-vector-icons/FontAwesome";

// Function to add favorites
import { addPokemonFavoriteApi } from "../../api/favorite";

const Favorite = ({ id }) => {
  // Function to add or remove from favorites
  const handleFavorite = async () => {
    await addPokemonFavoriteApi(id);
  };

  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={handleFavorite}
      style={{ marginRight: 20 }}
    />
  );
};

export { Favorite };
