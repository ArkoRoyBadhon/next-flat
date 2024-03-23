import SalesIcon from "@/utils/icons/salesIcon";
import ToogleOption from "./toogleOption";
import ArrowdownIcon from "@/utils/icons/arrowdownIcon";
import SortByIcon from "@/utils/icons/sortByIcon";

const FilterOptions = () => {
    return (
        <div className="flex h-[40px] w-full justify-end items-center gap-[16px]">
          <div className="flex items-center gap-[8px] w-[142px] text-[12px] lg:text-[16px] ">
            <p className="hidden md:block">Sales</p>
            <ToogleOption />
            <p className="">Rents</p>
          </div>
          <div className="flex items-center lg:w-[142px] justify-between gap-1 hover:bg-[#EFF6FF] p-2">
            <div className="flex items-center text-[12px] lg:text-[16px] gap-2 md:gap-4">
              <SalesIcon />
              <p className="">Price</p>
            </div>
            <ArrowdownIcon />
          </div>
          <div className="flex items-center lg:w-[142px] justify-between hover:bg-[#EFF6FF] p-2">
            <div className="flex gap-2 md:gap-4 items-center text-[12px] lg:text-[16px]">
              <SortByIcon />
              <p className="">Sort By</p>
            </div>
            <ArrowdownIcon />
          </div>
        </div>
    );
};

export default FilterOptions;