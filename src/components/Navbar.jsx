import React from "react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from "./ui/menubar";
import { cn } from "../lib/utils";

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <div className="w-full flex justify-center mt-[17px]">
        <div className="w-[87%] h-16 text-white">
          <Menubar className="flex justify-between h-16 border-0 rounded-[23px]">
            <MenubarMenu>
              <MenubarTrigger
                onClick={() => setActiveTab("about")}
                // className="h-14 px-10 py-1 text-lg rounded-[20px]"
                className={cn(
                  "flex h-14 cursor-pointer select-none items-center rounded-[20px] px-12 py-1 text-lg font-medium outline-none",
                  activeTab === "about"
                    ? "bg-[#28292F] text-white shadow-2xl shadow-black"
                    : "focus:bg-[#28292F] focus:text-white"
                )}
              >
                About Me
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger
                onClick={() => setActiveTab("experiences")}
                // className="h-14 px-10 py-1 text-lg rounded-[20px]"
                className={cn(
                  "flex h-14 cursor-pointer select-none items-center rounded-[20px] px-12 py-1 text-lg font-medium outline-none",
                  activeTab === "experiences"
                    ? "bg-[#28292F] text-white shadow-2xl shadow-black"
                    : "focus:bg-[#28292F] focus:text-white"
                )}
              >
                Experiences
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger
                onClick={() => setActiveTab("recommended")}
                // className="h-14 px-12 py-1 text-lg rounded-[20px]"
                className={cn(
                  "flex h-14 cursor-pointer select-none items-center rounded-[20px] px-12 py-1 text-lg font-medium outline-none",
                  activeTab === "recommended"
                    ? "bg-[#28292F] text-white shadow-2xl shadow-black"
                    : "focus:bg-[#28292F] focus:text-white"
                )}
              >
                Recommended
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </>
  );
};

export default Navbar;
