import Question from "./Question/Question";
import Answers from "./Answer/Answer";
import Results from "./Results/Results";
import { TypeWriterContainer } from "../../styles/TypeWriterContainer.style";
import { ACTION_TYPE, useQuizReducer } from "../../hooks/useQuiz/useQuiz";
import Umbreon from "./Umbreon";
import { QuizContainer } from "./EffectivenessQuiz.style";

export const quizLength = 15;

const EffectivenessQuiz = () => {
  const { quizState, dispatch } = useQuizReducer();
  const currentQuizQuestion = quizState.quiz[quizState.currentEntry];

  return (
    <>
      {!quizState.quizComplete ? (
        <>
          <TypeWriterContainer>
            <h1>Quiz</h1>
          </TypeWriterContainer>
          <QuizContainer>
            <Umbreon />
            {currentQuizQuestion && (
              <>
                <Question
                  moveType={currentQuizQuestion.moveType}
                  pokemonType={currentQuizQuestion.attackPokemonType}
                />
                <Answers
                  answer={currentQuizQuestion.answer}
                  reset={(choice: number) => {
                    console.log("dispatching next");
                    dispatch({
                      type: ACTION_TYPE.NEXT,
                      payload: { answerSelected: choice },
                    });
                  }}
                />
              </>
            )}
          </QuizContainer>
        </>
      ) : (
        <Results
          data={quizState.results}
          restartQuiz={() => dispatch({ type: ACTION_TYPE.GENERATE })}
        />
      )}
    </>
  );
};

export default EffectivenessQuiz;
