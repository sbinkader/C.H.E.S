import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CountDown() {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [count]);

  useEffect(() => {
    if (count === 0) {
      navigate("/mode");
    }
  }, [count, navigate]);

  const countdownStyle = {
    fontFamily: "Arial, sans-serif",
    fontSize: "5rem",
    color: "red",
    textAlign: "center",
  };

  return (
    <>
      <div>
        <p style={countdownStyle}>You Blink, You Lose!</p>
      </div>
      <div style={countdownStyle}>{count}</div>
    </>
  );
}

export default CountDown;
