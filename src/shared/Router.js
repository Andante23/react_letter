import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";
import { useState } from "react";
import dummy from "assets/fakedata.json";
import { LetterDataContext } from "context/LetterDataContext";

const Router = () => {
  // 값이 변동이 있는 변수들은  useState로 보관하기
  const [nickName, setNickName] = useState("");
  const [content, setContent] = useState("");
  const [selectValue, setSelectorValue] = useState("최정훈");
  const [letterData, setLetterData] = useState(dummy);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LetterDataContext.Provider
              value={{
                nickName,
                setNickName,
                content,
                setContent,
                selectValue,
                setSelectorValue,
                letterData,
                setLetterData,
              }}
            >
              <Home />
            </LetterDataContext.Provider>
          }
        />

        {/* 동적라우팅 */}
        <Route
          path="detail/:id"
          element={
            <LetterDataContext.Provider value={{ setLetterData, letterData }}>
              <Detail />
            </LetterDataContext.Provider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
