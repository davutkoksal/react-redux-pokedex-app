import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";

export default function MyPokemonListItem({ pokemon }) {
  const history = useHistory();
  return (
    <Card className="maincard">
      <div className="flexRow">
        <div>
          <Card.Header as="h2">{pokemon.name.toUpperCase()}</Card.Header>
        </div>
        <div className="flexRow1">
          <Button
            onClick={() => {
              history.push(`/mypokemon/${pokemon.id}`);
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
