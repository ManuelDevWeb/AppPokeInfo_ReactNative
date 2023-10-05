// Functions to manage favorites and phone storage

import AsyncStorage from "@react-native-async-storage/async-storage";

// Lodash (Array functions)
import { includes, pull } from "lodash";

// Constans
import { FAVORITE_STORAGE } from "../utils/constants";

// Function to get favorites
export async function getPokemonsFavoritesApi() {
  try {
    const favorites = await AsyncStorage.getItem(FAVORITE_STORAGE);

    // Si no hay favoritos
    if (!favorites) return [];

    return favorites;
  } catch (error) {
    throw error;
  }
}

// Function to add pokemon to favorites
export async function addPokemonFavoriteApi(id) {
  try {
    const favorites = [];
    // Agregamos el id al array de favoritos
    favorites.push(id);

    // Guardamos en el storage "favorites"
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}
