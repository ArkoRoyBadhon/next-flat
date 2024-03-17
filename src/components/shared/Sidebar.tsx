"use client";
import ArrowdownIcon from "@/utils/icons/arrowdownIcon";
import FilterIcon from "@/utils/icons/filterIcon";
import { sidebarMenu } from "@/utils/mock";
import { useState } from "react";

const Sidebar = () => {
  const [collapseBtn, setCollapseBtn] = useState(true);

  return (
    <div
      className={`${
        collapseBtn ? "w-[288px] px-[20px]" : "w-[64px] px-[16px]"
      }  h-[570px] flex flex-col justify-between items-start pt-[20px] custom-transition relative`}
    >
      <button
        onClick={() => setCollapseBtn(!collapseBtn)}
        className="absolute right-[20px] top-[25px] bg-white rounded-full h-8 w-8 custom-center transform rotate-90 custom-shadow"
      >
        <ArrowdownIcon />
      </button>
      <div className="flex items-center gap-[12px] p-2">
        <FilterIcon />
        <p
          className={`${
            collapseBtn ? "block" : "hidden"
          } custom-transition text-[24px] leading-[24px] font-bold text-[#324054]`}
        >
          Filters
        </p>
      </div>
      <div className="">
        {sidebarMenu &&
          sidebarMenu.map((item) => {
            return (
              <div
                className={`${
                  collapseBtn
                    ? "w-[248px] p-[12px]"
                    : "w-[28px] px-[4px] py-[12px]"
                } custom-transition flex justify-between hover:bg-[#EFF6FF] rounded-md`}
              >
                <div className={`flex ${collapseBtn ? "gap-[16px]" : "gap-[0px]"}`}>
                  {item?.icon}
                  <p
                    className={`text-[16px] font-semibold leading-[125%] hover:text-[#2D68FE] custom-transition line-clamp-1 ${
                      collapseBtn ? "block" : "hidden"
                    }`}
                  >
                    {item?.title}
                  </p>
                </div>
                <div className={`${collapseBtn ? "block" : "hidden"}`}>
                  <ArrowdownIcon />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Sidebar;
