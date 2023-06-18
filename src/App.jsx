import React, { useState } from "react";
import "./App.css";
// import { Sidebar } from './components/Sidebar'
import { MyRoutes } from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import { styled } from "styled-components";
import { Sidebar } from "./components/Sidebar";
import { Ligth, Dark } from "./styles/Themes";
import { ThemeProvider } from "styled-components";


export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyles = theme === "light" ? Ligth : Dark;

  const CambiarTema = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyles}>
          <BrowserRouter>
            <Container className={sidebarOpen ? "sidebarState active" : " "}>
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
               
              />
              <MyRoutes />
            </Container>
              <input onClick={CambiarTema} type="checkbox" />
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  transition: all 0.6s;
  background: ${({theme}) => theme.bgTotal};

  &.active {
    grid-template-columns:350px auto;
   
  }
`;

export default App;
