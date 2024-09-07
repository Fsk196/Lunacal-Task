import React from "react";
import Top from "./Top";
import Bottom from "./Bottom";

const RightSide = () => {
  return (
    <>
      <div className="relative w-[750px] h-[689px]  rounded-[27px] flex flex-col justify-between items-center">
        <Top />
        <div className="w-4/5 h-2 bg-gradient-to-b from-[#2828281A]/10 via-[#F8F8F81A]/10 to-[#FFFFFF0D]/5 rounded-lg shadow-lg"></div>
        <Bottom />
        <div className="absolute -bottom-6 w-4/5 h-2 bg-gradient-to-b from-[#2828281A]/10 via-[#F8F8F81A]/10 to-[#FFFFFF0D]/5 rounded-lg shadow-lg"></div>
      </div>
    </>
  );
};

export default RightSide;
