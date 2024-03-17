"use client";
import { useMyContext } from "@/provider/MyContextProvider";
import EyeCloseIcon from "@/utils/icons/eyeCloseIcon";
import FileIcon from "@/utils/icons/fileIcon";
import ShareIcon from "@/utils/icons/shareIcon";
import WishIcon from "@/utils/icons/wishIcon";
import { flatData } from "@/utils/mock";
import Image from "next/image";
import Link from "next/link";
import ToogleOption from "../shared/toogleOption";
import ArrowdownIcon from "@/utils/icons/arrowdownIcon";
import SalesIcon from "@/utils/icons/salesIcon";
import SortByIcon from "@/utils/icons/sortByIcon";
import EyeIcon from "@/utils/icons/eyeIcon";
import { useState } from "react";

const MainBody = () => {
  const { menuOpen } = useMyContext();

  const img1 = "/images/image 1.png";
  const img2 = "/images/pexels-andrei-i-17867773.jpg";
  const img3 = "/images/pexels-magda-ehlers-5958376.jpg";

  const imgList = [img1, img2, img3, img3, img3];

  // Initialize state for each card's current image index
  const [currentImageIndices, setCurrentImageIndices] = useState(
    imgList.map(() => 0)
  );

  const nextImage = (index: number): void => {
    setCurrentImageIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      newIndices[index] = (newIndices[index] + 1) % imgList.length;
      return newIndices;
    });
  };

  const prevImage = (index: number): void => {
    setCurrentImageIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      newIndices[index] =
        newIndices[index] === 0 ? imgList.length - 1 : newIndices[index] - 1;
      return newIndices;
    });
  };

  return (
    <section>
      <div className="flex h-[570px] overflow-hidden w-full gap-[8px]  pr-[23.44px]">
        <div
          className={`h-[572px] ${
            menuOpen ? "w-[549px]" : "w-[780px]"
          }  overflow-hidden flex-shrink-0 custom-transition`}
        >
          <Image
            src="/images/Map.png"
            alt=""
            height={872}
            width={menuOpen ? 539 : 780}
          />
        </div>
        <div className="h-[560px] pb-20">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[8px] w-[142px]">
              <p className="">Sales</p>
              <ToogleOption />
              <p className="">Rents</p>
            </div>
            <div className="flex items-center w-[142px] justify-between">
              <div className="flex gap-4 items-center">
                <SalesIcon />
                <p className="">Price</p>
              </div>
              <ArrowdownIcon />
            </div>
            <div className="flex items-center w-[142px] justify-between">
              <div className="flex gap-4 items-center">
                <SortByIcon />
                <p className="">Sort By</p>
              </div>
              <ArrowdownIcon />
            </div>
          </div>
          <div className="flex h-[540px] flex-col gap-[8px] flex-grow pt-[16px] overflow-y-scroll overflow-x-hidden">
            {flatData &&
              flatData.map((item, index) => (
                <div
                  key={index}
                  className="w-[571.167px] h-[195px] flex-shrink-0 bg-[#D9D9D9] p-2 rounded-md flex gap-[7px]"
                >
                  <div className="w-[50%] relative custom-transition">
                    <div className="absolute flex gap-[19px] top-[8.81px] left-[6.81px]">
                      <div className="flex gap-[5px] text-white bg-[#0000007F] w-[56px] h-[30px] rounded-[5px] custom-center">
                        <EyeIcon />
                        <p className="font-black leading-[200%] text-[10px]">
                          65
                        </p>
                      </div>
                      <div className="flex gap-[5px] text-white bg-[#0000007F] w-[56px] h-[30px] rounded-[5px] custom-center">
                        <p className="font-black leading-[200%] text-[10px]">
                          1995
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => prevImage(index)}
                      className="absolute top-[45%] left-0"
                    >
                      <Image
                        src="/images/arrow-chevron-left.png"
                        alt=""
                        height={25}
                        width={27}
                      />
                    </button>
                    <button
                      onClick={() => nextImage(index)}
                      className="absolute top-[45%] right-0 transform rotate-180"
                    >
                      <Image
                        src="/images/arrow-chevron-left.png"
                        alt=""
                        height={25}
                        width={27}
                      />
                    </button>
                    <Image
                    className=""
                      src={imgList[currentImageIndices[index]]}
                      alt="Slider Image "
                      height={572}
                      width={780}
                    />
                  </div>
                  <div className="w-[60%]">
                    <div className="w-full flex justify-between">
                      <div className="">
                        <h4 className="text-[24px] font-semibold">
                          {item?.title}
                        </h4>
                      </div>
                      <div className="flex gap-[9.64px]">
                        <div className="w-[31.364px] h-[32.3px] custom-center bg-white rounded-full">
                          <ShareIcon />{" "}
                        </div>
                        <div className="w-[31.364px] h-[32.3px] custom-center bg-white rounded-full">
                          <WishIcon />{" "}
                        </div>
                        <div className="w-[31.364px] h-[32.3px] custom-center bg-white rounded-full">
                          <EyeCloseIcon />{" "}
                        </div>
                      </div>
                    </div>
                    <p className="text-[16px] font-light italic">
                      {item?.location}
                    </p>

                    <div className="flex justify-between items-start pt-[16.91px] w-full">
                      <div className="custom-card-info flex flex-col gap-[5.91]">
                        <p className="">{item?.room} Room</p>
                        <p className="">{item?.bedRoom} Bedroom</p>
                        <p className="">{item?.room} Room</p>
                      </div>
                      <div className="h-[52px] w-[157px] text-[24px] font-bold text-center">
                        {item?.price} €
                      </div>
                    </div>

                    <div className="flex gap-[3.36px] pt-[0px] pb-[12px]">
                      <Link
                        href="/"
                        className="flex text-[12px] font-light items-center gap-[5.04px]"
                      >
                        <FileIcon />
                        <span className="w-[44px]">Link 1</span>
                      </Link>
                      <Link
                        href="/"
                        className="flex text-[12px] font-light items-center gap-[5.04px]"
                      >
                        <FileIcon />
                        <span className="w-[44px]">Link 1</span>
                      </Link>
                      <Link
                        href="/"
                        className="flex text-[12px] font-light items-center gap-[5.04px]"
                      >
                        <FileIcon />
                        <span className="w-[44px]">Link 1</span>
                      </Link>

                      <button className="w-[93px] h-[40px] bg-white rounded-lg text-[14px] font-normal custom-center gap-[10px]">
                        apply
                        <div className="transfrom -rotate-90">
                          <ArrowdownIcon />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBody;
