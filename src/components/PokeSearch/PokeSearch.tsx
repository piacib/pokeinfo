import { Dex } from "@pkmn/dex";
import React, { useState } from "react";
import PokeDexScreen from "../PokeDexScreen/PokeDex";
import {
  SearchForm,
  SearchLabel,
} from "../PokemonDataDisplay/DataDisplay.style";
import PokemonDataDisplay from "../PokemonDataDisplay/PokemonDataDisplay";
import { TextInput } from "../UrlSearch/UrlSearch.style";
import { InputContainer } from "./PokeSearch.style";
interface Props {
  battleRoomId: string;
}
enum ERRORS {
  INVALIDNAME,
}
interface Props {
  handleSubmit: (e: React.SyntheticEvent) => void;
}
const Form = ({ handleSubmit }: Props) => (
  <SearchForm
    onSubmit={(e) => {
      e.preventDefault();
      handleSubmit(e);
    }}
  >
    <SearchLabel htmlFor="pokemon_search">Enter Pokemon: </SearchLabel>
    <InputContainer>
      <TextInput type="text" id="pokemon_search" name="pokemon_search" />
      <select>
        <option value="Annihilape">Annihilape</option>
        <option value="Carbink">Carbink</option>
        <option value="Azumarill">Azumarill</option>
      </select>
      <input type="submit" value="Submit" />
    </InputContainer>
  </SearchForm>
);
const PokeSearch = ({ battleRoomId }: Props) => {
  const [pkmn, setPkmn] = useState("");
  const [error, setError] = useState<false | ERRORS>(false);
  const battleTypeRegex = battleRoomId.match(/battle-(.*)-/);
  const handleSubmit = (e: React.SyntheticEvent) => {
    const target = e.target as typeof e.target & {
      pokemon_search: { value: string };
    };
    const pokemon = target.pokemon_search.value.trim();
    if (pokemon && Dex.species.get(pokemon).exists) {
      setPkmn(pokemon);
      setError(false);
    } else {
      setError(ERRORS.INVALIDNAME);
      setPkmn(pokemon);
    }
  };

  return (
    <>
      <PokeDexScreen>
        <Form handleSubmit={handleSubmit} />
      </PokeDexScreen>
      {!pkmn && (
        <>
          <h3>
            This battle does not allow Spectators please search the pokemon you
            wish to display
          </h3>
        </>
      )}
      {error === ERRORS.INVALIDNAME ? (
        <p>It appears the searched pokemon {pkmn} is not in our database.</p>
      ) : (
        <>
          {battleTypeRegex && pkmn && (
            <PokemonDataDisplay
              pokemon={pkmn}
              battleType={battleTypeRegex[1]}
            />
          )}
        </>
      )}
    </>
  );
};

export default PokeSearch;
