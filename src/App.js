import { useState, useRef, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const timerRef = useRef();

  const startTimer = () => {
    setIsStarted(true);
    timerRef.current = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setIsStarted(false);
  };

  const handleTimer = () => {
    if (isStarted) {
      stopTimer();
      return;
    }
    startTimer();
  };

  const handleReset = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setIsStarted(false);
    setCounter(0);
  };

  return (
    <div className="App">
      <div className="counter">
        <div className="title">Counter</div>
        {counter}
        <div className="button-container">
          <button onClick={handleTimer}>{isStarted ? "Pause" : "Start"}</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}
