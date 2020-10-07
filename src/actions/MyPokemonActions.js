export const ADD_TO_MY_POKEMONS = "ADD_TO_MY_POKEMONS";
export const REMOVE_FROM_MY_POKEMONS = "REMOVE_FROM_MY_POKEMONS";
export const FETCH_MY_SELECTED_POKEMON = "FETCH_MY_SELECTED_POKEMON";
export const addToMyPokemons = (pokemon) => {
  return { type: ADD_TO_MY_POKEMONS, payload: pokemon };
};
export const removeFromMyPokemons = (id) => {
  return { type: REMOVE_FROM_MY_POKEMONS, payload: id };
};

export const fetchMySelectedPokemon = (id) => {
  return async (dispatch) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    dispatch({ type: FETCH_MY_SELECTED_POKEMON, payload: data });
  };
};
