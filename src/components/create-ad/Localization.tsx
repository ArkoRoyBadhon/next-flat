import ArrowdownIcon from "@/utils/icons/arrowdownIcon";
import EditIcon from "@/utils/icons/editIcon";
import SearchIcon from "@/utils/icons/searchIcon";

const Localization = () => {
  return (
    <div className="pt-[50px]">
      <h4 className="text-[32px] font-medium leading-normal">Localization</h4>
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
              <p className="capitalize text-[16px] whitespace-nowrap text-ellipsis leading-normal text-gray-400">Share the exact localization</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div
            className={`md:w-[97%] lg:flex-1 lg:h-full overflow-hidden flex-shrink-0 custom-transition `}
          >
            <iframe
              className="h-full w-full"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.173876283906!2d-122.08374978474199!3d37.422476979834715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbc93cf893933%3A0x4b192a2115e131e9!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1615794627853!5m2!1sen!2sus"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Localization;
