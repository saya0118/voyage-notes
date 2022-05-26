import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Diary from "./components/DiaryPage/DiaryPage";
import MapPage from "./components/MapPage/MapPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/diary" element={<Diary />} />
        <Route path="/" element={<MapPage />} />
      </Routes>
    </>
  );
};

export default App;
