import { useNavigate } from "react-router-dom";

export default function SelectTheTwo() {
  const navigate = useNavigate();
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    textAlign: "center",
    backgroundColor: "white",
    color: "white",
    animation: "fadeIn 15s ease-in-out",
  };

  const textStyle = {
    fontSize: "4rem",
    fontWeight: "900",
    color: "rgb(66, 52, 131)",
    marginTop: "54",
    // textShadow: "-1px -1px 0 red, 1px -1px 0 red, -1px 1px 0 red, 1px 1px 0 red",
    textShadow:
      "-0.2px -0.2px 0.2px brown, 0.2px -0.2px 0.2px brown, -0.2px 0.2px 0.2px brown, 0.2px 0.2px 0.2px brown",
  };

  const buttonContainerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "10vw",
    marginTop: "85px", // Moves buttons lower without affecting text
  };

  const buttonStyle = {
    padding: "20px 40px",
    fontSize: "32px",
    cursor: "pointer",
    border: "2px solid rgba(29, 166, 193, 0.5)",
    borderRadius: "10px",
    color: "white",
    boxShadow: "2px 2px 10px rgba(255, 255, 255, 0.2)",
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
  };

  const rankedButtonStyle = {
    ...buttonStyle,
    background:
      "linear-gradient(to bottom, rgb(104, 29, 46), rgb(180, 50, 70))", // Gradient effect,
  };

  const arcadeButtonStyle = {
    ...buttonStyle,
    background:
      "linear-gradient(to bottom,rgb(125, 21, 223),rgb(201, 42, 247))",
  };

  const goToTimed = () => {
    navigate("/game/timed");
  };

  const goToPractice = () => {
    navigate("/game/practice");
  };

  return (
    <div style={containerStyle}>
      <p style={textStyle}>Select the game mode you want to compete in:</p>

      <div style={buttonContainerStyle}>
        <button style={rankedButtonStyle} onClick={goToTimed}>
          Timed Match
        </button>
        <button style={arcadeButtonStyle} onClick={goToPractice}>
          Practice Match
        </button>
      </div>
    </div>
  );
}
