import { useState } from "react";
import CountryList from "../CountryList/CountryList";
import DiaryCard from "../DiaryCard/DiaryCard";

const DiaryPage = () => {
  const [cards, setCards] = useState([]);
  
  return (
    <div className="w-full h-lg bg-thirdly">
      <div className="mx-40 flex">
        <div className="w-9/12">
          <ul>
            {cards.map((card) => (
              <li key={card.id}>
                <DiaryCard />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-20">
          <CountryList />
        </div>
      </div>
    </div>
  );
};

export default DiaryPage;
