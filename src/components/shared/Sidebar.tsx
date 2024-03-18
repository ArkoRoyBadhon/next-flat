"use client";
import { useMyContext } from "@/provider/MyContextProvider";
import ArrowdownIcon from "@/utils/icons/arrowdownIcon";
import FilterIFunnelcon from "@/utils/icons/filterIFunnelcon";
import { sidebarMenu } from "@/utils/mock";

const Sidebar = () => {
  const { menuOpen, setMenuClose } = useMyContext();

  return (
    <div
      className={` ${menuOpen ? "absolute" : ""} max-w-[288px] h-[85vh] lg:h-[85vh] top-0 left-0 md:static z-20 flex flex-col justify-between items-start pt-[20px] custom-transition opacity-100 bg-white`}
    >
        <button
          onClick={() => setMenuClose(!menuOpen)}
          className={`absolute left-[205px] top-[25px] bg-white rounded-full h-8 w-8 custom-center transform  custom-shadow ${
            menuOpen ? "rotate-90" : "hidden"
          }`}
        >
          <ArrowdownIcon />
        </button>
        <div className="flex items-center gap-[12px] p-2 ">
          <div
            onClick={() => setMenuClose(!menuOpen)}
            className="bg-[#2D68FE] w-[32px] h-[32px] custom-center rounded-[4px]"
          >
            <FilterIFunnelcon />
          </div>
          <p
            className={`${
              menuOpen ? "block" : "hidden"
            } custom-transition text-[24px] leading-[24px] font-bold text-[#324054]`}
          >
            Filters
          </p>
        </div>
        <div className="flex flex-col gap-[12px]">
          {sidebarMenu &&
            sidebarMenu.map((item) => {
              return (
                <div key={item?.title} className="group">
                  <div
                    className={`p-[12px] ${
                      menuOpen ? "w-[248px]" : "w-[28px] py-[12px]"
                    } custom-transition flex justify-between group-hover:bg-[#EFF6FF] rounded-md`}
                  >
                    <div
                      className={`flex group-hover:bg-[#EFF6FF] ${
                        menuOpen ? "gap-[16px]" : "gap-[0px]"
                      }`}
                    >
                      {item?.icon}
                      <p
                        className={`text-[16px] font-semibold leading-[125%] group-hover:text-[#2D68FE] custom-transition line-clamp-1 ${
                          menuOpen ? "block" : "hidden"
                        }`}
                      >
                        {item?.title}
                      </p>
                    </div>
                    <div className={`${menuOpen ? "block" : "hidden"}`}>
                      {item?.submenu.length > 0 && <ArrowdownIcon />}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
    </div>
  );
};

export default Sidebar;
