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

    return JSON.parse(favorites || []);
  } catch (error) {
    throw error;
  }
}

// Function to add pokemon to favorites
export async function addPokemonFavoriteApi(id) {
  try {
    const favorites = await getPokemonsFavoritesApi();
    // Agregamos el id al array de favoritos
    favorites.push(id);

    // Guardamos en el storage "favorites"
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}

// Function to verify if pokemon is in favorites
export async function isPokemonFavoriteApi(id) {
  try {
    const pokemon = await getPokemonsFavoritesApi();

    // Verificamos si el id del pokemon esta en el array de favoritos, retorna true o false dependiendo si esta o no
    return includes(pokemon, id);
  } catch (error) {
    throw error;
  }
}

// Function to remove pokemon from favorites
export async function removePokemonFavoriteApi(id) {
  try {
    const favorites = await getPokemonsFavoritesApi();

    // Removemos el id del pokemon del array de favoritos
    pull(favorites, id);

    // Guardamos en el storage "favorites"
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}
