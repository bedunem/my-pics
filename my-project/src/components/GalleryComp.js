import React, { useState } from "react";
import style from "./StyleGalleryPics.module.css";
import Fulldata from "./Fulldata";
import Modal from "./Modal";

const GalleryComp = ({ key, image, title, views, setSelectedImg }) => {
  const [counter, setCounter] = useState(views);

  return (
    <div
      className={style.myGallery}
      onClick={() => {
        setCounter(counter + 1);
        setSelectedImg(image);
        

      }}
    >
      <h5>{key}</h5>
      <div className={style.backdrop}>
        <img src={image} alt="" />
        <h5>{title}</h5>
        <h5>{counter}</h5>
      </div>
    </div>
  );
};

export default GalleryComp;
