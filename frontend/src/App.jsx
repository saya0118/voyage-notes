import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Diary from "./components/Diary/Diary";
import MainPage from "./components/MainPage/MainPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/diary" element={<Diary />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default App;
