import React from "react";
import Router from "shared/Router";
import { ThemeContext } from "styled-components";

function App() {
  return (
    <>
      <ThemeContext.Provider>
        <Router />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
