import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "pages/HomePage";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
