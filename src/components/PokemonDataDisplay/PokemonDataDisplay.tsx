import React, { Suspense } from "react";
import {
  PokemonName,
  HeaderContainer,
  NoPokemonText,
  SearchForm,
  SearchLabel,
} from "./DataDisplay.style";
import DamageDisplay from "../DamageDisplay/DamageDisplay";
import TypeDisplay from "../TypesDisplay/TypesDisplay";
import StatsDisplay from "../StatsDisplay/StatsDisplay";
import OtherFormatsDisplay from "./OtherFormatsDisplay";
import { TextInput } from "../UrlSearch/UrlSearch.style";
import { usePokemon } from "../../hooks/usePokemon";
import { LoadingScreen } from "../LoadingScreen";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
const RandomBattlePokemonDisplay = React.lazy(
  () => import("../RandomPokemonDisplay/RandomBattlePokemonDisplay"),
);

interface PokemonDataDisplayProps {
  pokemon: string;
  battleType: string;
}
const PokemonDataDisplay = ({
  pokemon,
  battleType,
}: PokemonDataDisplayProps) => {
  const { pkmn, setPkmn, typesArray, pkmnExists } = usePokemon(pokemon);
  const isRandomBattle = battleType.includes("random");
  const handleSubmit = (e: React.SyntheticEvent) => {
    const target = e.target as typeof e.target & {
      pokemon_search: { value: string };
    };
    if (target.pokemon_search.value) {
      setPkmn(target.pokemon_search.value);
    }
  };

  return (
    <>
      {pkmnExists && typesArray ? (
        <>
          <HeaderContainer>
            <PokemonName
              href={`https://www.smogon.com/dex/ss/pokemon/${pkmn}/`}
            >
              {pkmn}
            </PokemonName>
            <TypeDisplay types={typesArray} />
          </HeaderContainer>
          <DamageDisplay typesArray={typesArray} />
          <StatsDisplay pokemon={pkmn} />
          {isRandomBattle ? (
            <ErrorBoundary>
              <Suspense fallback={<LoadingScreen />}>
                <RandomBattlePokemonDisplay
                  pokemon={pkmn}
                  battleType={battleType}
                />
              </Suspense>
            </ErrorBoundary>
          ) : (
            <OtherFormatsDisplay pokemon={pkmn} />
          )}
        </>
      ) : (
        <NoPokemonFound pkmn={pkmn} handleSubmit={handleSubmit} />
      )}
    </>
  );
};
interface NoPokemonFoundProps {
  pkmn: string;
  handleSubmit: (e: React.SyntheticEvent) => void;
}
const NoPokemonFound = ({ pkmn, handleSubmit }: NoPokemonFoundProps) => {
  return (
    <>
      <NoPokemonText>
        It appears the pokemon {pkmn} is not in our database.
        <br />
        <br />
        Try searching the pokemon name
      </NoPokemonText>
      <Form handleSubmit={handleSubmit} />
    </>
  );
};
interface Props {
  handleSubmit: (e: React.SyntheticEvent) => void;
}
const Form = ({ handleSubmit }: Props) => {
  return (
    <SearchForm
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
    >
      <SearchLabel htmlFor="pokemon_search">Enter Pokemon: </SearchLabel>
      <TextInput type="text" id="pokemon_search" name="pokemon_search" />
      <input type="submit" value="Submit" />
    </SearchForm>
  );
};
export default PokemonDataDisplay;
