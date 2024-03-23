import DocumntIcon from "@/utils/detailPageIcon/documntIcon";
import Slider from "../shared/Slider";
import CloseNotifyIcon from "@/utils/detailPageIcon/closeNotifyIcon";
import WarningIcon from "@/utils/detailPageIcon/warningIcon";
import CheckGreenIcon from "@/utils/detailPageIcon/checkGreenIcon";
import ArrowRight from "@/utils/icons/arrowRight";
import FlatHeader from "../shared/FlatHeader";
import RatingCom from "../shared/RatingCom";
import ViewApplyCard from "../shared/ViewApplyCard";

const LeftSide = () => {
  const slides: string[] = [
    "/images/pexels-andrei-i-17867773.jpg",
    "/images/pexels-ibrahgraphy-deer.jpg",
    "/images/pexels-magda-ehlers-5958376.jpg",
  ];

  return (
    <div className="w-full xl:w-[700px] ps-[10px] lg:ps-[32px] pe-[10px] lg:pe-[20px] pt-[20px] h-full">
      <FlatHeader />
      <div className="pt-[16px] w-full h-[350px]">
        <Slider slides={slides} />
      </div>
      <div className="flex justify-between pt-[27px] items-center">
        <p className="italic text-[16px] font-light">Dublin 01 - IFSC</p>
        <p className="text-[24px] font-bold">124 600 €</p>
        <button className="text-[12px] font-normal bg-[#F0F2F6] px-[14px] py-[11px] rounded-[6px] flex gap-[10px]">
          Apply <ArrowRight />
        </button>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col font-medium text-[14px]">
          <p className="">123 m²</p>
          <p className="">2 Bedroom</p>
          <p className="">4 Room</p>
        </div>
        <div className="flexflex-col">
          <div className="flex gap-[4px] items-center">
            <CheckGreenIcon />
            <p className="text-[14px] font-medium">Requirements 1</p>
          </div>
          <div className="flex gap-[4px] items-center">
            <CheckGreenIcon />
            <p className="text-[14px] font-medium">Requirements 1</p>
          </div>
          <div className="flex gap-[4px] items-center">
            <WarningIcon />
            <p className="text-[14px] font-medium">Requirements 1</p>
          </div>
          <div className="flex gap-[4px] items-center">
            <CloseNotifyIcon />
            <p className="text-[14px] font-medium">Requirements 1</p>
          </div>
        </div>
      </div>
      <div className="bg-red-400 md:w-[574px] h-[124px] mt-[21px] mx-auto">
        Google ads
      </div>
      <div className="px-[36px]">
        <ViewApplyCard />
      </div>
      <p className="text-[14px] font-medium leading-5 line-clamp-5 pt-[19px]">
        আমাদের চ্যানেলে 4k Video quality এবং HD sound quality তে একজন আদর্শ
        মানুষের জীবন কেমন হওয়া উচিৎ, ইতিহাসের শিক্ষনীয় ঘটনা এবং ইসলামী জীবন
        বিধান সম্পর্কে জানতে পারবেন। আমাদের চ্যানেলে 4k Video quality এবং HD
        sound quality তে একজন আদর্শ মানুষের জীবন কেমন হওয়া উচিৎ, ইতিহাসের
        শিক্ষনীয় ঘটনা এবং ইসলামী জীবন বিধান সম্পর্কে জানতে পারবেন...more।
      </p>

      <RatingCom />
    </div>
  );
};

export default LeftSide;
