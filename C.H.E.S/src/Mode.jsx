
export default function SelectTheTwo() {
 
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        textAlign: "center",
        backgroundColor: "black",
        color: "white",
        animation: "fadeIn 15s ease-in-out" ,
    };
    
    const textStyle = {
        fontSize: "64px",
        fontWeight: "900",
        color: "rgb(66, 52, 131)",
        marginTop:"54",
        // textShadow: "-1px -1px 0 red, 1px -1px 0 red, -1px 1px 0 red, 1px 1px 0 red",
        textShadow: "-0.2px -0.2px 0.2px brown, 0.2px -0.2px 0.2px brown, -0.2px 0.2px 0.2px brown, 0.2px 0.2px 0.2px brown",
        animation: "slideIn 15s ease-in-out" // Smooth slide-in effect,   
    };
    
    const buttonContainerStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "200px",
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
         background: "linear-gradient(to bottom, rgb(104, 29, 46), rgb(180, 50, 70))", // Gradient effect,
        // backgroundColor: "rgb(104 ,29, 46)",
    };
    
    const arcadeButtonStyle = {
        ...buttonStyle,
        background: "linear-gradient(to bottom,rgb(125, 21, 223),rgb(201, 42, 247))",
        //backgroundColor: "Purple",
    };
    
    const goToPage1 = () => {
        window.location.href = "https://www.wwe.com";
    };
    
    const goToPage2 = () => {
        window.location.href = "https://www.example.com/page2";
    };
    
    return (
        <div style={containerStyle}>
            <p style={textStyle}>
               Select the game mode you want to compete in:
            </p>
    
            <div style={buttonContainerStyle}>
                <button style={rankedButtonStyle} onClick={goToPage1}>
                    Ranked Match
                </button>
                <button style={arcadeButtonStyle} onClick={goToPage2}>
                    Arcade Match
                </button>
            </div>
        </div>
    );
    
   
    
  
  }