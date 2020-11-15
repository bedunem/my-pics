import React, { useState, useEffect } from "react";

import "./StyleGallery.css";
import Fulldata from "./Fulldata";
import GalleryComp from "./GalleryComp";
import MyNavBar from "./MyNavBar";
import MyFooter from "./MyFooter";
import Modal from "./Modal";

function Gallery() {
  const [galleries, setGallery] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    setGallery(Fulldata);
  }, [search]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <MyNavBar />
      <div className="Top">
        <form className="mySearch">
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>

        <div className="Gallery">
          {galleries.map((gallery) => (
            <GalleryComp
              key={gallery.id}
              title={gallery.title}
              image={gallery.image}
              views={gallery.numberOfViews}
              setSelectedImg={setSelectedImg}
            />
          ))}
          {selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
          )}
        </div>
        <MyFooter />
      </div>
    </>
  );
}

export default Gallery;
