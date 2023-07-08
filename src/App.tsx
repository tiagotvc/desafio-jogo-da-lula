import { HomePage } from "pages/HomePage/HomePage";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { GamePage } from "pages/GamePage/GamePage";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gamePage" element={<GamePage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
