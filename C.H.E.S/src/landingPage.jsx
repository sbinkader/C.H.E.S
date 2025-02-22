import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Username() {
  const [name, setName] = useState(""); // Local state for input
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (name.trim()) {
      // Ensure name isn’t empty
      navigate("/mode");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">
              <h1 style={{ color: "#ff0000" }}>What&apos;s your name?</h1>
            </label>
            <div>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  height: "40px",
                  width: "250px",
                  padding: "10px",
                  border: "2px solid #ff0000",
                  borderRadius: "8px",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                  fontSize: "16px",
                  outline: "none",
                  transition: "border-color 0.3s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#ff5555")}
                onBlur={(e) => (e.target.style.borderColor = "#ff0000")}
              />
            </div>
          </div>

          <div style={{ margin: "27px", textAlign: "center" }}>
            <button
              type="submit" // Trigger form submission
              style={{
                color: "#ff0000",
                backgroundColor: "transparent",
                border: "2px solid #ff0000",
                borderRadius: "8px",
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                outline: "none",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#ff000033"; // Light red hover
                e.target.style.color = "#ff5555"; // Slightly lighter red text
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#ff0000";
              }}
              onFocus={(e) => {
                e.target.style.boxShadow = "0 0 5px rgba(255, 0, 0, 0.5)"; // Focus glow
              }}
              onBlur={(e) => {
                e.target.style.boxShadow = "none";
              }}
            >
              Enter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
