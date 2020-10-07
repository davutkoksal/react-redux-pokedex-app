import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";
import { setSelectedPokemonUrl } from "../actions/PokemonActions";

export default function PokemonListItem({ pokemon }) {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <Card className="maincard">
      <div className="flexRow">
        <div>
          <Card.Header as="h2">{pokemon.name.toUpperCase()}</Card.Header>
        </div>
        <div className="flexRow1">
          <Button
            onClick={() => {
              dispatch(setSelectedPokemonUrl(pokemon.url));
              history.push("/pokemon");
            }}
            floated="right"
            primary
          >
            Details
          </Button>
        </div>
      </div>
    </Card>
  );
}
