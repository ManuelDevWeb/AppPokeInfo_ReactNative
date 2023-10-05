import Icon from "react-native-vector-icons/FontAwesome";

const Favorite = ({ id }) => {
  // Function to add or remove from favorites
  const handleFavorite = () => {
    console.log("Add or remove from favorites", id);
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
