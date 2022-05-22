import React, { useState, createContext } from "react";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";

const App = () => {
  const PageToggleStatusContext = createContext();
  const [diary, setDiary] = useState(false);
  return (
    <div>
      <PageToggleStatusContext.Provider value={{ diary, setDiary }}>
        <Header />
        <MainPage />
      </PageToggleStatusContext.Provider>
    </div>
  );
};

export default App;
