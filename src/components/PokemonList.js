import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "semantic-ui-react";
import { addNewPokemons, fetchPokemons } from "../actions/PokemonActions";
import PokemonListItem from "./PokemonListItem";
import LoadingComponent from "./LoadingComponent";

export default function PokemonList() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemons.pokemonList);
  const nextUrl = useSelector((state) => state.pokemons.nextUrl);
  useEffect(() => {
    const loadPokemons = async () => {
      setIsLoading(true);
      await dispatch(fetchPokemons());
      setIsLoading(false);
    };
    loadPokemons();
  }, [dispatch]);

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div>
      <Card.Group className="main">
        {pokemonList &&
          pokemonList.map((pokemon) => (
            <PokemonListItem
              isLoading={isLoading}
              key={pokemon.name}
              pokemon={pokemon}
            />
          ))}
      </Card.Group>

      <Button
        floated="right"
        onClick={() => dispatch(addNewPokemons(nextUrl))}
        primary
      >
        Show More
      </Button>
    </div>
  );
}
