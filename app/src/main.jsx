import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: white;
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    font-family: 'Poppins', sans-serif;
  }
`;

const Root = document.getElementById("root");

const Main = () => {
  const [backgroundColor, setBackgroundColor] = useState("#483248");
  const [questionColor , setQuestionColor] = useState("white"); 
  const [borderColor , setBorderColor] = useState("white");
  const [icon , setIcon] = useState(true);

  const toggleColor = () => {
    setBackgroundColor((prevColor) => (prevColor === "#483248" ? "white" : "#483248"));
    setQuestionColor((prevColor) => (prevColor === "white" ? "black" : "white"));
    setBorderColor((prevColor) => (prevColor === "white" ? "black" : "white"));
    setIcon((prevColor) => (prevColor === true ? false : true));
  };
  

  return (
    <React.StrictMode>
      <GlobalStyle theme={{ backgroundColor }} />
      <App toggleColor={toggleColor}  questionColor={questionColor} borderColor={borderColor} icon={icon}/>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(Root).render(<Main />);
