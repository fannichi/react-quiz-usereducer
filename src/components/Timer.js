import { useEffect, useState } from 'react';

function Timer({ dispatch }) {
  // Constants to define total quiz time
  const NUMBER_QUESTION = 15;
  const TIME_PER_QUESTION = 30;
  const [quizTime, setQuizTime] = useState(NUMBER_QUESTION * TIME_PER_QUESTION);

  const minutes = Math.floor(quizTime / 60);
  const seconds = quizTime % 60;

  useEffect(() => {
    const interval = setInterval(() => {
      setQuizTime(prevTime => {
        if (prevTime === 1) {
          clearInterval(interval); // Stop the interval when time reaches zero
          dispatch({ type: 'finished' }); // Dispatch action when time is up
          return 0; // Set quizTime to 0
        }
        return prevTime - 1; // Decrease time by 1 second
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="timer">
      {minutes > 9 ? minutes : `0${minutes}`}:
      {seconds > 9 ? seconds : `0${seconds}`}
    </div>
  );
}

export default Timer;
