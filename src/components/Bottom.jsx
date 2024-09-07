import React, { useState } from "react";
import GalleryNavbar from "./GalleryNavbar";
import { Rectangle, Vector, Frame } from "./index";

const Bottom = () => {
  const [images, setImages] = useState([
    Rectangle,
    Rectangle,
    Rectangle,
    Rectangle,
  ]);

  const addImages = (newImages) => {
    setImages([
      ...images,
      ...newImages.map((file) => URL.createObjectURL(file)),
    ]);
  };

  return (
    <>
      <div className="relative w-[720px] h-[320px] bg-[#363C43] shadow-xl drop-shadow-7xl  rounded-[8px]">
        <div className="absolute top-[20px] left-[12px] flex flex-col justify-between h-[160px]">
          <img src={Vector} alt="vector" />
          <img src={Frame} alt="boxes" />
        </div>

        <GalleryNavbar onAddImage={addImages} images={images} />
      </div>
    </>
  );
};

export default Bottom;
