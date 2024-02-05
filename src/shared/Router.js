import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import DetailPage from "pages/DetailPage";
import { useState } from "react";
import { data } from "assets/data";

const Router = () => {
  const [selectValue, setSelectorValue] = useState("최정훈");
  const [buttonValue, setButtonValue] = useState("최정훈");
  const [nickName, setNickName] = useState("");
  const [content, setContent] = useState("");
  const [letterData, setLetterData] = useState(data);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              nickName={nickName}
              setNickName={setNickName}
              content={content}
              setContent={setContent}
              selectValue={selectValue}
              setSelectorValue={setSelectorValue}
              letterData={letterData}
              setLetterData={setLetterData}
              buttonValue={buttonValue}
              setButtonValue={setButtonValue}
            />
          }
        />

        {/* 다이나믹 라우팅 */}
        <Route
          path="detail/:id"
          element={
            <DetailPage letterData={letterData} setLetterData={setLetterData} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
