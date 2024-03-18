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
  const img4 = "/images/imddd.jpg";
  const img5 = "/images/pexels-ibrahgraphy-deer.jpg";

  const imgList = [img1, img2, img3, img4, img5];

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
    <div className=" flex w-screen flex-col lg:flex-row h overflow-hidden gap-[16px] lg:pr-[23.44px] pt-[10px] lg:pt-[0px]">
      <div
        className={`md:w-[97%] lg:flex-1 h-[400px] lg:h-full  overflow-hidden flex-shrink-0 custom-transition `}
      >
        <iframe
          className="h-full w-full"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.173876283906!2d-122.08374978474199!3d37.422476979834715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbc93cf893933%3A0x4b192a2115e131e9!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1615794627853!5m2!1sen!2sus"
          // allowfullscreen
        ></iframe>
      </div>
      <div className="h-full w-[100%] lg:w-[571px]">
        <div className="flex h-[40px] w-full justify-between items-center">
          <div className="flex items-center gap-[8px] w-[142px] text-[12px] md:text-[16px] ">
            <p className="">Sales</p>
            <ToogleOption />
            <p className="">Rents</p>
          </div>
          <div className="flex items-center md:w-[142px] justify-between hover:bg-[#EFF6FF] p-2">
            <div className="flex items-center text-[12px] md:text-[16px] gap-2 md:gap-4">
              <SalesIcon />
              <p className="">Price</p>
            </div>
            <ArrowdownIcon />
          </div>
          <div className="flex items-center md:w-[142px] justify-between hover:bg-[#EFF6FF] p-2">
            <div className="flex gap-2 md:gap-4 items-center text-[12px] md:text-[16px]">
              <SortByIcon />
              <p className="">Sort By</p>
            </div>
            <ArrowdownIcon />
          </div>
        </div>
        <div className="h-[calc(100vh-116px)] flex flex-col gap-[10px] lg:gap-[8px] overflow-y-scroll overflow-x-hidden px-2 lg:px-0">
          {flatData &&
            flatData.map((item, index) => (
              <div
                key={index}
                className="w-[100%] lg:w-[571.167px] h-fit md:h-[195px] lg:h-fit flex-shrink-0 bg-[#D9D9D9] p-2 rounded-md flex flex-col md:flex-row gap-[7px]"
              >
                <div className="lg:w-[50%] relative custom-transition">
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
                  <div className="flex justify-center">
                    <div className="absolute bottom-[20px] flex space-x-1">
                      {imgList.map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full ${
                            currentImageIndices[index] === i
                              ? "bg-blue-400"
                              : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="h-full">
                    <Image
                      className="h-full custom-transition"
                      src={imgList[currentImageIndices[index]]}
                      alt="Slider Image "
                      height={572}
                      // height={472}
                      // width={780}
                      width={780}
                    />
                  </div>
                </div>
                <div className="w-full md:w-[60%]">
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
  );
};

export default MainBody;
