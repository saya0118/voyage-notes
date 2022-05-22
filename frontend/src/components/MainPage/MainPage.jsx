import React, { useContext } from "react";
import Diary from "../Diary/Diary";
import MapPage from "../MapPage/MapPage";
import { DiaryItemStatusContext } from "../../App";

const MainPage = () => {
  const { diaryItems, setDiaryItems } = useContext(DiaryItemStatusContext);
  return (
    <MapPage/>
  )
};

export default MainPage;
