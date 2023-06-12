import React from "react";
import Page from "../Page";
import PokeSearch from "../../components/PokeSearch/PokeSearch";

const PokemonSearchPage = () => {
  return (
    <Page header>
      <PokeSearch battleRoomId="gen9randombattle" />
    </Page>
  );
};

export default PokemonSearchPage;
