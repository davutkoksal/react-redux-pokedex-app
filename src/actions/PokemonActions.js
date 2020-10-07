export const FETCH_POKEMONS = "FETCH_POKEMONS";
export const FETCH_SELECTED_POKEMON = "FETCH_SELECTED_POKEMON";
export const SET_SELECTED_POKEMON_URL = "SET_SELECTED_POKEMON_URL";
export const ADD_NEW_POKEMONS = "ADD_NEW_POKEMONS";
export const fetchPokemons = () => {
  return async (dispatch) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
    const data = await response.json();
    dispatch({
      type: FETCH_POKEMONS,
      payload: data.results,
      nextUrl: data.next,
    });
  };
};

export const setSelectedPokemonUrl = (url) => {
  return { type: SET_SELECTED_POKEMON_URL, payload: url };
};

export const fetchSelectedPokemon = (url) => {
  return async (dispatch) => {
    const response = await fetch(`${url}`);
    const data = await response.json();
    dispatch({ type: FETCH_SELECTED_POKEMON, payload: data });
  };
};

export const addNewPokemons = (url) => {
  return async (dispatch) => {
    const response = await fetch(`${url}`);
    const data = await response.json();
    dispatch({
      type: ADD_NEW_POKEMONS,
      payload: data.results,
      nextUrl: data.next,
    });
  };
};
