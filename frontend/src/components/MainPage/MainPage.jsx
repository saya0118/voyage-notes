import MapBox from "../Map/Map";
import CountryList from "../CountryList/CountryList";

function MainPage() {
  return (
    <div className="z-10 absolute mx-40">
      <div className="flex">
        <div className="text-center">
          <div className="my-12">
            <h1 className="text-lg font-bold text-black">
              You've been countries.
            </h1>
            <MapBox />
          </div>
        </div>
        <div className="my-12">
          <CountryList />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
