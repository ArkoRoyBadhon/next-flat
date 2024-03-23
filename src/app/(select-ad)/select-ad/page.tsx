import LeftSideSelect from "@/components/select-ad/LeftSideSelect";
import MiddleSideSelect from "@/components/select-ad/MiddleSideSelect";
import RightSideSelect from "@/components/select-ad/RightSideSelect";

const SelectAd = () => {
  return (
    <div className="flex section-height flex-col xl:flex-row w-screen gap-[14px] ps-[10px] md:ps-[0px] pe-[10px]">
      {/* left side  */}
      <div className="flex-1">
        <LeftSideSelect />
      </div>

      <div className="flex flex-col gap-[10px] md:flex-row md:h-full px-[10px]">
        {/* middle side  */}
        <div className=" md:w-[460px] overflow-y-scroll flex-1">
          <MiddleSideSelect />
        </div>

        {/* right side  */}
        <div className="md:w-[469px] bg-[#d9d9d9] p-[10px] rounded-sm overflow-y-scroll px-[10px] flex-1 mt-[40px] md:mt-[0px] h-full">
          <RightSideSelect />
        </div>
      </div>
    </div>
  );
};

export default SelectAd;
