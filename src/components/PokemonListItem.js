import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";

export default function PokemonListItem({ pokemon }) {
  const history = useHistory();
  let id;
  if (pokemon.id) {
    id = pokemon.id;
  } else if (pokemon.url) {
    const splitted = pokemon.url.split("/");
    id = splitted[splitted.length - 2];
  }

  return (
    <Card className="maincard">
      <div className="flexRow">
        <div>
          <Card.Header as="h2">{pokemon.name.toUpperCase()}</Card.Header>
        </div>
        <div className="flexRow1">
          <Button
            onClick={() => {
              history.push(`/pokemon/${id}`);
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
