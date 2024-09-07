import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen w-full flex justify-center px-4 items-center bg-gradient-to-r from-[#373E44] to-[#191B1F] gap-5">
        <LeftSide />
        <RightSide />
      </div>
    </>
  );
}

export default App;
