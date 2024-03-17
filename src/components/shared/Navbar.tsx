import HomeIcon from "@/utils/icons/homeIcon";
import SearchIcon from "@/utils/icons/searchIcon";
import UkFlag from "@/utils/icons/ukFlag";
import Image from "next/image";
import ToogleOption from "./toogleOption";

const Navbar = () => {
  return (
    <header>
      <div className="container flex justify-between items-center">
        <div className="flex gap-[33.56px]">
          <div className="">
            <Image src="/images/Logo.png" alt="" height={76} width={154.56} />
          </div>
          <div className="flex gap-[19.34px] items-center ">
            <SearchIcon />
            <input
              type="text"
              placeholder="Type to search a localisation......"
              className="w-[214.724px] h-[18px] flex-shrink-0 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex gap-[17px] items-center">
          <div className="">
            <ToogleOption />
          </div>
          <div className="">
            <UkFlag />
          </div>
          <button className="bg-[#3C50E0] w-[168.269px] custom-center text-white rounded-[30px] flex gap-[8.33px] py-[5px]">
            <HomeIcon />
            <p className="text-[16px] font-semibold leading-[150%]">
              Create an Ad
            </p>
          </button>
          <button className="bg-[#3C50E0] w-[168.269px] custom-center text-white rounded-[30px] flex gap-[8.33px] py-[5px]">
            <p className="text-[16px] font-semibold leading-[150%]">
              Log in / Sign up
            </p>
          </button>
          <div className="bg-[#3C50E0]"></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
