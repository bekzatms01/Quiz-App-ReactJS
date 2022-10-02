
export const Result = ({questions, score}) => {
  return (
    <div className="result-section">
      You scored {score} out of {questions.length}
    </div>
  );
}