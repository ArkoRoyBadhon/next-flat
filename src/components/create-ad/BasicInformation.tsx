
import Image from "next/image";
import SaleToogle from "../shared/SaleToggle";
import InputField from "./InputField";
import PlusIcon from "@/utils/icons/plusIcon";

const BasicInformation = () => {
  return (
    <div className="py-[50px]">
      <div className="flex flex-col lg:flex-row gap-[20px] pt-[62px]">
        <div className="flex-1 ">
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[0px] justify-between w-full">
            <h4 className="text-[32px] font-medium leading-normal">
              Basic Information
            </h4>
            <InputField label="Email Address" />
          </div>
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[10px] pt-[38px] w-full">
            <SaleToogle />
            <InputField label="You Are*" />
            <InputField label="Real Estate Agency name*" />
            <InputField label="Property Owner Email*" />
          </div>
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[10px] pt-[38px]">
            <InputField label="Number of Room*" />
            <div className="relative border border-[#868686] py-1 px-1 w-full md:w-[200px] rounded-md h-[55px] flex justify-start">
              <label
                htmlFor=""
                className="absolute top-[-10px] left-2 text-[14px] bg-white px-1 text-gray-400"
              >
                Price
              </label>
              <input
                type="text"
                className="focus:outline-none text-[16px] w-full px-2"
              />
            </div>
            <div className="relative border border-[#868686] py-1 px-1 w-full md:w-[200px] rounded-md h-[55px] flex justify-start">
              <label
                htmlFor=""
                className="absolute top-[-10px] left-2 text-[14px] bg-white px-1 text-gray-400"
              >
                Surface
              </label>
              <input
                type="text"
                className="focus:outline-none text-[16px] w-full px-2"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between pt-[38px] gap-[20px] md:gap-[0px]">
            <InputField label="Number Of Bedroom*" />
            <button className="flex justify-between rounded-md text-white w-[368px] bg-[#5956E9] p-[14px]">
              <span>Add a Bedroom to rent separately</span> <PlusIcon />
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div
            className={`md:w-[97%] lg:flex-1 lg:h-full overflow-hidden flex-shrink-0 custom-transition `}
          >
            <div className="grid grid-rows-3 grid-cols-3 gap-4">
              <div className="row-span-2 col-span-2 custom-grid-box w-fit">
                <Image
                  src="/images/Image.png"
                  alt=""
                  width={578}
                  height={314}
                />
              </div>
              <div className="row-span-1 col-span-1 custom-grid-box">
                <Image
                  src="/images/Image (1).png"
                  alt=""
                  width={290}
                  height={150}
                />
              </div>
              <div className="row-span-1 col-span-1 custom-grid-box  relative flex justify-center items-center">
                <div className="absolute bg-white w-[16px] h-[50px] md:h-[100px] z-10"></div>
                <div className="absolute bg-white h-[16px] w-[80px] md:w-[100px] z-10"></div>
              </div>
              <div className="row-span-1 col-span-1 custom-grid-box flex justify-center items-center">
                <div className="absolute bg-white w-[16px] h-[50px] md:h-[100px] z-10"></div>
                <div className="absolute bg-white h-[16px] w-[80px] md:w-[100px] z-10"></div>
              </div>
              <div className="row-span-1 col-span-1 custom-grid-box flex justify-center items-center">
                <div className="absolute bg-white w-[16px] h-[50px] md:h-[100px] z-10"></div>
                <div className="absolute bg-white h-[16px] w-[80px] md:w-[100px] z-10"></div>
              </div>
              <div className="row-span-1 col-span-1 custom-grid-box flex justify-center items-center">
                <div className="absolute bg-white w-[16px] h-[50px] md:h-[100px] z-10"></div>
                <div className="absolute bg-white h-[16px] w-[80px] md:w-[100px] z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-[40px] pt-[38px]">
        <InputField label="Number Of Bathroom*" />
        <div className="">
          <p className="text-[14px] leading-normal capitalize font-light text-[#868686]">
            Do you want to publish this add in other referencing site:
          </p>
          <div className="flex justify-between">
            <div className="flex items-center gap-[12px]">
              <input type="checkbox" />
              <p className="capitalize text-[14px] font-medium whitespace-nowrap text-ellipsis leading-[22px] text-[#64748B]">
                Realtor.com
              </p>
            </div>
            <div className="flex items-center gap-[12px]">
              <input type="checkbox" />
              <p className="capitalize text-[14px] font-medium whitespace-nowrap text-ellipsis leading-[22px] text-[#64748B]">
                le bon coin.com
              </p>
            </div>
            <div className="flex items-center gap-[12px]">
              <input type="checkbox" />
              <p className="capitalize text-[14px] font-medium whitespace-nowrap text-ellipsis leading-[22px] text-[#64748B]">
                Zillow.com
              </p>
            </div>
          </div>
        </div>
        <div className="relative border border-[#868686] py-1 px-1 w-[350px] md:w-[368px] h-[55px] flex justify-start rounded-md">
          <label
            htmlFor=""
            className="absolute top-[-10px] left-2 text-[14px] bg-white px-1 text-gray-400 capitalize"
          >
            Did you Already publish this property Somewhere Else
          </label>
          <input
            type="text"
            className="focus:outline-none text-[16px] w-full px-2"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;
