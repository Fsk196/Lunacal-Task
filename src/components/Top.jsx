import React, { useState } from "react";
import Navbar from "./Navbar";
import RenderContent from "./RenderContent";

const Top = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <>
      <div className="relative w-[720px] h-[320px] bg-[#363C43] shadow-xl drop-shadow-7xl rounded-[8px]">
        <div className="absolute top-[20px] left-[12px] flex flex-col justify-between h-[160px]">
          <img src="/src/assets/Vector.png" alt="vector" />
          <img src="/src/assets/Frame.png" alt="boxes" />
        </div>
        <img
          src="/src/assets/topCRec.png"
          alt="topRec"
          className="absolute right-1 top-1/3 bottom-1/2"
        />
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="w-full h-fit flex justify-center items-center mt-5">
          <div className="w-[630px] h-[200px] flex flex-col justify-center items-center gap-4">
            <RenderContent activeTab={activeTab} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
