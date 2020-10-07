import {
  ADD_NEW_POKEMONS,
  FETCH_POKEMONS,
  FETCH_SELECTED_POKEMON,
  SET_SELECTED_POKEMON_URL,
} from "../actions/PokemonActions";

const initialState = {
  pokemonList: [],
  nextUrl: "",
  url: "",
  selectedPokemon: {},
  nextPokemonList: [],
};

export const PokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS:
      return {
        ...state,
        pokemonList: [...action.payload, ...state.nextPokemonList],
        nextUrl: action.nextUrl,
      };
    case SET_SELECTED_POKEMON_URL:
      return { ...state, url: action.payload };
    case FETCH_SELECTED_POKEMON:
      return { ...state, selectedPokemon: action.payload };
    case ADD_NEW_POKEMONS:
      console.log(action.payload);
      return {
        ...state,
        nextPokemonList: [...state.nextPokemonList, ...action.payload],
        pokemonList: [...state.pokemonList, ...action.payload],
        nextUrl: action.nextUrl,
      };
    default:
      return state;
  }
};
