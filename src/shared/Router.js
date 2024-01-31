import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";

import { useSelector } from "react-redux";

const Router = () => {
  // useSelector를 이용해서 store라는  스토어에서 조회하기
  const data = useSelector((state) => {
    return state;
  });

  //  console.log("data", data);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={data} />} />

        {/* 동적라우팅 */}
        <Route path="detail/:id" element={<Detail data={data} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
