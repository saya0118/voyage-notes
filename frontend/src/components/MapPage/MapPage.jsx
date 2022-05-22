import { useState, useEffect } from "react";
import MapBox from "../MapBox/MapBox";
import axios from "axios";

function MainPage() {
  const [image, setImage] = useState([]);
  const api = process.env.REACT_APP_ACCESS_KEY;
  const url = `https://api.unsplash.com/search/photos?query=sea&client_id=${api}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      const data = res.data.results;
      var randomIndex = Math.floor(Math.random() * data.length);
      setImage(data[randomIndex]);
    });
  }, []);
  return (
    <div className="w-full">
      <div className="absolute z-10 left-1/2 -translate-x-2/4">
        <h1 className="mt-20 mb-2 text-2xl text-center font-bold text-white">
          You've been countries.
        </h1>
        <MapBox />
      </div>
      <img
        src={image?.urls?.full}
        alt="unsplash images"
        className="z-0 grayscale-70 w-screen h-lg overflow-hidden object-cover relative"
      />
    </div>
  );
}

export default MainPage;
