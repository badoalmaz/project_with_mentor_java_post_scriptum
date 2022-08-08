import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div id="aos" data-aos="zoom-in"></div>
    </>
  );
};
export default HomePage;
