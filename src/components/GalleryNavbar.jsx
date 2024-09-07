import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ImageContainer from "./ImageContainer";

const GalleryNavbar = ({ onAddImage, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    onAddImage(files);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, images.length - 3));
  };

  return (
    <>
      
      <div className="w-full flex justify-center items-center mt-[17px] flex-col">
        <div className="w-4/5 h-16 text-white flex justify-between">
          <button
            disabled={true}
            className="h-14 px-10 py-1 text-lg rounded-[20px] bg-black"
          >
            Gallery
          </button>

          <div className="flex flex-row items-center gap-5">
            <form>
              <input
                type="file"
                name="file"
                id="file"
                className="hidden"
                multiple
                accept="image/*"
                onChange={handleFileChange}
              />
              <label
                htmlFor="file"
                className="h-12 px-6 text-xs rounded-[30px] bg-[#363C43] shadow-gray-400/50 shadow-inner drop-shadow-addBtn flex items-center gap-1 font-medium cursor-pointer"
              >
                <IoMdAdd />
                ADD IMAGE
              </label>
            </form>

            <div className="flex justify-center items-center gap-4">
              <button
                onClick={handlePrev}
                className="w-[45px] h-[45px] bg-gradient-to-r from-[#303439] to-[#161718] text-md rounded-full flex items-center justify-center  drop-shadow-arrow-shadow"
              >
                <FaArrowLeft className="text-[#6F787C]" />
              </button>
              <button
                onClick={handleNext}
                className="w-[45px] h-[45px] bg-gradient-to-r from-[#303439] to-[#161718] text-md rounded-full flex items-center justify-center  drop-shadow-arrow-shadow"
              >
                <FaArrowRight className="text-[#6F787C]" />
              </button>
            </div>
          </div>
        </div>

        <div>
        <ImageContainer
        className="hidden"
        images={images}
        currentIndex={currentIndex}
      />
        </div>
      </div>
    </>
  );
};

export default GalleryNavbar;
