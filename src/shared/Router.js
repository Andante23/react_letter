import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";
import { useState } from "react";
import dummy from "assets/fakedata.json";

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
            <Home
              nickName={nickName}
              setNickName={setNickName}
              content={content}
              setContent={setContent}
              selectValue={selectValue}
              setSelectorValue={setSelectorValue}
              letterData={letterData}
              setLetterData={setLetterData}
            />
          }
        />

        {/* 동적라우팅 */}
        <Route
          path="detail/:id"
          element={
            <Detail letterData={letterData} setLetterData={setLetterData} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
