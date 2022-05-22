import React, { useContext } from "react";
import Diary from "../Diary/Diary";
import MapPage from "../MapPage/MapPage";

const MainPage = () => {
  const diary = useContext(PageToggleStatusContext);
  return diary ? <Diary /> : <MapPage />;
};

export default MainPage;
