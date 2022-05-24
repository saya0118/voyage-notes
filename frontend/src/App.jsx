import React, { useState, Router } from "react";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";

export const DiaryItemStatusContext = React.createContext();

const App = () => {
  const [diaryItems, setDiaryItems] = useState([]);
  return (
    <div>
      <DiaryItemStatusContext.Provider value={{ diaryItems, setDiaryItems }}>
        <Header />
        <MainPage />
      </DiaryItemStatusContext.Provider>
    </div>
  );
};

export default App;
