import React from "react";
import MediaList from "../components/media/MediaList";
import Navbar from "../components/Navbar";
import AdsCards from "../components/products/AdsCards";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <AdsCards />
      <MediaList />
    </div>
  );
};

export default HomePage;
