import React, { useState, useEffect } from "react";
// import data from './data/data';
import MyNavBar from "./MyNavBar";
import { Carousel, Navbar, Nav } from "react-bootstrap";
import "./style.css";
import MyCarousel from "./MyCarousel";
import MyFooter from "./MyFooter";
import Fulldata from "./Fulldata";
import Gallery from "./Gallery";

function App() {
  const [counter, setCounter] = useState(0);
  const [galleries, setGallery] = useState([]);

  useEffect(() => {
    setGallery(Fulldata);
  }, []);

  return (
    <>
      <div className="container-fluid">
        <MyNavBar />
        <MyCarousel />
        <MyFooter />
        {/* {
galleries.map(gallery => (
<Gallery/>
))
} */}
      </div>
    </>
  );
}

export default App;
