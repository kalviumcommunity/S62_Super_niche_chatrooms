import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const name = "JupitersOrbeet";
  const currentYear = new Date().getUTCFullYear();

  const luxuryParagraphStyle = {
    fontFamily: "'Bodoni Moda', serif",
    fontSize: "22px",
    fontWeight: 700, // Bold
    letterSpacing: "1px",
    textTransform: "uppercase",
  };

  return (
    <>
      <h1>Super Niche Chatrooms! </h1>
      <div className="card">
        <p style={luxuryParagraphStyle}>
          'THE 5 AM CLUB' is one of the chatrooms we offer.
        </p>
        <p>Created by {name}. Stay tuned for more.</p>
        <p>Copyright© {currentYear}.</p>
      </div>
    </>
  );
}

export default App;
