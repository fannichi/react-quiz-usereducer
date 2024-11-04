function FinishScreen({ points, possiblePoints, highScore, dispatch }) {
  const percentage = ((points / possiblePoints) * 100).toFixed(2);
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {possiblePoints} points! (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">HighScore: {highScore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restart' })}
      >
        RETAKE QUIZ
      </button>
    </>
  );
}

export default FinishScreen;
