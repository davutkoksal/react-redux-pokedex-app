import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  Container,
  Grid,
  Image,
  Segment,
} from "semantic-ui-react";
import { addToMyPokemons } from "../actions/MyPokemonActions";
import { fetchSelectedPokemon } from "../actions/PokemonActions";

export default function PokemonDetails(props) {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.pokemons.url);
  const selectedPokemon = useSelector(
    (state) => state.pokemons.selectedPokemon
  );
  useEffect(() => {
    dispatch(fetchSelectedPokemon(url));
  }, [dispatch, url]);
  return (
    <Container>
      <Segment>
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
                <Button
                  onClick={() => dispatch(addToMyPokemons(selectedPokemon))}
                  fluid
                  icon="plus"
                  content="Add to My Pokemons"
                  color="red"
                />
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
                <Card.Header>
                  Moves ({selectedPokemon.moves?.length})
                </Card.Header>
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
      </Segment>
    </Container>
  );
}
