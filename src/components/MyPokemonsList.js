import React from "react";
import { useSelector } from "react-redux";
import { Card } from "semantic-ui-react";
import MyPokemonListItem from "./MyPokemonListItem";

export default function MyPokemonsList() {
  const myPokemonsList = useSelector(
    (state) => state.myPokemons.myPokemonsList
  );
  console.log(myPokemonsList);

  return (
    <div>
      <Card.Group className="main">
        {myPokemonsList &&
          myPokemonsList.map((pokemon) => (
            <MyPokemonListItem key={pokemon.name} pokemon={pokemon} />
          ))}
      </Card.Group>
    </div>
  );
}
