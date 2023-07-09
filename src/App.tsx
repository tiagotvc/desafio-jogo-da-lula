import { HomePage } from "pages/HomePage/HomePage";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { GamePage } from "pages/GamePage/GamePage";
import { PlayersContextProvider } from "context/players.context";


const App = () => {
  
  return (
    <ThemeProvider theme={theme}>
      <PlayersContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gamePage" element={<GamePage />}  />
      </Routes>
      </PlayersContextProvider>
     
    </ThemeProvider>
  );
};

export default App;
