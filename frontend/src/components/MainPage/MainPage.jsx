import MapBox from "../Map/Map";

function MainPage() {
  return (
    <div className="mx-48 z-10 absolute">
      <div className="text-center">
        <div className="my-12">
          <MapBox />
        </div>
        <div className="my-12">
          <h1>You've been 10 countries.</h1>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
