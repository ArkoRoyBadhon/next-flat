"use client";
import SunIcon from "@/utils/icons/sunIcon";
import { useState } from "react";

const SaleToogle: React.FC = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <button
      className="w-[154px] h-[61px] bg-gray-800 rounded-full relative p-[3px] flex justify-between text-white items-center"
      onClick={handleToggle}
    >
      <div
        className={`h-[58px] w-[80px] rounded-full  absolute transition-all ease-in top-[2px] ${
          isOn ? "right-[2px]" : "right-[74px] "
        } center duration-[0.3s] cursor-pointer custom-shadow custom-center bg-red-500`}
      >
        {/* <SunIcon /> */}
      </div>
      <div className="px-[20px] z-20 text-[14px] font-bold leading-[161.5%] capitalize">Sale</div>
      <div className="px-[20px] z-20 text-[14px] font-bold leading-[161.5%] capitalize">Rent</div>
    </button>
  );
};

export default SaleToogle;
