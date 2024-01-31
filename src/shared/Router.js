import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";

// import { useSelector } from "react-redux";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* 동적라우팅 */}
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
