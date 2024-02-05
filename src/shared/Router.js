import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import DetailPage from "pages/DetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* 동적라우팅 */}
        <Route path="detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
