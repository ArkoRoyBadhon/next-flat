import { slidesImg } from "@/utils/mock";
import FlatHeader from "../shared/FlatHeader";
import Slider from "../shared/Slider";
import ViewApplyCard from "../shared/ViewApplyCard";
import RatingCom from "../shared/RatingCom";
import ArrowRight from "@/utils/icons/arrowRight";
import CheckGreenIcon from "@/utils/detailPageIcon/checkGreenIcon";
import WarningIcon from "@/utils/detailPageIcon/warningIcon";
import CloseNotifyIcon from "@/utils/detailPageIcon/closeNotifyIcon";
import DocumntIcon from "@/utils/detailPageIcon/documntIcon";

const RightSideSelect = () => {
  return (
    <>
      <FlatHeader />
      <div className="h-[250px] pt-[8px]">
        <Slider slides={slidesImg} />
      </div>
      <div className="flex justify-between pt-[27px] items-center">
        <p className="italic text-[16px] font-light">Dublin 01 - IFSC</p>
        <p className="text-[24px] font-bold">124 600 €</p>
        <button className="text-[12px] font-normal bg-[#F0F2F6] px-[14px] py-[11px] rounded-[6px] flex gap-[10px]">
          Apply <ArrowRight />
        </button>
      </div>
      <div className="flex justify-between pt-[10px] items-center">
        <div className="flex flex-col font-medium text-[14px]">
          <p className="">123 m²</p>
          <p className="">2 Bedroom</p>
          <p className="">4 Room</p>
        </div>
      </div>
      <div className="bg-[#8D4E83] w-full h-[36px] mt-[12px]"></div>
      <div className="flex flex-col lg:flex-row justify-between items-center pt-[14px]">
        <div className="flex gap-[10px]  justify-center ">
          <div
            className={`flex items-center w-[133px] gap-[12px] px-[5px] py-[16px] box-shadow custom-border flex-1  h-[81px] bg-white`}
          >
            <DocumntIcon />
            <div className="">
              <p
                className={`text-[16px] font-semibold leading-[136.364%] space-x-[0.22px] `}
              >
                2 174
              </p>
              <p
                className={`text-[12px] font-medium leading-5 -space-x-[0.1px]`}
              >
                total Viewing
              </p>
            </div>
          </div>
          <div
            className={`flex items-center w-[133px] gap-[12px] px-[5px] py-[16px] box-shadow custom-border flex-1  h-[81px] bg-white`}
          >
            <DocumntIcon />
            <div className="">
              <p
                className={`text-[16px] font-semibold leading-[136.364%] space-x-[0.22px] `}
              >
                15
              </p>
              <p
                className={`text-[12px] font-medium leading-5 -space-x-[0.1px]`}
              >
                total Applies
              </p>
            </div>
          </div>
        </div>
        <div className="flexflex-col pt-[10px] lg:pt-0">
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
      <div className="w-fit h-fit line-clamp-4 pt-[10px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, in
        nisi? Aliquid saepe recusandae, velit inventore voluptatem repudiandae?
        Illum, inventore.
      </div>
      <RatingCom />
      <div className="pt-[5px]">
        <p className="text-[14px] font-medium leading-normal">Reviews</p>
      </div>
    </>
  );
};

export default RightSideSelect;
