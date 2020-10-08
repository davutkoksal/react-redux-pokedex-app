import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Button, Card, Container, Grid, Image } from "semantic-ui-react";
import {
  addToMyPokemons,
  removeFromMyPokemons,
} from "../actions/MyPokemonActions";
import { fetchSelectedPokemon } from "../actions/PokemonActions";

export default function PokemonDetails(props) {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;
  const history = useHistory();
  const selectedPokemon = useSelector(
    (state) => state.pokemons.selectedPokemon
  );
  const myPokemonsList = useSelector(
    (state) => state.myPokemons.myPokemonsList
  );

  useEffect(() => {
    dispatch(fetchSelectedPokemon(id));
  }, [dispatch, id]);

  let isAvailable;
  myPokemonsList &&
    myPokemonsList.forEach((pokemon) => {
      if (pokemon.id === selectedPokemon.id) {
        isAvailable = true;
      }
    });

  return (
    <Container>
      <Grid stackable>
        <Grid.Column width={4}>
          <Card>
            <Image
              fluid
              src={
                selectedPokemon.sprites &&
                selectedPokemon?.sprites.front_default
              }
            />
            <Card.Content>
              <Card.Header>
                {selectedPokemon.name && selectedPokemon.name.toUpperCase()}
              </Card.Header>
              <Card.Description>
                Base Experience:{selectedPokemon?.base_experience}
              </Card.Description>
              <Card.Description>
                Weight:{selectedPokemon?.weight}
              </Card.Description>
              <Card.Description>
                Height:{selectedPokemon?.height}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              {isAvailable ? (
                <Button
                  onClick={() => {
                    dispatch(removeFromMyPokemons(selectedPokemon.id));
                    history.push("/mypokemons");
                  }}
                  fluid
                  icon="trash"
                  content="Remove from My Pokemons"
                  color="red"
                />
              ) : (
                <Button
                  onClick={() => dispatch(addToMyPokemons(selectedPokemon))}
                  fluid
                  icon="plus"
                  content="Add to My Pokemons"
                  color="red"
                />
              )}
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={4}>
          <Card>
            <Card.Content textAlign="center">
              <Card.Header>Stats</Card.Header>
            </Card.Content>
            <Card.Content>
              <ul>
                {selectedPokemon.stats &&
                  selectedPokemon?.stats.map((el) => (
                    <li key={el.stat?.name}>
                      {el.stat?.name}: {el.base_stat}
                    </li>
                  ))}
              </ul>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={4}>
          <Card>
            <Card.Content textAlign="center">
              <Card.Header>Abilities</Card.Header>
            </Card.Content>
            <Card.Content>
              <ul>
                {selectedPokemon.abilities &&
                  selectedPokemon?.abilities.map((el) => (
                    <li key={el.ability?.name}>{el.ability?.name}</li>
                  ))}
              </ul>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={4}>
          <Card>
            <Card.Content textAlign="center">
              <Card.Header>Moves ({selectedPokemon.moves?.length})</Card.Header>
            </Card.Content>
            <Card.Content>
              <ul>
                {selectedPokemon.moves &&
                  selectedPokemon?.moves.map((el) => (
                    <li key={el.move?.name}>{el.move?.name}</li>
                  ))}
              </ul>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </Container>
  );
}
