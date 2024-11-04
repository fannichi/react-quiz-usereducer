function Progress({ index, numQuestions, points, possiblePoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/ {numQuestions}
      </p>
      <p>
        <strong>
          {points}/{possiblePoints}
        </strong>
        points
      </p>
    </header>
  );
}

export default Progress;
