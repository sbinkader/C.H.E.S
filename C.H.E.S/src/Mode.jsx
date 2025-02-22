//import React, { useState, useEffect } from "react";

// export default function SelectTheTwo(){
    
//     const containerStyle = {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "50vh",
//     };
//     // const App = () => {
//     //     const [showButtons, setShowButtons] = useState(false);
      
//     //     useEffect(() => {
//     //       // Show buttons after 3 seconds
//     //       setTimeout(() => {
//     //         setShowButtons(true);
//     //       }, 3000);
//     //     }, []);
      

//   const buttonContainerStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     margin: "20px",
//   };

//   const buttonStyle = {
//     padding: "20px 40px",
//     fontSize: "32px",
//     cursor: "pointer",
//   };

//   const goToPage1 = () => {
//     window.location.href = "https://www.wwe.com"; // Change to your desired URL
//   };

//   const goToPage2 = () => {
//     window.location.href = "https://www.example.com/page2"; // Change to your desired URL
//   };
//   return (
//      <div style={containerStyle}>
    
//       <div style={buttonContainerStyle}>
//       <p>Please choose the game mode!!</p>
//         <button style={buttonStyle} onClick={goToPage1}>
//         Ranked Match
//         </button>
        
//       </div>
//       <div style={buttonContainerStyle}>
//         <button style={buttonStyle} onClick={goToPage2}>
//         Arcade
//         </button>{/* </button>
//         <p>Just For Fun</p> */}
//       </div>
//         </div>
     
//   );
// };

// // //   return (
// // //     <p>Just for fun</p>
// // //   );
// {/* 
//     return (
//     <div style={containerStyle}>
//       {!showButtons ? (
//         <h2>Please select your gaming mode...</h2>
//       ) : (
//         <>
//           <div style={buttonContainerStyle}>
//             <button style={buttonStyle} onClick={goToPage1}>
//               Go to Page 1
//             </button>
//             <p>Ranked Match</p>
//           </div>
//           <div style={buttonContainerStyle}>
//             <button style={buttonStyle} onClick={goToPage2}>
//               Go to Page 2
//             </button>
//             <p>Just For Fun</p>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }} */}
export default function SelectTheTwo() {
    // const containerStyle = {
    //   display: "flex",
    //   flexDirection: "column",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   height: "150vh",
    //   width:"150vh",
    //   textAlign: "center",
    //   backgroundColor:"black"
    // };
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width:"100vw",
        textAlign: "center",
        backgroundColor: "black", // Sets the background color to black
        color: "white", // Makes text visible against black background
      };
  



      
    const buttonContainerStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px",
    };
  
    const buttonStyle = {
      padding: "20px 40px",
      fontSize: "32px",
      cursor: "pointer",
      border: "none",
      borderRadius: "10px",
      color: "white",
    };
  
    const rankedButtonStyle = {
      ...buttonStyle,
      backgroundColor: "#4CAF50", // Green for Ranked Match
    };
  
    const arcadeButtonStyle = {
      ...buttonStyle,
      backgroundColor: "#FF5733", // Orange for Arcade
    };
  
    const goToPage1 = () => {
      window.location.href = "https://www.wwe.com"; // Change to your desired URL
    };
  
    const goToPage2 = () => {
      window.location.href = "https://www.example.com/page2"; // Change to your desired URL
    };
  
    return (
      <div style={containerStyle}>
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>
          Please choose the game mode!!
        </p>
  
        <div style={buttonContainerStyle}>
          <button style={rankedButtonStyle} onClick={goToPage1}>
            Ranked Match
          </button>
        </div>
  
        <div style={buttonContainerStyle}>
          <button style={arcadeButtonStyle} onClick={goToPage2}>
            Arcade
          </button>
        </div>
      </div>
    );
  }