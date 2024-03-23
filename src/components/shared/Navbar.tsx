"use client";
import HomeIcon from "@/utils/icons/homeIcon";
import SearchIcon from "@/utils/icons/searchIcon";
import UkFlag from "@/utils/icons/ukFlag";
import Image from "next/image";
import ToogleOption from "./toogleOption";
import MobileMenuIcon from "@/utils/icons/mobileMenuIcon";
import BellIcon from "@/utils/detailPageIcon/bellIcon";
import MessageIcon from "@/utils/detailPageIcon/messageIcon";
import RedEclipse from "@/utils/detailPageIcon/redEclipse";
import ArrowRight from "@/utils/icons/arrowRight";
import { useState } from "react";
import CloseIcon from "@/utils/icons/closeIcon";
import Link from "next/link";

const Navbar = () => {
  // const [logInfo, setLogInfo] = useState(false);
  const [searchBtn, setSearchBtn] = useState(false);
  // let user;

  // if (logInfo) {
  //   user = { email: "test@gmail.com" };
  // } else {
  //   user = null;
  // }

  // const user = null

  return (
    <header>
      <div className="w-screen flex justify-between items-center">
        <div className="flex gap-[33.56px]">
          <Link href="/" className="">
            <Image src="/images/Logo.png" alt="" height={76} width={154.56} />
          </Link>
          <div className="md:flex gap-[19.34px] items-center hidden">
            <div
              className="block lg:hidden"
              onClick={() => setSearchBtn(!searchBtn)}
            >
              <SearchIcon />
            </div>
            <div className="hidden lg:block">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Type to search a localisation......"
              className="w-[214.724px] h-[18px] flex-shrink-0 focus:outline-none  hidden lg:block"
            />
            <div
              className={`${
                searchBtn ? "absolute" : "hidden"
              } top-[18px] left-[220px] bg-white z-20 w-[300px] h-[40px] flex gap-2 items-center ps-1 rounded-lg`}
            >
              <input
                type="text"
                defaultValue="hello "
                placeholder="Type to search a localisation......"
                className="w-[214.724px] h-[18px] flex-shrink-0 focus:outline-none"
              />
              <span onClick={() => setSearchBtn(false)}>
                <CloseIcon />
              </span>
            </div>
          </div>
        </div>
        <div className="block md:hidden pe-[5px]">
          <MobileMenuIcon />
        </div>
        <div className="hidden md:flex gap-[17px] items-center">
          <div className="">
            <ToogleOption />
          </div>
          <div className="relative">
            <UkFlag />
            <div className="absolute bg-gray-400 w-[4px] h-[4px] rounded-full right-[10px] bottom-[5px]">
              {/* <ArrowdownIcon /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
              >
                <path
                  d="M13.2217 7.64174C13.0772 7.48653 12.8817 7.39941 12.678 7.39941C12.4742 7.39941 12.2787 7.48653 12.1342 7.64174L9.36534 10.5917L6.63501 7.64174C6.4905 7.48653 6.29502 7.39941 6.09126 7.39941C5.8875 7.39941 5.69202 7.48653 5.54751 7.64174C5.47522 7.71921 5.41784 7.81138 5.37868 7.91293C5.33953 8.01448 5.31937 8.1234 5.31937 8.23341C5.31937 8.34342 5.33953 8.45234 5.37868 8.55389C5.41784 8.65544 5.47522 8.74761 5.54751 8.82507L8.81773 12.3584C8.88943 12.4365 8.97474 12.4985 9.06873 12.5408C9.16271 12.5831 9.26352 12.6049 9.36534 12.6049C9.46716 12.6049 9.56797 12.5831 9.66196 12.5408C9.75594 12.4985 9.84125 12.4365 9.91295 12.3584L13.2217 8.82507C13.294 8.74761 13.3514 8.65544 13.3906 8.55389C13.4297 8.45234 13.4499 8.34342 13.4499 8.23341C13.4499 8.1234 13.4297 8.01448 13.3906 7.91293C13.3514 7.81138 13.294 7.71921 13.2217 7.64174Z"
                  fill="#71839B"
                />
              </svg>
            </div>
          </div>
          <Link
            href="/create-ad"
            className="bg-[#3C50E0] w-[168.269px] custom-center text-white rounded-[30px] flex gap-[8.33px] py-[5px]"
          >
            <HomeIcon />
            <p className="text-[16px] font-semibold leading-[150%]">
              Create an Ad
            </p>
          </Link>
          {/* {user?.email ? (
            <div className="flex gap-[12px] items-center">
              <div className="w-[33.373px] h-[27.821px] rounded-full custom-center bg-[#E2E8F0]">
                <BellIcon />
              </div>
              <div className="w-[33.373px] h-[27.821px] rounded-full custom-center bg-[#E2E8F0] relative">
                <MessageIcon />
                <div className="absolute top-0 right-0">
                  <RedEclipse />
                </div>
              </div>
              <div
                onClick={() => setLogInfo(false)}
                className="flex hap-[10px]"
              >
                <Image
                  src="/images/Ellipse 2824.png"
                  alt=""
                  width={42.795}
                  height={36.549}
                />
                <div className="transform rotate-90">
                  <ArrowRight />
                </div>
              </div>
            </div>
          ) : ( */}
            <Link
            href="/login"
              // onClick={() => setLogInfo(true)}
              className="bg-[#3C50E0] w-[168.269px] custom-center text-white rounded-[30px] flex gap-[8.33px] py-[5px]"
            >
              <p className="text-[16px] font-semibold leading-[150%]">
                Log in / Sign up
              </p>
            </Link>
          {/* )} */}
          <div className="bg-[#3C50E0]"></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
