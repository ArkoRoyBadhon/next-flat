// import ChartLine from "@/components/shared/Chart";
import Slider from "@/components/shared/Slider";
import CheckGreenIcon from "@/utils/detailPageIcon/checkGreenIcon";
import CloseNotifyIcon from "@/utils/detailPageIcon/closeNotifyIcon";
import DocumntIcon from "@/utils/detailPageIcon/documntIcon";
import WarningIcon from "@/utils/detailPageIcon/warningIcon";
import ArrowRight from "@/utils/icons/arrowRight";
import CloseIcon from "@/utils/icons/closeIcon";
import FlagIcon from "@/utils/icons/flagIcon";
import MoveIcon from "@/utils/icons/moveIcon";
import ShareIcon from "@/utils/icons/shareIcon";
import WishIcon from "@/utils/icons/wishIcon";
import dynamic from "next/dynamic";

const DynamicChartLine = dynamic(() => import("@/components/shared/Chart"), {
  ssr: false,
});

const AddDetail = ({ params }: { params: { id: string } }) => {
  const slides: string[] = [
    "/images/pexels-andrei-i-17867773.jpg",
    "/images/pexels-ibrahgraphy-deer.jpg",
    "/images/pexels-magda-ehlers-5958376.jpg",
  ];

  return (
    // <div>
    <div className="flex flex-col lg:flex-row w-screen md:h-full md:overflow-hidden">
      {/* left side  */}
      <div className="w-full md:w-[649px] ps-[10px] md:ps-[32px] pe-[10px] md:pe-[20px] hover:pe-[10px] pt-[20px] overflow-y-auto hover-scrollbar">
        <div className="flex justify-between">
          <p className="">Flat</p>
          <div className="flex gap-[15.64px]">
            <button className="h-[32px] w-[32px] rounded-full bg-[#E2E8F0] custom-center">
              <FlagIcon />
            </button>
            <button className="h-[32px] w-[32px] rounded-full bg-[#E2E8F0] custom-center">
              <MoveIcon />
            </button>
            <button className="h-[32px] w-[32px] rounded-full bg-[#E2E8F0] custom-center">
              <ShareIcon />
            </button>
            <button className="h-[32px] w-[32px] rounded-full bg-[#E2E8F0] custom-center">
              <WishIcon />
            </button>
            <button className="h-[32px] w-[32px] rounded-full bg-[#E2E8F0] custom-center">
              <CloseIcon />
            </button>
          </div>
        </div>
        <div className="pt-[16px] w-full">
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
        <div className="bg-red-400 md:w-[574px] h-[124px] mt-[21px]">
          Google ads
        </div>
        <div className="flex gap-[11px] pt-[14px]">
          <div className="flex items-center gap-[12px] px-[20px] py-[16px] box-shadow custom-border w-[279px] h-[81px]">
            <DocumntIcon />
            <div className="">
              <p className="text-[22px] font-semibold leading-[136.364%] space-x-[0.22px] ">
                2 174
              </p>
              <p className="text-[14px] font-medium leading-5 -space-x-[0.1px]">
                total Viewing
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[12px] px-[20px] py-[16px] box-shadow custom-border w-[279px] h-[81px]">
            <DocumntIcon />
            <div className="">
              <p className="text-[22px] font-semibold leading-[136.364%] space-x-[0.22px] ">
                2 174
              </p>
              <p className="text-[14px] font-medium leading-5 -space-x-[0.1px]">
                total Viewing
              </p>
            </div>
          </div>
        </div>
        <p className="text-[14px] font-medium leading-5 line-clamp-5 pt-[19px]">
          আমাদের চ্যানেলে 4k Video quality এবং HD sound quality তে একজন আদর্শ
          মানুষের জীবন কেমন হওয়া উচিৎ, ইতিহাসের শিক্ষনীয় ঘটনা এবং ইসলামী জীবন
          বিধান সম্পর্কে জানতে পারবেন। আমাদের চ্যানেলে 4k Video quality এবং HD
          sound quality তে একজন আদর্শ মানুষের জীবন কেমন হওয়া উচিৎ, ইতিহাসের
          শিক্ষনীয় ঘটনা এবং ইসলামী জীবন বিধান সম্পর্কে জানতে পারবেন...more।
        </p>
      </div>
      {/* right side  */}
      <div className="flex-1 bg-red ps-[10px] pe-[20px]">
        <div
          className={`w-full lg:flex-1 h-[300px] flex-shrink-0 custom-transition `}
        >
          <iframe
            className="h-full w-full"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.173876283906!2d-122.08374978474199!3d37.422476979834715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbc93cf893933%3A0x4b192a2115e131e9!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1615794627853!5m2!1sen!2sus"
            // allowfullscreen
          ></iframe>
        </div>
        <DynamicChartLine />
      </div>
    </div>
    // </div>
  );
};

export default AddDetail;
