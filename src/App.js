import { FanLetterContext } from "context/LetterDataContext";
import React from "react";
import Router from "shared/Router";
import { GlobalStyle } from "Style/GlobalStyle";
function App() {
  return (
    <>
      <FanLetterContext>
        {/* reset.css의 내용을 GlobalStyle 변수안에 저장합니다..... */}
        <GlobalStyle />
        <Router />
      </FanLetterContext>
    </>
  );
}

export default App;
