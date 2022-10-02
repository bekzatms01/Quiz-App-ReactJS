
const Quiz = ({questions, currentQuestion, handleOnClick}) => {
  return (
    <>
      <div className="question-section">
        <div className="question-count">
          <span>Question { currentQuestion + 1 }</span>/{questions.length}
        </div>
        <div className="question-text">{questions[currentQuestion].questionText}</div>
      </div>

      <div className="answer-section">
        {questions[currentQuestion].answerOptions.map((item, idx) => {
          return <button onClick={() => handleOnClick(item.isCorrect)} key={idx}>{item.answerText}</button>
        })}
      </div>
    </>
  );
}

export default Quiz;