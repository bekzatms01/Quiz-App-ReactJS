import React, {useState} from 'react';
import Quiz from './components/Quiz';
import {Result} from "./components/Result";

function App() {

  const questions = [
    {
      questionText: "What is the capital of Qazaqstan?",
      answerOptions: [
        {answerText: "Almaty", isCorrect: false},
        {answerText: "Astana", isCorrect: true},
        {answerText: "Qyzylorda", isCorrect: false},
        {answerText: "Qaragandy", isCorrect: false},
      ]
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        {answerText: "Jeff Besos", isCorrect: false},
        {answerText: "Tony Stark", isCorrect: false},
        {answerText: "Bill Gates", isCorrect: false},
        {answerText: "Elon Mask", isCorrect: true},
      ]
    },
    {
      questionText: "What is the capital of USA?",
      answerOptions: [
        {answerText: "Washington", isCorrect: true},
        {answerText: "Paris", isCorrect: false},
        {answerText: "London", isCorrect: false},
        {answerText: "Madrid", isCorrect: false},
      ]
    },
    {
      questionText: "What is the capital of Germany?",
      answerOptions: [
        {answerText: "Astana", isCorrect: false},
        {answerText: "Berlin", isCorrect: true},
        {answerText: "Praga", isCorrect: false},
        {answerText: "Kiev", isCorrect: false},
      ]
    }
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showResult, setShowResult] = useState(false);

  const [score, setScore] = useState(0);

  const handleOnClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }

  }
  return (
    <div className="App">
      {showResult ? <Result questions={questions} score={score}/> : <Quiz questions={questions} currentQuestion={currentQuestion} handleOnClick={handleOnClick}/>}
    </div>
  );
}

export default App;
