export const ADD_TO_MY_POKEMONS = "ADD_TO_MY_POKEMONS";
export const REMOVE_FROM_MY_POKEMONS = "REMOVE_FROM_MY_POKEMONS";
export const addToMyPokemons = (pokemon) => {
  return { type: ADD_TO_MY_POKEMONS, payload: pokemon };
};
export const removeFromMyPokemons = (id) => {
  return { type: REMOVE_FROM_MY_POKEMONS, payload: id };
};
