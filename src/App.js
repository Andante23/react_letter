import { AuthContext } from "context/LetterDataContext";
import React from "react";
import Router from "shared/Router";

function App() {
  return (
    <>
      <AuthContext>
        <Router />
      </AuthContext>
    </>
  );
}

export default App;
