import { Dex } from "@pkmn/dex";
import React, { useState } from "react";
import PokeDexScreen from "../PokeDexScreen/PokeDex";
import PokemonDataDisplay from "../PokemonDataDisplay/PokemonDataDisplay";
import {
  InputContainer,
  TextInput,
  SearchForm,
  SearchLabel,
  Submit,
  OptionsList,
  ErrorText,
} from "./PokeSearch.style";
interface Props {
  battleRoomId: string;
}
enum ERRORS {
  INVALIDNAME,
}
interface FormProps {
  handleSubmit: (e: React.SyntheticEvent) => void;
  setPkmn: React.Dispatch<React.SetStateAction<string>>;
}
const poke = "Annihilape";
const Form = ({ handleSubmit, setPkmn }: FormProps) => {
  const [text, setText] = useState("");
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);
  const [selected, setSelected] = useState(false);
  return (
    <SearchForm
      onSubmit={(e) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
          pokemon_search: { value: string };
        };
        const pokemon = target.pokemon_search.value.trim();
        if (pokemon && !previousSearches.includes(pokemon)) {
          console.log(previousSearches, pokemon);
          setPreviousSearches([pokemon, ...previousSearches]);
        }
        handleSubmit(e);
      }}
    >
      {/* <SearchLabel htmlFor="pokemon_search">Enter Pokemon: </SearchLabel> */}
      <InputContainer>
        <TextInput
          placeholder="Enter Pokemon:"
          onSelect={() => {
            if (previousSearches.length) {
              setSelected(true);
            }
          }}
          onBlur={() => {
            setTimeout(() => {
              setSelected(false);
            }, 200);
          }}
          type="text"
          id="pokemon_search"
          name="pokemon_search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></TextInput>
        <Submit type="submit" value="Submit" disabled={!Boolean(text)} />
        <OptionsList shouldDisplay={selected}>
          {previousSearches.map((pokemon) => (
            <li
              onClick={(e) => {
                setPkmn(pokemon);
                setText(pokemon);
              }}
            >
              {pokemon}
            </li>
          ))}
        </OptionsList>
      </InputContainer>
    </SearchForm>
  );
};
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
        <Form handleSubmit={handleSubmit} setPkmn={setPkmn} />
      </PokeDexScreen>
      {!pkmn && (
        <>
          <ErrorText>
            This battle does not allow Spectators please search the pokemon you
            wish to display
          </ErrorText>
        </>
      )}
      {error === ERRORS.INVALIDNAME ? (
        <ErrorText>
          It appears the searched pokemon {pkmn} is not in our database.
        </ErrorText>
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
