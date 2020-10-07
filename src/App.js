import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import MyPokemonsList from "./components/MyPokemonsList";
import Navbar from "./components/Navbar";
import PokemonDetails from "./components/PokemonDetails";
import PokemonList from "./components/PokemonList";
import MyPokemonDetails from "./components/MyPokemonDetails";
import { Container } from "semantic-ui-react";
function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Route exact path="/" component={PokemonList} />
        <Route exact path="/pokemon" component={PokemonDetails} />
        <Route exact path="/mypokemons" component={MyPokemonsList} />
        <Route exact path="/mypokemon/:id" component={MyPokemonDetails} />
      </Container>
    </div>
  );
}

export default App;
