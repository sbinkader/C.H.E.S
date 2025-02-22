import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GamePage from "./Gamepage";
import "@mantine/core/styles.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GamePage />
    </>
  );
}

export default App;
