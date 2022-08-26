import Page1 from "./Components/Page/Page1.jsx";
import Page2 from "./Components/Page/Page2.jsx";
import Page3 from "./Components/Page/Page3.jsx";
import MainPage from "./Components/MainPage/MainPage.js";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";

const weather = () => {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/Current" element={<Page1 />} exact />
          <Route path="/Forecast" element={<Page2 />} exact />
          <Route path="/Readme" element={<Page3 />} exact />
          <Route path="/" element={<MainPage />} exact />
        </Routes>
      </main>
    </div>
  );
};

export default weather;
