import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  Button,
  Card,
  Container,
  Grid,
  Image,
  Segment,
} from "semantic-ui-react";
import {
  fetchMySelectedPokemon,
  removeFromMyPokemons,
} from "../actions/MyPokemonActions";

export default function MyPokemonDetails(props) {
  const params = useParams();
  const id = params.id;
  const history = useHistory();
  const dispatch = useDispatch();
  const selectedPokemon = useSelector(
    (state) => state.myPokemons.mySelectedPokemon
  );
  useEffect(() => {
    dispatch(fetchMySelectedPokemon(id));
  }, [dispatch, id]);
  return (
    <Container>
      <Segment>
        <Grid stackable>
          <Grid.Column width={4}>
            <Card>
              <Image
                fluid
                size="medium"
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
                  onClick={() => {
                    dispatch(removeFromMyPokemons(selectedPokemon.id));
                    history.push("/mypokemons");
                  }}
                  fluid
                  icon="trash"
                  content="Remove from My Pokemons"
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
                      <li>
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
                      <li>{el.move?.name}</li>
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
