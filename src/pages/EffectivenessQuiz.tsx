import React, { useContext } from 'react'
import QuizOptions from '../components/EffectivenessQuiz/QuizOptions/QuizOption';
import Question from '../components/EffectivenessQuiz/Question/Question';
import Answers from '../components/EffectivenessQuiz/Answer/Answer';
import Results from '../components/EffectivenessQuiz/Results/Results'; 
import { damageCalculator } from '../functions';

const damage = damageCalculator(['Grass'])
const EffectivenessQuiz = () => {
    console.log(damage)
  return (
    <div>
        <QuizOptions/>
        <Question/>
        <Answers/>
        <Results/>
    </div>
  )
}

export default EffectivenessQuiz