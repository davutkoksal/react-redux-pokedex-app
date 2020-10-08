import {
  ADD_NEW_POKEMONS,
  FETCH_POKEMONS,
  FETCH_SELECTED_POKEMON,
} from "../actions/PokemonActions";

const initialState = {
  pokemonList: [],
  nextUrl: "",
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

    case FETCH_SELECTED_POKEMON:
      return { ...state, selectedPokemon: action.payload };
    case ADD_NEW_POKEMONS:
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
