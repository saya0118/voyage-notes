import CountryList from "../CountryList/CountryList";
import DiaryCard from "../DiaryCard/DiaryCard";

const DiaryPage = () => {
  return (
    <div className="w-full h-lg bg-thirdly">
      <div className="mx-40 flex">
        <div className="w-9/12">
          <DiaryCard />
        </div>
        <div className="mt-20">
          <CountryList />
        </div>
      </div>
    </div>
  );
};

export default DiaryPage;
