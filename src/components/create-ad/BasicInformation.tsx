import ArrowdownIcon from "@/utils/icons/arrowdownIcon";
import EditIcon from "@/utils/icons/editIcon";
import SearchIcon from "@/utils/icons/searchIcon";
import Image from "next/image";

const BasicInformation = () => {
  return (
    <div className="pt-[50px]">
      <h4 className="text-[32px] font-medium leading-normal">Basic Information</h4>
      <div className="flex gap-[53px] pt-[62px]">
        <div className="flex-1 ">
          <form action="" className="grid grid-cols-2 gap-[57px]">
            <div className="border flex items-center h-[55px] rounded-[4px]">
              <div className="px-2">
                <SearchIcon />{" "}
              </div>
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Country*"
              />
              <button className="px-2">
                <ArrowdownIcon />
              </button>
            </div>
            <div className="border flex items-center h-[55px] rounded-[4px]">
              <div className="px-2">
                <SearchIcon />{" "}
              </div>
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="City*"
              />
              <button className="px-2">
                <ArrowdownIcon />
              </button>
            </div>
            <div className="border flex items-center h-[55px] rounded-[4px]">
              <div className="px-2">
                <SearchIcon />{" "}
              </div>
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Region/state*"
              />
              <button className="px-2">
                <ArrowdownIcon />
              </button>
            </div>
            <div className="border flex items-center h-[55px] rounded-[4px]">
              <div className="px-2">
                <SearchIcon />{" "}
              </div>
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Zip Code*"
              />
              <button className="px-2">
                <ArrowdownIcon />
              </button>
            </div>
            <div className="border flex items-center h-[55px] rounded-[4px]">
              <div className="px-2">
                <SearchIcon />{" "}
              </div>
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Area*"
              />
              <button className="px-2">
                <ArrowdownIcon />
              </button>
            </div>
            <div className="border flex items-center h-[55px] rounded-[4px]">
              <div className="px-2">
                <SearchIcon />{" "}
              </div>
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Street Address*"
              />
              <button className="px-2">
                <ArrowdownIcon />
              </button>
            </div>
          </form>

          <div className="flex justify-between pt-[50px]">
            <div className="flex items-center gap-[12px] text-blue-400 w-[437px]">
              <p className="capitalize text-[16px] whitespace-nowrap text-ellipsis leading-normal line-clamp-1">
                5.354708943431563,-3.9874719330168893
              </p>
              <button className="flex gap-[10px] items-center text-[16px] border border-blue-400 px-[20px] py-[15px] rounded-[4px]">
                <EditIcon /> Edit
              </button>
            </div>
            <div className="flex items-center gap-[12px]">
              <input type="checkbox" />
              <p className="capitalize text-[16px] whitespace-nowrap text-ellipsis leading-normal">Share the exact localization</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div
            className={`md:w-[97%] lg:flex-1 lg:h-full overflow-hidden flex-shrink-0 custom-transition `}
          >
            <div className="grid grid-rows-3 grid-cols-3 gap-4">
                <div className="row-span-2 col-span-2 custom-grid-box w-fit">
                    <Image src="/images/Image.png" alt="" width={578} height={314} />
                </div>
                <div className="row-span-1 col-span-1 custom-grid-box">
                <Image src="/images/Image (1).png" alt="" width={290} height={150} />
                </div>
                <div className="row-span-1 col-span-1 custom-grid-box"></div>
                <div className="row-span-1 col-span-1 custom-grid-box"></div>
                <div className="row-span-1 col-span-1 custom-grid-box"></div>
                <div className="row-span-1 col-span-1 custom-grid-box"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default BasicInformation;