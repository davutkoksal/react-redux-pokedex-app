import React from "react";
import { useSelector } from "react-redux";
import { Card } from "semantic-ui-react";
import PokemonListItem from "./PokemonListItem";

export default function MyPokemonsList() {
  const myPokemonsList = useSelector(
    (state) => state.myPokemons.myPokemonsList
  );

  return (
    <div>
      <Card.Group className="main">
        {myPokemonsList &&
          myPokemonsList.map((pokemon) => (
            <PokemonListItem key={pokemon.name} pokemon={pokemon} />
          ))}
      </Card.Group>
    </div>
  );
}
