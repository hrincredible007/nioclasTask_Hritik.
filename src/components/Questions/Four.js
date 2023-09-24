import React, { useState, useEffect } from 'react';

const Four = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  let intervalId;

  const handleStartTimer = () => {
    if (!isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  const handleStopTimer = () => {
    if (isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
    }
  };

  useEffect(() => {
    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <div>
      <h1>React Timer App</h1>
      <p>Elapsed Time: {seconds} seconds</p>
      <button onClick={handleStartTimer} disabled={isRunning}>
        Start Timer
      </button>
      <button onClick={handleStopTimer} disabled={!isRunning}>
        Stop Timer
      </button>
    </div>
  );
};

export default Four;
