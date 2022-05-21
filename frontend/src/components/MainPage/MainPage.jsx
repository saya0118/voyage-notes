import MapBox from "../MapBox/MapBox";

function MainPage() {
  return (
    <div className="z-10 absolute w-full">
      <div className="">
        <div className="text-center">
          <div className="my-12">
            <h1 className="text-lg font-bold text-black">
              You've been countries.
            </h1>
            <MapBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
