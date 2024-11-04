function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'nextQuestion' })}
      >
        NEXT
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'finished' })}
      >
        FINISH QUIZ
      </button>
    );
}

export default NextButton;
