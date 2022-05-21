import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CountryList from "../CountryList/CountryList";

const Diary = () => {
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
    <div className="max-h-screen">
      <div className="relative">
        <Header />
        <MainPage />
        <img
          src={image?.urls?.full}
          alt="unsplash images"
          className="z-0 grayscale-70 w-screen h-lg overflow-hidden object-cover relative"
        />
        <Footer />
      </div>
    </div>
  );
}

export default Diary;
