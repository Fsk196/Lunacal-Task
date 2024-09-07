import React from "react";

const ImageContainer = ({ images, currentIndex }) => {
  if (images.length === 0) {
    return <div>No Images available.</div>;
  }
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-10/12 h-[300px] overflow-hidden">
          {/* <img src={image} alt={alt}/> */}
          <div
            className="flex gap-4 mt-4 transition-all duration-300 image-container"
            style={{
              transform: `translateX(-${currentIndex * (190 + 16)}px)`,
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={image}
                  alt={`Image ${index}`}
                  width={190}
                  height={179}
                  className="object-cover rounded-md shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageContainer;
