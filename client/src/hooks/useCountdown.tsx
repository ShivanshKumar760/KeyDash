import { useCallback, useEffect, useRef, useState } from "react";

const useCountdown = (seconds: number) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); 
  const hasTimerEnded = timeLeft <= 0;
  const isRunning = intervalRef.current != null;

  const startCountdown = useCallback(() => {
    if (!hasTimerEnded && !isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    }
  }, [setTimeLeft, hasTimerEnded, isRunning]);

  const resetCountdown = useCallback(() => {
    if (intervalRef.current) { // Check if intervalRef.current is not null before clearing
      clearInterval(intervalRef.current); 
    }
    intervalRef.current = null;
    setTimeLeft(seconds);
  }, [seconds]);

  // when the countdown reaches 0, clear the countdown interval
  useEffect(() => {
    if (hasTimerEnded) {
      if (intervalRef.current) { // Check if intervalRef.current is not null before clearing
        clearInterval(intervalRef.current); 
      }
      intervalRef.current = null;
    }
  }, [hasTimerEnded]);

  // clear interval when component unmounts
  useEffect(() => {
    if (intervalRef.current) { // Check if intervalRef.current is not null before clearing
      clearInterval(intervalRef.current); 
    }
  }, []);

  return { timeLeft, startCountdown, resetCountdown };
};

export default useCountdown;