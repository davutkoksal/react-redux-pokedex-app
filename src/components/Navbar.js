import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Container,
  Header,
  Image,
  Label,
  Menu,
} from "semantic-ui-react";

export default function Navbar(props) {
  const history = useHistory();
  const myPokemonsList = useSelector(
    (state) => state.myPokemons.myPokemonsList
  );
  return (
    <Menu fixed="top" borderless>
      <Container>
        <Menu.Item as={Link} to="/" name="logo">
          <Image src={"./assets/logo.png"} />
        </Menu.Item>
        <Menu.Item as={Link} to="/" name="logo">
          <Header inverted as="h2">
            Pokédex
          </Header>
        </Menu.Item>
        <Menu.Item position="right" name="My Pokemons">
          <Button inverted onClick={() => history.push("/mypokemons")}>
            My Pokemons
            <Label style={{ marginLeft: "5px" }} circular color="red">
              {myPokemonsList && myPokemonsList.length}
            </Label>
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
}
