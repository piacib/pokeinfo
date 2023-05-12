import { RESULT } from "../../../hooks/useQuiz/useQuiz";
import {
  ResultRow,
  ResultCell,
  AnswerContainer,
  PokemonTypeCell,
  ResultTypedBox,
  TableColumn,
  ResutTable,
  ChoiceContainer,
} from "./Results.style";
import { Button } from "../../UrlSearch/UrlSearch.style";
import { TypeWriterContainer } from "../../../styles/TypeWriterContainer.style";

interface Props {
  data: RESULT[];
  restartQuiz: () => void;
}
const Results = ({ data, restartQuiz }: Props) => (
  <>
    <ResutTable>
      <caption>
        <TypeWriterContainer>
          <h1>Results</h1>
        </TypeWriterContainer>
      </caption>
      <thead>
        <tr>
          <TableColumn scope="col">Attack type</TableColumn>
          <TableColumn scope="col">Pokemon Type</TableColumn>
          <TableColumn scope="col">Correct</TableColumn>
          <TableColumn scope="col">Choice</TableColumn>
        </tr>
      </thead>
      <tbody>
        {data.map((x) => (
          <ResultRow>
            <ResultCell>
              <ResultTypedBox background={x.moveType}>
                {x.moveType}
              </ResultTypedBox>
            </ResultCell>
            <ResultCell>
              <PokemonTypeCell>
                {x.attackPokemonType.map((x) => (
                  <ResultTypedBox background={x}>{x}</ResultTypedBox>
                ))}
              </PokemonTypeCell>
            </ResultCell>

            <ResultCell>
              <AnswerContainer>x{x.answer}</AnswerContainer>
            </ResultCell>
            <ResultCell>
              <ChoiceContainer correct={x.answer === x.answerSelected}>
                x{x.answerSelected}
              </ChoiceContainer>
            </ResultCell>
          </ResultRow>
        ))}
      </tbody>
    </ResutTable>
    <Button onClick={() => restartQuiz()}>Play Again</Button>
  </>
);

export default Results;
